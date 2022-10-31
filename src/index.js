import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //los estilos son los unicos que se importan directamente
import App from './App'; // importando otro componente
// la estructura de lo que se importa es la siguiente:
// 1ro: escribo la palabra IMPORT
// 2do: escribo el nombre de lo que necesito
// ** (linea 2 -> ReactDOM) / (linea 4 -> App)
// 3ro: escribo la palabra FROM (desde donde lo importo)
// ** linea 1 -> react // linea 2 -> react-dom/client
// 4to: escribo la ruta de lo que necesito
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// todo lo que necesito se importa y se exporta