# Aplicación React Responsiva con TypeScript y Bootstrap

Esta es una aplicación de ejemplo que demuestra cómo crear una interfaz responsiva usando React, TypeScript y Bootstrap 5 con efecto Glassmorphism.

## Características

- Diseño completamente responsivo
- Efecto Glassmorphism en todos los componentes
- Menú hamburguesa en mobile
- Grid de tarjetas adaptable (1 columna mobile, 2 tablet, 3 desktop)
- Tipografía y espaciado adaptativo
- Despliegue automático en GitHub Pages

## Tecnologías utilizadas

- React 19
- TypeScript 5
- Bootstrap 5
- React-Bootstrap
- Vite
- GitHub Pages



## Enfoque de diseño responsivo

Utilicé Bootstrap 5 por su sistema de grid y componentes preconstruidos, combinado con estilos personalizados para el efecto Glassmorphism. Las clases responsivas como `col-12 col-md-6 col-lg-4` permiten adaptar el layout sin necesidad de media queries manuales.

## Enlace de despliegue

[Ver aplicación en vivo](https://javiii3er.github.io/mi-app-responsiva/)

## Estructura del proyecto
src/
├── components/
│ ├── Header/
│ ├── Footer/
│ └── Card/
├── App.tsx
├── main.tsx
├── index.css
└── vite-env.d.ts


## Cómo ejecutarlo localmente


# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build