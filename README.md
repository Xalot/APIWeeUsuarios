# PracticaTecnicaWee

Prueba técnica para Wee.

Este proyecto consiste en una aplicación web que permite registrar usuarios y mostrar un listado de usuarios registrados. Incluye una API desarrollada en .NET y un front-end construido con HTML, CSS y JavaScript, utilizando Bootstrap y jQuery.

## Descripción del Proyecto

La aplicación permite:

- Registrar usuarios con información como nombre de empresa, nombre de contacto, correo electrónico y teléfono.
- Mostrar un listado de usuarios registrados, obteniendo los datos desde la API.
- Validar el formulario de registro en tiempo real.
- Mostrar mensajes de confirmación utilizando SweetAlert2.
- Respetar términos y condiciones antes de realizar el registro.

## Instrucciones de Ejecución

### Requisitos Previos

- **.NET SDK** (versión que utilizaste para desarrollar la API, por ejemplo, .NET 6.0)
- **Visual Studio** o **Visual Studio Code** (opcional, pero recomendado)
- **Node.js** (opcional, si deseas utilizar `http-server` para servir el front-end)
- **Navegador web** actualizado (Chrome, Firefox, Edge, etc.)

### Configuración de la API

Antes de ejecutar la API, es necesario configurar el archivo `appsettings.json` para establecer la cadena de conexión a la base de datos y otras configuraciones específicas del entorno.

1. **Ubicación del archivo `appsettings.json`:**

   El archivo se encuentra en la carpeta raíz del proyecto de la API (por ejemplo, `PracticaTecnicaWee/APIWeeUsuarios/appsettings.json`).

2. **Configuración de la cadena de conexión:**

   En el archivo `appsettings.json`, localiza la sección `"ConnectionStrings"` y modifica el valor de `"DefaultConnection"` para que apunte a tu instancia de base de datos.

   ```json
   {
     "ConnectionStrings": {
       "DefaultConnection": "Server=TU_SERVIDOR;Database=TU_BASE_DE_DATOS;Trusted_Connection=True;MultipleActiveResultSets=true"
     },
     "Logging": {
       "LogLevel": {
         "Default": "Information",
         "Microsoft": "Warning",
         "Microsoft.Hosting.Lifetime": "Information"
       }
     },
     "AllowedHosts": "*"
   }
   ```
### Ejemplo de cadena de conexión:

- Si estás utilizando SQL Server localmente:

```json
"DefaultConnection": "Server=localhost;Database=PracticaTecnicaWeeDB;Trusted_Connection=True;MultipleActiveResultSets=true"
```
- Si estás utilizando una instancia específica o un servidor remoto:

```json
"DefaultConnection": "Server=MI_SERVIDOR_SQL;Database=PracticaTecnicaWeeDB;User Id=MI_USUARIO;Password=MI_CONTRASEÑA;MultipleActiveResultSets=true"
```
3. **Migraciones y creación de la base de datos:**	

Si tu aplicación utiliza Entity Framework Core y migraciones, puedes ejecutar los siguientes comandos en la Consola del Administrador de Paquetes o en la terminal para aplicar las migraciones y crear la base de datos:

- **Usando la Consola del Administrador de Paquetes en Visual Studio:**	
```powershell
Update-Database
```
- **Usando la CLI de .NET Core:**	
```bash
dotnet ef database update
```
- Asegúrate de que la herramienta de Entity Framework Core esté instalada:
```bash
dotnet tool install --global dotnet-ef
```

### Ejecución de la API

1. Navega hasta la carpeta de la API (por ejemplo, `PracticaTecnicaWee/APIWeeUsuarios`).

2. Abre la solución o proyecto en Visual Studio.

3. Ejecuta la API:

   - Si usas Visual Studio, presiona **F5** o haz clic en **Iniciar**.
   - Asegúrate de que la API está corriendo en el puerto `7055` (o el que corresponda).

4. Verifica que la API está funcionando accediendo a `https://localhost:7055/api/Usuarios` en tu navegador.

### Ejecución del Front-End

#### Opción 1: Usando Live Server en Visual Studio Code

1. Abre la carpeta en Visual Studio Code.

2. Asegúrate de tener instalada la extensión **Live Server**.

3. Abre el archivo `index.html` y haz clic derecho, selecciona **"Open with Live Server"**.

4. El front-end se servirá en una dirección como `http://127.0.0.1:5500/index.html`.

#### Opción 2: Usando http-server con Node.js

1. Abre una terminal y navega hasta la carpeta del front-end:

   ```bash
   cd ruta/a/tu/PracticaTecnicaWee/FrontEndUsuarios
   ```

2. Instala _http-server_ si no lo tienes:

   ```bash
   npm install -g http-server
   ```

3. Inicia el servidor:
   ```bash
   http-server -c-1
   ```
4. Accede al front-end en _http://localhost:8080/index.html._

---

## Tecnologías Utilizadas

### Back-End:

	- .NET (C#)

	- ASP.NET Core Web API

### Front-End:

	-HTML5 y CSS3

	-JavaScript (jQuery)

	-Bootstrap 4.5

	-SweetAlert2