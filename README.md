# ¿Cómo hacer una página web que funcione de índice?

Para realizar este ejemplo me he guiado por la web dada en el guión de la práctica 1 de la asignatura de PAI. 

## Primeros pasos

Se tienen dos carpetas principales que se deben crear en nuestro repositorio actual. La primera es la carpeta "www" y la segunda la carpeta "web-server". Cabe destacar que esta organización de carpetas es sólo un ejemplo de cómo se podría trabajar.

En la carpeta "web-server" se tiene el archivo "app.js" con una configuración similar a la siguiente:

 ```js
 //const EXPRESS = require('express');
import EXPRESS from "express";
//const PATH = require('path');
import PATH from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = PATH.dirname(__filename);
const APP = EXPRESS();

//set the port
APP.set('port', 8080);

//tell express that we want to use the www folder
//for our static assets
APP.use(EXPRESS.static(PATH.join(__dirname, '../www')));
APP.use(EXPRESS.static(PATH.join(__dirname, '..')));

// Listen for requests
const SERVER = APP.listen(APP.get('port'), '0.0.0.0', function () {
  console.log('The server is running on http://<your machine IP addr>:' + APP.get('port'));
});
 ```

Nótese que se emplea "import ... from ..." en lugar de "require" para importar módulos. Esto se debe a que al incluir la línea 

```json
{
  "type": "module"
}
```

en nuestro fichero "package.json", le estamos diciendo que estamos trabajando con ESM en lugar de CommonJS.

Es importante destacar el cambio en la línea:

```js
APP.use(EXPRESS.static(PATH.join(__dirname, '../www')));
APP.use(EXPRESS.static(PATH.join(__dirname, '..')));
```

Aquí podemos tener dos enfoques. Si no añadimos la segunda línea, deberemos copiar las carpetas "out" generadas con jsdoc dentro de la carpeta "www". 

Si dejamos sólo la segunda línea, habrá problemas al encontrar la página "index.html" que se encuentra dentro de la carpeta "www".

## Configurar nuestra página índice

Tal y como se puede ver en el ejemplo, se emplean etiquetas "href" para crear enlaces a las webs locales que nos ha generado jsdoc.

```html
<html>
<body>
<h1> Index </h1>
<p> <a href="/src/01-Example_01/out/example_1.js.html">01-P29973-Triangle</a></p>
<p> <a href="/src/02-Example_02/out/example_2.js.html">02-P34279-Add_one_second</a></p>

</body>
</html>
```

Esta página se puede adornar como se desee, pero para tener una versión básica y funcional, así es suficiente.

Para volver a la página de inicio, se podría modificar cada uno de los archivos html generados por jsdoc o crear una cabecera que envolviera nuestra web, pero eso no se verá en este ejemplo ya que no es el objetivo principal de la práctica.

# Elementos principales
- [ ] Carpeta "www"
- [ ] Carpeta "web-server"
- [ ] Configuración del fichero "app.js"
- [ ] Configuración del fichero "index.html"
- [ ] Instalación del módulo "express"
- [ ] Configuración del "package.json" 

# Referencias
- [Referencia a la práctica 1](https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-PAI-P01-EnvironmentWebServerJutge)
- [Información sobre ESM y CJS](https://lenguajejs.com/automatizadores/introduccion/commonjs-vs-es-modules/)
- [Información sobre: required is notdefined error](https://stackoverflow.com/questions/59443525/require-not-working-in-module-type-nodejs-script)