
# Expresso

Es una tienda virtual. 

Esta aplicacion es solo front-end, con incorporacion de localStorage y la api de
lexachange

De base de datos solo hay un json llamado tienda.json que simula una base de datos, las 
imagenes vienen de pexel y otras aplicaciones de imagenes.

Si quieres usar expresso puedes registrarte en lexachange y obtener una apiKey para usar con tu propio procesador de 
pago.

## Instalacion

Para poder instalar correctamente expresso debes seguir estos pasos

Paso 1: Clonar el repositorio.

```bash
  git clone https://github.com/andresmarquez02/expresso.git
```

Paso 2: Instalar las dependencias de node 

```bash
  npm install
```

Paso 3: Registrarte en Lexachange

Paso 4: Solicitar ip de transferencias en tu perfil de usuario

Paso 5: Crear una app en Lexachange para obtener una api key

Paso 6: Agregar las credenciales a el proyecto. Ir a la carpeta src/views en el archivo Comprar.vue 
y pasarle las props al componente pagar.

```html
  <Pagar apiKey="Youapikey" ip="youip" :monto="montoApagar" ejecute="si quiere ejecutar alguna otra cosa esto es una funcion" />
```
Paso 7: Ejecutar el proyecto con

```bash
  npm run serve
```

## Sitio web

Tambien puedes ver los resultados

http://expressoo.herokuapp.com/

## Autor

- [@andresmarquez](https://www.github.com/andresmarquez02)

## 🔗 Links
[![portafolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://andresmarquez02.github.io/andres/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/andres-marquez-02/)
