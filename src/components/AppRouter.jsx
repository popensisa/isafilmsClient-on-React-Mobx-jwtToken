import { observer } from 'mobx-react-lite'
import {React, useContext} from 'react'
import {Route, Routes} from "react-router-dom"
import { Context } from '..'
import { adminRoutes, authRoutes, publicRoutes } from '../routes'
import { Layout } from './Layout/Layout'

const AppRouter = observer(() => {
    const {user} = useContext(Context)

    return(
        <Routes>
            <Route path="/" element={<Layout/>}>
                {user.isAuth && authRoutes.map(({path, Element}) => 
                    <Route key={path} path={path} element={Element} exact/>
                )}
                {user.isAdmin && adminRoutes.map(({path, Element}) => 
                    <Route key={path} path={path} element={Element} exact/>
                )}
                {publicRoutes.map(({path, Element}) => 
                    <Route key={path} path={path} element={Element} exact/> 
                )}
                <Route path="*" element={publicRoutes[0].Element}/>
            </Route>
        </Routes>
    )
})

export {AppRouter}