import { makeAutoObservable } from "mobx"

export default class FilmsStore{
    constructor(){
        this._types = []
        this._genres = []
        this.country = [
            {id: 1, name: 'США'},
            {id: 2, name: 'Россия'},
            {id: 3, name: 'Великобритания'},
            {id: 4, name: 'Кыргызстан'},
            {id: 5, name: 'Чехия'},
            {id: 6, name: 'Франция'},
            {id: 7, name: 'Германия'},
        ]
        // this._year = [
        //     {id: 1, name: '2015'},
        //     {id: 2, name: '2016'},
        //     {id: 3, name: '2017'},
        //     {id: 4, name: '2018'},
        //     {id: 5, name: '2019'},
        //     {id: 6, name: '2020'},
        //     {id: 7, name: '2021'},
        //     {id: 8, name: '2022'},
        // ]
        this._films = []
        this._comments = []
        this._sortFilms = []
        this._selectedGenre = {}
        this._selectedFilm = {}
        this._selectedRaiting = {}
        this._selectedType = {}
        this._SelectedCountry = {}
        this._loader = true
        makeAutoObservable(this)
    }
    setLoader(boolean){
        this._loader = boolean
    }
    get loader(){
        return this._loader
    }

    setTypes(type){
        this._types = type
    }

    setGenres(genre){
        this._genres = genre
    }

    setFilms(film){
        this._films = film
    }

    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedGenre(genre){
        this._selectedGenre = genre
    }
    setSelectedFilm(film){
        this._selectedFilm = film
    }
    setSelectedCountry(country){
        this._SelectedCountry = country
    }
    setSelectedRaiting(raiting){
        this._selectedRaiting = raiting
    }
    setSortFilms(films){
        this._sortFilms = films
    }
    get type(){
        return this._types
    }

    get genre(){
        return this._genres
    }

    get film(){
        return this._films
    }

    get selectedType(){
        return this._selectedType
    }
    
    get selectedGenre(){
        return this._selectedGenre
    }

    get selectedFilm(){
        return this._selectedFilm
    }

    get selectedCountry(){
        return this._SelectedCountry
    }
    
    get selectedRaiting(){
        return this._selectedRaiting
    }

    get sortFilms(){
        return this._sortFilms
    }
}