

import Ejercicio1 from '../components/Ejercicio1';
import Ejercicio2 from '../components/Ejercicio2';
import Ejercicio3 from '../components/Ejercicio3';
import telefonos from '../components/telefonos';
import bibliografia from '../components/bibliografia'
import App from '../components/App';
import FormularioEj2 from '../components/FormularioEj2';
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
    title: 'bibliografia',
    component: telefonos,
  },
  {
    id: 5,
    path: '/App',
    title: 'Telefonos',
    component: App,
  },
  {
    id: 5,
    path: '/FormularioEj2',
    title: 'FormularioEj2',
    component: App,
  },
 
];

/*
  path
  id
  title
  component

*/