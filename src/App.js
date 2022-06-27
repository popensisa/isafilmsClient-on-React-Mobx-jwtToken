import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react"
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import { AppRouter } from "./components/AppRouter";
import Loader from "./components/loader/Loader";
import { REACT_APP_API_URL } from "./env";
import { fetchFilm, fetchGenre, fetchType } from "./http/filmAPI";
import { check, getSelf } from "./http/userAPI";


const App = observer(() => {
  const {user} = useContext(Context)
  const {film} = useContext(Context)
  const {account} = useContext(Context)

  
  const prom = new Promise(() => {

  })

  const token = localStorage.getItem('token')

  useEffect(() => {
    fetchType().then(data => film.setTypes(data))
    fetchGenre().then(data => film.setGenres(data))
    setTimeout(() => {
      fetchFilm().then(data => film.setFilms(data.rows)).then(() => film.setLoader(false))
    }, 1000)
  }, [])
  useEffect(() => {
    fetchFilm(film.selectedGenre.id, film.selectedCountry.name, film.selectedFilm.year, film.selectedRaiting.number).then(data => {
      film.setSortFilms(data.rows)
    })
  }, [film.selectedGenre, film.selectedCountry, film.selectedFilm.year, film.selectedRaiting.number])
  useEffect(() => {
    if(token){
      setTimeout(() => {
        getSelf(token)
        .then(data => account.setUser(data))
        .then(data => {if(account.user.role == 'ADMIN') user.setIsAdmin(true)})
        .then(() => film.setLoader(false))
      }, 1000)
    }else{
      console.log('Не авторизован')
    }
  }, [])
  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    })
  })

  return (
    <div className="App">
        {film.loader 
        ? <Loader/>
        :<BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
        }
    </div>
  );
})

export default App;
