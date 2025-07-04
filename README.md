# React Node Auth

> Proyecto de autenticación de usuarios con frontend en React y backend en Express, utilizando MySQL como base de datos.  
> Sistema robusto y seguro para gestión de usuarios, login, registro y protección de rutas.

---

## Tecnologías

- **Frontend:** React, React Router, Fetch API, CSS Modules  
- **Backend:** Node.js, Express, MySQL, dotenv, cors, bcrypt  
- **Base de datos:** MySQL  
- **Control de versiones:** Git y GitHub

---

## Características

- Registro y autenticación de usuarios con hash seguro de contraseñas (bcrypt)  
- Validación y manejo de errores en backend y frontend  
- Comunicación frontend-backend mediante API REST  
- Protección de rutas y manejo de sesiones  
- Estructura modular y escalable, fácil de mantener y extender

---

## Requisitos previos

- Node.js (v14 o superior)  
- MySQL instalado y corriendo  
- Cuenta de GitHub para control de versiones

---

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/react-node-auth.git
cd react-node-auth
2. Configurar el backend
bash
Copiar
Editar
cd backend
npm install
Crea un archivo .env con tus variables de entorno, por ejemplo:

ini
Copiar
Editar
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=nombre_base_de_datos
PORT=3001
JWT_SECRET=tu_secreto_seguro
3. Configurar el frontend
bash
Copiar
Editar
cd ../frontend
npm install
En el código React, configura la URL de la API para que apunte a tu backend (puede estar en .env o directamente en las llamadas fetch).

4. Ejecutar la aplicación
En terminal 1 (backend):

bash
Copiar
Editar
cd backend
npm start
En terminal 2 (frontend):

bash
Copiar
Editar
cd frontend
npm start
Abre en tu navegador http://localhost:3000

Despliegue
Frontend: Puedes desplegarlo fácilmente en Netlify, Vercel o similar. Recuerda generar el build (npm run build) y subir la carpeta /build o configurar el deploy automático con GitHub.

Backend: Puedes desplegarlo en Render, Heroku o cualquier servicio que soporte Node.js.

Estructura del proyecto
csharp
Copiar
Editar
react-node-auth/
├── backend/            # Backend Express
│   ├── controllers/    # Lógica del negocio
│   ├── models/         # Modelos y base de datos
│   ├── routes/         # Definición de rutas API
│   ├── index.js        # Archivo principal servidor
│   └── package.json
├── frontend/           # Frontend React
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── .gitignore
└── README.md

Autor
Sergio Godoy
Email: sgdivergente13@gmail.com
GitHub: https://github.com/Blxzz-code
Contacto
Si tienes preguntas, ideas o quieres colaborar, no dudes en contactarme.

