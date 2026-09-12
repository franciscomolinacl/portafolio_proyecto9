# Portfolio Francisco Molina

Portafolio estatico preparado para GitHub Pages.

La estructura es:

```text
Portafolio/
├── index.html
├── 404.html
├── projects/
│   └── node-express.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── img/
│       ├── logo.webp
│       └── capturas/
├── robots.txt
└── sitemap.xml
```

## Responsabilidad de cada pieza

- `index.html`: Home del portafolio. Presenta identidad profesional, proyectos, capacidades, trayectoria y contacto.
- `projects/node-express.html`: Caso de estudio completo del proyecto Node & Express Web App.
- `404.html`: Pagina de error personalizada.
- `assets/css/styles.css`: Estilos propios que complementan Bootstrap.
- `assets/js/main.js`: Comportamiento del navegador: tema, ano del footer y navbar movil.
- `robots.txt`: Instrucciones basicas de rastreo para crawlers y referencia al sitemap.
- `sitemap.xml`: URLs publicas importantes que queremos facilitar a los buscadores.

## Flujo entre archivos

```text
index.html
├── assets/css/styles.css
├── assets/js/main.js
└── projects/node-express.html

projects/node-express.html
├── ../assets/css/styles.css
├── ../assets/js/main.js
└── ../index.html
```

`../` significa "subir un nivel". Como `node-express.html` vive dentro de `projects/`, necesita subir a la raiz antes de entrar a `assets/`.

## Antes de publicar

Reemplazar los placeholders (si quedan alguno):

- URLs canonical y del sitemap segun la URL real de GitHub Pages
- Enlaces de LinkedIn y GitHub
- Correo electronico de contacto

El codigo esta comentado con foco pedagogico. Los comentarios explican responsabilidades, decisiones de SEO, accesibilidad, Bootstrap, rutas y JavaScript del navegador.
