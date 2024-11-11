# Proyecto de Gestión de Servicios entre Agentes y Clientes

## Descripción General

Este proyecto es una aplicación web desarrollada en **TypeScript** que permite la gestión y transacción de servicios entre dos tipos de usuarios: **agentes** y **clientes**. Los agentes pueden ofrecer varios servicios especializados, mientras que los clientes pueden comprar y gestionar estos servicios a través de la plataforma.

La aplicación cuenta con dos módulos principales:
1. **Módulo de Agentes**: Los agentes pueden gestionar sus servicios, ajustar precios y ver el historial de ventas.
2. **Módulo de Clientes**: Los clientes pueden visualizar y comprar servicios, gestionar su perfil, y revisar su historial de transacciones.

El proyecto utiliza una base de datos en **SQL** para almacenar la información, y cada usuario debe autenticarse utilizando un correo electrónico y una contraseña. Las contraseñas se almacenan de forma segura utilizando hashing.

## Características

### 1. Autenticación de Usuarios
- **Inicio de sesión** y **registro** mediante correo electrónico y contraseña.
- Las contraseñas se almacenan utilizando un método de **hashing seguro** para garantizar la seguridad de los datos.
- **Autorización** basada en roles para diferenciar las vistas y permisos de agentes y clientes.

### 2. Gestión de Servicios
- Los agentes pueden **agregar, modificar y eliminar servicios**.
- Los servicios disponibles incluyen:
  - Programación
  - BI y BA (Business Intelligence y Business Analytics)
  - Auditoría de seguridad informática
  - Bases de datos
- Cada servicio tiene un precio establecido por el agente, una descripción, y está asociado al perfil del agente que lo ofrece.

### 3. Transacciones y Gestión de Historial
- Los clientes pueden **comprar** servicios directamente desde la aplicación.
- Los clientes tienen un **historial de transacciones** que les permite ver los servicios comprados y guardados, así como los servicios que han visitado.
- Los agentes pueden revisar el **historial de ventas**, lo que les permite analizar sus servicios y precios.

### 4. Seguridad y Privacidad
- Las contraseñas se almacenan de forma segura mediante hashing.
- Las operaciones de la base de datos están protegidas mediante roles de usuario y un sistema de autenticación con **JWT** (JSON Web Tokens).
- El proyecto utiliza **TypeORM** para la gestión de la base de datos, lo que permite manejar las relaciones entre usuarios, servicios y transacciones de manera segura y eficiente.

## Estructura del Proyecto

### Backend
El backend está desarrollado con **Node.js** y **Express**, utilizando **TypeORM** para interactuar con la base de datos SQL. Proporciona endpoints seguros para gestionar la autenticación, la creación de servicios, y la gestión de transacciones entre clientes y agentes.

### Frontend
El frontend está desarrollado con **React** (en TypeScript) y proporciona una interfaz intuitiva para que los agentes y clientes puedan gestionar sus perfiles, servicios y transacciones. La interfaz de usuario cambia dinámicamente dependiendo del rol del usuario (agente o cliente).

## Tecnologías Utilizadas

- **Lenguaje**: TypeScript
- **Backend**: Node.js, Express
- **Frontend**: React
- **Base de Datos**: SQL Server
- **ORM**: TypeORM
- **Autenticación**: JWT para el manejo seguro de sesiones
- **Hashing de Contraseñas**: Bcrypt

## Instalación y Configuración

1. Clona el repositorio.
   ```bash
   git clone [https://github.com/ernestostarck/proyecto-agente-cliente.git](https://github.com/ernestostarck/Proyecto_WebMobile.git]
   ```

2. Instala las dependencias del backend y frontend.
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Configura la base de datos en `ormconfig.json` y actualiza las variables de entorno en `.env` para los secretos de JWT y la configuración de la base de datos.

4. Ejecuta el backend.
   ```bash
   cd backend
   npm start
   ```

5. Ejecuta el frontend.
   ```bash
   cd frontend
   npm start
   ```

## Contribución

1. Crea un *fork* del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Haz *commit* a tus cambios (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube los cambios a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Crea una *pull request*.
