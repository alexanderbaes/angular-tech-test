# AngularTechTest

Este proyecto se generó utilizando [Angular CLI](https://github.com/angular/angular-cli) version 19.2.3.

## Requisitos previos

Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

1. Node.js: Descargue e instale la última versión estable de Node.js desde https://nodejs.org/. Asegúrese de que (Node Package Manager) viene incluido con Node.js.

Verifica la instalación:

node -v
npm -v

2. Angular CLI: Instala el Angular CLI globalmente en tu máquina:

npm install -g @angular/cli

Verifica la instalación:

ng version

3. Git: Asegúrese de que Git está instalado en su sistema. Descárguelo de https://git-scm.com/.

## Clonar el repositorio

Para clonar este repositorio de proyectos, utilice el siguiente comando:

git clone https://github.com/alexanderbaes/angular-tech-test.git

## Instalación de dependencias

Después de clonar el proyecto, vaya al directorio del proyecto e instale las dependencias necesarias utilizando :

cd AngularTechTest
npm install

Este comando descargará e instalará todos los paquetes listados en el archivo en el directorio

## Ejecutar el servidor de desarrollo

Para iniciar un servidor de desarrollo local, ejecute

ng serve

Una vez que el servidor esté funcionando, abra su navegador y navegue hasta `http://localhost:4200/`. La aplicación se recargará automáticamente cada vez que modifiques alguno de los archivos fuente.

## Andamiaje de códigos

Angular CLI incluye potentes herramientas de andamiaje de código. Para generar un nuevo componente, ejecute

ng generate nombre-componente

Para obtener una lista completa de los esquemas disponibles (como `components`, `directives`, o `pipes`), ejecuta:

ng generate --help

## Construir el proyecto

Para construir el proyecto ejecute:

ng build

Esto compilará tu proyecto y almacenará los artefactos de compilación en el directorio `dist/`. Por defecto, la compilación de producción optimiza el rendimiento y la velocidad de tu aplicación.

## Ejecución de pruebas unitarias

Para ejecutar pruebas unitarias con el ejecutor de pruebas [Karma](https://karma-runner.github.io), utilice el siguiente comando:

ng test

## Ejecución de pruebas de extremo a extremo

Para las pruebas de extremo a extremo (e2e), ejecute:

ng e2e

Angular CLI no viene con un marco de pruebas de extremo a extremo por defecto. Usted puede elegir uno que se adapte a sus necesidades.

## Limpieza de la caché del proyecto (opcional)

Si encuentras errores de dependencias o módulos, puedes limpiar y restablecer la caché de npm:

npm cache clean --force
rm -rf node_modules package-lock.json
npm install

## Recursos adicionales

Para obtener más información sobre el uso de la CLI de Angular, incluyendo referencias detalladas de comandos, visite la página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
