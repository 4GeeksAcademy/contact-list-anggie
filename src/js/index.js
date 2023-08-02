//import react into the bundle
import React from 'react'
import { createRoot } from 'react-dom/client'

//include your index.scss file into the bundle


//import your own components
import Layout from './layout.js'

//
const root = createRoot(document.querySelector("#app"))

//render your react application
root.render(<Layout />)


//AQUI NO TOQUES NADA ANGGIE!!
//paso 1: que las views usen el state que yo tengo
//paso 2: encontrar como llamar las acciones
//paso 3: implementar las acciones (solo con console log("esta accion esta funcionando)"))
//paso 4: fetch
