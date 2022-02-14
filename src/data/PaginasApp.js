

import Ejercicio1 from '../components/Ejercicio1';
import Ejercicio2 from '../components/Ejercicio2';
import Ejercicio3 from '../components/Ejercicio3';
import telefonos from '../components/telefonos';
import App from '../components/App';
export const MenuItems = [

  {
    id: 1,
    path: '/Ejercicio1',
    title: 'ejercicio1',
    component: Ejercicio1,
  },
 
  {
    id: 2,
    path: '/Ejercicio2',
    title: 'ejercicio2',
    component: Ejercicio2,
  },
  {
    id: 3,
    path: '/Ejercicio3',
    title: 'ejercicio3',
    component: Ejercicio3,
  },
  {
    id: 4,
    path: '/Telefonos',
    title: 'telefonos',
    component: telefonos,
  },
  {
    id: 5,
    path: '/App',
    title: 'app',
    component: App,
  },

 
];

/*
  path
  id
  title
  component

*/