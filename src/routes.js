import React from "react"
import { Account } from "./pages/Account"
import { Admin } from "./pages/Admin"
import { Anime } from "./pages/Anime"
import { Auth } from "./pages/Auth"
import { Cartoons } from "./pages/Cartoons"
import { Films } from "./pages/Films"
import { FilmsSelect } from "./pages/FilmsSelect"
import { Main } from "./pages/Main"
import { New } from "./pages/New"
import { TheBest } from "./pages/TheBest"
import { ACCOUNT_ROUTE, ADMIN_ROUTE, ANIME_ROUTE, BEST_ROUTE, CARTOONS_ROUTE, FILMS_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, NEW_ROUTE, REG_ROUTE } from "./utlis/consts"

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Element: <Admin/>
    }
]
export const authRoutes = [
    {
        path: ACCOUNT_ROUTE,
        Element: <Account/>
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Element: <Main/>
    },
    {
        path: FILMS_ROUTE,
        Element: <Films/>
    },
    {
        path: FILMS_ROUTE + "/:id",
        Element: <FilmsSelect/>
    },
    {
        path: CARTOONS_ROUTE,
        Element: <Cartoons/>
    },
    {
        path: CARTOONS_ROUTE + "/:id",
        Element: <FilmsSelect/>
    },
    {
        path: NEW_ROUTE,
        Element: <New/>
    },
    {
        path: NEW_ROUTE + "/:id",
        Element: <FilmsSelect/>
    },
    {
        path: BEST_ROUTE,
        Element: <TheBest/>
    },
    {
        path: BEST_ROUTE + "/:id",
        Element: <FilmsSelect/>
    },
    {
        path: ANIME_ROUTE,
        Element: <Anime/>
    },
    {
        path: ANIME_ROUTE + "/:id",
        Element: <FilmsSelect/>
    },
    {
        path: LOGIN_ROUTE,
        Element: <Auth/>
    },
    {
        path: REG_ROUTE,
        Element: <Auth/>
    }
]