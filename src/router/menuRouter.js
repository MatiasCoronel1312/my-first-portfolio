import About from "../components/About";
import Contact from "../components/Contact";
import Works from "../components/Works";


export const menuRouter = [
    {
        id: 'about',
        path: '/',
        Element: About,
    },
    {
        id: 'works',
        path: '/works',
        Element: Works,
    },
    {
        id: 'contact',
        path: '/contact',
        Element: Contact,
    },
    // {
    //     id: 'proyectsDetails',
    //     path: '/works/:id',
    //     Element: ProyectsDetails,
    // },
]