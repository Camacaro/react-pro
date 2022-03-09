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