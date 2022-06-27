import { ADMIN_ROUTE, ANIME_ROUTE, BEST_ROUTE, CARTOONS_ROUTE, FILMS_ROUTE, NEW_ROUTE } from "../../utlis/consts";


export const adminLink = [
    {
        link: ADMIN_ROUTE,
        title: "Администратор"
    }
]

export const publicLink = [
    {
        link: FILMS_ROUTE,
        title: "Фильмы"
    },
    {
        link: CARTOONS_ROUTE,
        title: "Мультфильмы"
    },
    {
        link: ANIME_ROUTE,
        title: "Аниме"
    },
    {
        link: BEST_ROUTE,
        title: "Лучшее"
    },
    {
        link: NEW_ROUTE,
        title: "Новинки"
    }
]