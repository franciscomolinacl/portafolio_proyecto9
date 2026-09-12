# Portfolio HelpDesk

Este directorio contiene un portafolio estático completo preparado para GitHub Pages.

La estructura es:

```text
portfolio_helpdesk_comentado/
├── index.html
├── cv.html
├── 404.html
├── projects/
│   └── helpdesk.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── robots.txt
└── sitemap.xml
```

## Responsabilidad de cada pieza

- `index.html`: Home del portafolio. Presenta identidad profesional, proyectos, capacidades, trayectoria y contacto.
- `projects/helpdesk.html`: caso de estudio completo del proyecto HelpDesk.
- `cv.html`: CV navegable e imprimible.
- `404.html`: página de error personalizada.
- `css/styles.css`: estilos propios que complementan Bootstrap.
- `js/main.js`: comportamiento del navegador: tema, año del footer y navbar móvil.
- `robots.txt`: instrucciones básicas de rastreo para crawlers y referencia al sitemap.
- `sitemap.xml`: URLs públicas importantes que queremos facilitar a los buscadores.

## Flujo entre archivos

```text
index.html
├── css/styles.css
├── js/main.js
├── cv.html
└── projects/helpdesk.html

projects/helpdesk.html
├── ../css/styles.css
├── ../js/main.js
└── ../index.html
```

`../` significa “subir un nivel”. Como `helpdesk.html` vive dentro de `projects/`, necesita subir a la raíz antes de entrar a `css/` o `js/`.

## Antes de publicar

Reemplazar los placeholders:

- `Nombre Apellido`
- `TU_USUARIO`
- `nombre@example.com`
- `+56 9 1234 5678`
- enlaces de LinkedIn y GitHub
- URLs canonical y del sitemap según la URL real de GitHub Pages

Si no se desea publicar teléfono, eliminarlo de la interfaz y también del JSON-LD.

El código está comentado con foco pedagógico. Los comentarios explican responsabilidades, decisiones de SEO, accesibilidad, Bootstrap, rutas y JavaScript del navegador.
