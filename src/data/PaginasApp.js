

import Ejercicio1 from '../components/Ejercicio1';
import Ejercicio2 from '../components/Ejercicio2';
import Ejercicio3 from '../components/Ejercicio3';
import telefonos from '../components/telefonos';

import App from '../components/App';
import Formularioejercicio3 from '../components/Formularioejercicio3';
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
    path: '/App',
    title: 'Telefonos',
    component: App,
  },
  {
    id: 5,
    path: '/Telefonos',
    title: 'telefonos2',
    component: telefonos,
  },
  {
    id: 6,
    path: '/Formularioejercicio3',
    title: 'formulario',
    component: Formularioejercicio3,
  },
 
];

/*
  path
  id
  title
  component

*/