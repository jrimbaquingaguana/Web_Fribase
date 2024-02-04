# React Firebase Authentication

Este proyecto implementa la autenticación de usuarios utilizando Firebase en una aplicación React. A continuación, se detallan los pasos para configurar y ejecutar el proyecto.

## Configuración del Proyecto en Firebase

1. **Crea un proyecto en Firebase:**
   - Ve a la [consola de Firebase](https://console.firebase.google.com/) y crea un nuevo proyecto.
   
2. **Habilita la autenticación:**
   - Dentro del proyecto de Firebase, ve a la sección de autenticación y habilita los proveedores de autenticación que necesites (correo electrónico/password, Google, Facebook, etc.).

## Configuración del Proyecto React

1. **Inicia un nuevo proyecto React:**
   - Utiliza `npx create-react-app my-app` para iniciar un nuevo proyecto si no tienes uno ya creado.

2. **Instala Firebase:**
   - Ejecuta `npm install firebase` o `yarn add firebase` para añadir Firebase a tu proyecto.

3. **Configura Firebase:**
   - Crea un archivo `firebase.js` en el directorio `src` para configurar Firebase con las credenciales de tu proyecto.

## Implementación de Autenticación

1. **Formulario de Inicio de Sesión y Registro:**
   - Crea componentes React (`Login.js` y `Register.js`) para los formularios de inicio de sesión y registro.
   - Utiliza los métodos de Firebase para autenticar a los usuarios.

2. **Manejo de Mensajes:**
   - Implementa la lógica para mostrar mensajes de éxito o error después de intentos de inicio de sesión o registro.

## Protección de Rutas

1. **Configura React Router:**
   - Utiliza `react-router-dom` para definir las rutas de tu aplicación en `App.js`.

2. **Protección de Rutas:**
   - Crea un componente `ProtectedRoute.js` para restringir el acceso a ciertas páginas a usuarios no autenticados.

## Interfaz de Usuario

1. **Diseño de los Formularios:**
   - Diseña interfaces atractivas para los formularios de inicio de sesión y registro, utilizando `App.css` y Tailwind CSS para estilizar los componentes.

2. **Retroalimentación al Usuario:**
   - Asegúrate de proporcionar retroalimentación clara y útil al usuario durante el proceso de autenticación.

## Ejecución del Proyecto

Para ejecutar el proyecto localmente, sigue estos pasos:

1. **Instala las Dependencias:**
   - Ejecuta `npm install` para instalar todas las dependencias del proyecto.

2. **Inicia el Servidor de Desarrollo:**
   - Ejecuta `npm start` para iniciar el servidor de desarrollo. Accede a `http://localhost:3000` para ver tu aplicación.

## Dependencias Utilizadas

- React 17.0.2
- Firebase 9.6.4
- React Router Dom 6.2.1
- Tailwind CSS 3.0.16

## Estructura del Proyecto

```markdown
proyectoFirebase/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ Alert.js
│  │  ├─ Home.js
│  │  ├─ Login.js
│  │  ├─ ProtectedRoute.js
│  │  └─ Register.js
│  ├─ context/
│  │  └─ AuthContext.js
│  ├─ img/
│  ├─ App.css
│  ├─ App.js
│  ├─ App.test.js
│  ├─ firebase.js
│  ├─ index.css
│  ├─ index.js
│  ├─ reportWebVitals.js
│  └─ setupTests.js
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ README.md
└─ tailwind.config.js
```

## Elaborado por:
Ricardo Rivadeneira, Jose Imbaquinga
