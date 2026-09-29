# jfs-website

Portfolio personal de Javier Fidalgo Saeta (arquitecto / especialista BIM), publicado en https://javierfidalgosaeta.com.

## Stack

- HTML + CSS escritos a mano, sin build, sin frameworks, sin dependencias npm.
- `index.html` contiene todo el contenido y el JavaScript inline; `styles.css` los estilos.
- Assets (imágenes y PDFs) en `public/`.
- Iconos: Font Awesome por CDN. Tipografía: Inter desde Google Fonts.

## Despliegue

- GitHub Pages sirve directamente la rama `main`. Hacer push a `main` publica la web en ~1 minuto.
- No hacer push sin confirmación explícita del usuario.
- `CNAME` define el dominio: no modificarlo.

## Convenciones

- **Nombres de archivo en `public/`: siempre en minúsculas y kebab-case** (`img-pyrevit-jfs-tools.png`). GitHub Pages distingue mayúsculas y Windows no: un error de mayúsculas funciona en local y da 404 online.
- Prefijos: `img-` para imágenes de proyecto, `pdf-` para documentación de proyectos, `cert-` para certificados.
- En el texto visible, respetar la grafía oficial de cada marca (`pyRevit`, `Revit`, `Rhino`, `Grasshopper`).

## Idiomas (ES / EN)

- El idioma por defecto es español. El botón `#language-toggle` cambia a inglés y guarda la elección en `localStorage`.
- Cada elemento traducible lleva un atributo `data-key`, y esa clave debe existir en `translations.es` y en `translations.en` (objeto al final de `index.html`).
- El texto en español está duplicado: en el HTML y en `translations.es`. **Al editar un texto, cambiar ambos** y actualizar también la versión inglesa.

## Verificación antes de commitear

Comprobar que todas las rutas a `public/` coinciden exactamente con ficheros existentes:

```bash
for f in $(grep -o 'public/[A-Za-z0-9._-]*' index.html | sort -u); do git ls-files --error-unmatch "$f" >/dev/null 2>&1 || echo "FALTA: $f"; done
```
