# Basic firebase CRUD
## Description: 

- src (folder) --> todo el codigo
- index.js (file) -> arranca el project
- app.js (file) -> configurar el servidor o la application
- views (folder) -> htmls files
- routes (folder) -> rutas del servidor
- public (folder) -> archivos publicos del servidor
- modules installde: morgan, express, express-handlebars, firebase-admin, path viene por default, 

- nodemon (preview with no reload) 
- Modify the package.json file : the 'scripts' object, to add the shortcut and run with 'npm run dev'

## Install 

### using nodejs
- `npm install`

## Documentation

### grab the firebase link from:
- `https://console.firebase.google.com/`

### how to configure firebase in linux documentation here: 
- `https://firebase.google.com/docs/admin/setup` 

### To create the firebase key, go to: firebase console > Realtime Database > Project Settings > Cloud Messaging, and create the key in there. 
- From there, you should get the *.json* file and add it to you project `(routes/index.js)`

### Crear la variable de entorno para poder usar firebase:
- `export GOOGLE_APPLICATION_CREDENTIALS="/Users/ss/Desktop/progs/temp/firebase-node-app/test1-r2c1e-firebase-adminsdk-piozu-163799x0d5.json”`
