### Crear un proyecto
```npx create-react-app bases --template typescript```
```yarn create vite```

## 02 Lazy Load
En esta sección vamos a llevar nuestro sistema de rutas a otro nivel, el objetivo principal sera:

* Aplicar Lazy Load en cada Componente
* Aplicar Lazy Load por módulo

La idea del módulo es que nos permita cargarlo y todas sus dependencias en conjunto.

## 03 Compound Component Pattern
En esta sección aprenderemos el patrón de construcción de componentes llamado "Compound Component Pattern" el cual es muy usado por Material UI, ionic y muchos otros que trabajan con componentes previamente creados que se pueden anidar entre si mediante HOCs (Higher Order Components)  
* Extensible className
* Extensible Styles
* Control Props
* State Initializer
  Lo que están apunto de observar en esta sección es el patrón State Initializer junto al diseño de componentes que utiliza Formik.

  El principal objetivo es poder exponer todo lo que el usuario (otro desarrollador) puede utilizar, el patrón principalmente pide que se pueda ofrecer un estado inicial y una forma de re-establecer el estado a su forma original, pero nosotros aquí lo llevaremos a otro nivel exponiendo funciones y nuevas propiedades.

  También aprenderemos a enviar una función como children, similar a la implementación de Formik.

## 04 Desplegar componente (jcamacaro-product-card)
Aquí realizaremos el primer despliegue a NPM de nuestro paquete.

## 05 - Formik
Bases y temas avanzados de Formik, aquí veremos:

* useFormik
* Formik Component
* Formik Context
* useField
* Formik Custom Components
* Custom Components
* Metadata de los inputs
* Abstractation
* Yup
  - Validaciones tipicas
  - Validaciones personalizadas
* Construir inputs de forma dinámica
* Construir validaciones basados en propiedades
* Selects, Inputs
* Ideas para validaciones

## 06 - Storybook
Esta sección está enfocada en aprender como integrar Storybook en nuestras aplicaciones de React para transformarla en una aplicación que nos ayudará a probar y desarrollar de una mejor manera nuestros componentes.

Objectivo:
* Integrar Storybook en una aplicación de React con Npx
* Crear un componente desde cero
* Crear historias
* Configurar historias
* Utilizar varios controles para las properties
* Integración con TypeScript
* Crear documentaciones de componentes
* Desplegar documentación a diferentes sitios
* Chromatic para desplegar Storybook de forma colaborativa

## 06 - Storybook - Pacakge module
* Tomar nuestros componentes probados con Storybook
* Generar los archivos de definición de TypeScript
Generar el build de producción
* Crear una acción en Github actions para crear el versionamiento semántico
* Usar el versionamiento semantico para publicar la version del paquete
* Publicar el paquete en NPM
* Actualizar paquete
* Consumir el paquete en aplicaciones externas.

## 07 - React PWA
Introducción técnica a las PWA con aplicaciones de React, la PWA no es una tecnología que sólo se aplique a React, pero aquí veremos como integrarlo de varias maneras.

Fundamentos y formas te trabajar con la PWA usando la configuración por defecto que nos ofrece npx create-react-app
Service Worker

* Caché
* Instalación
* Fetch
* Estrategias del caché
  - Network first
  - Cache Only
  - Network first with cache fallback

### Nota
Se uso my-app para tomar la configuracion del service worker del comando
``` npx create-react-app my-app --template cra-template-pwa```

## 08 - React PWA Workbox
Workbox es una herramienta que compro Google y ahora le da soporte, que permite configuraciones poderosas, rápidas y fáciles para el manejo de nuestras PWAs.
* Detectar Online y Offline desde React
* Workbox
* Wizard
* Estrategias
* Background Sync
* IndexedDB
* Offline CRUD
* Optimizaciones de nuestro service worker