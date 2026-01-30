# PidoveHome

Una aplicación web moderna construida con **Angular** que facilita la adopción responsable de palomas. La plataforma permite a los usuarios registrarse, iniciar sesión, explorar un catálogo de palomas disponibles y realizar adopciones de manera sencilla.

## Instalación

### Requisitos previos
- Node.js v18 o superior
- npm 
- Angular CLI v19 o superior

1. **Clonar el repositorio**
```bash
git clone 
cd pidove-home
```
2. **Instalar dependencias**
```bash
npm install
```
3. **Instalar dependencias globales (si es necesario)**
```bash
npm install -g @angular/cli
```
4. **Ejecutar el servidor de desarrollo**
```bash
ng serve
```
5. **Acceder a la aplicación**
Abre tu navegador y ve a `http://localhost:4200/`


##  Características

- **Autenticación segura**: Sistema de registro e inicio de sesión con validaciones
- **Gestión de usuarios**: Control de cuentas y sesiones
- **Catálogo de palomas**: Visualización de todas las palomas disponibles para adoptar
- **Adopción de palomas**: Posibilidad de adoptar palomas con actualización en tiempo real
- **Panel de usuario**: Información personalizada del perfil de usuario
- **Estadística de palomas**: Seguimiento de palomas disponibles y adopciones realizadas

##  Tecnología

| Tecnología | Propósito |
|------------|----------|
| **Angular** |  Framework principal |
| **TypeScript** |  Lenguaje de programación |
| **Reactive Forms** |  Validación de formularios |
| **Bootstrap** |  Estilos y componentes |


## Componentes

### Header
**Selector**: `app-header`

Componente de navegación principal que se muestra en todas las páginas. Utiliza el servicio `User` para obtener la información del usuario actual y mostrar su apodo en el encabezado.

**Funcionalidades**:
- Visualización del nickname del usuario autenticado
- Navegación entre rutas principales
- Indicador de sesión activa

**Dependencias**:
- `User` Service
- `RouterLink` (Angular Router)
---
### LoginForm
**Selector**: `app-login-form`

Formulario reactivo para autenticar usuarios. Implementa validaciones en tiempo real y manejo de errores.

**Características**:
- Validación de email con patrón correcto
- Validación de contraseña obligatoria
- Gestión de errores de login
- Redirección al home tras login exitoso
- Mensaje de error cuando las credenciales son incorrectas

**Validadores**:
- Email: Requerido + Formato válido
- Contraseña: Requerida

**Métodos principales**:
- `handleLogin()`: Procesa el login del usuario

**Dependencias**:
- `User` Service
- `Router` (Angular Router)
- `ReactiveFormsModule`
---
### RegisterForm
**Selector**: `app-register-form`

Formulario completo para registro de nuevos usuarios con validaciones complejas a nivel de campo y formulario.

**Características**:
- Validación de email único (no repetido)
- Validación de coincidencia de contraseñas
- Validación de longitud mínima de contraseña
- Confirmación de registro exitoso
- Redirección a login tras registro

**Validadores**:
- Email: Requerido + Formato válido + No repetido
- Nickname: Requerido
- Contraseña: Requerida + Mínimo 6 caracteres
- Repetir contraseña: Requerida + Debe coincidir con contraseña

**Métodos principales**:
- `validateOptions()`: Valida que las contraseñas coincidan
- `repeatedEmail()`: Verifica que el email no esté ya registrado
- `handleAccount()`: Crea la nueva cuenta de usuario

**Dependencias**:
- `User` Service
- `Router` (Angular Router)
- `ReactiveFormsModule`
---
### PigeonCards
**Selector**: `app-pigeon-cards`

Componente que muestra todas las palomas disponibles en formato de tarjetas. Permite la interacción del usuario para adoptar palomas.

**Características**:
- Listado dinámico de palomas
- Información detallada por paloma (nombre, edad, descripción, etiqueta)
- Botón de adopción que elimina la paloma del catálogo
- Actualización en tiempo real del catálogo

**Propiedades**:
- `pigeons: Pigeon[]` - Array de palomas disponibles

**Métodos principales**:
- `deletePigeon(id: number)`: Elimina/adopta una paloma del catálogo

**Interfaz Pigeon**:
```typescript
interface Pigeon {
  id: number;
  name: string;
  age: number;
  description: string;
  label: string;      // ej: "domesticado", "sociable", "entrenable"
  style: string;      // Clases de Bootstrap para color (bg-success, bg-info, etc)
  img: string;        // Ruta de la imagen
}
```

**Dependencias**:
- `PigeonService`
---
### UserData
**Selector**: `app-user-data`

Componente que muestra la información del usuario autenticado y proporciona la funcionalidad de logout.

**Características**:
- Visualización de email y nickname del usuario
- Botón de logout
- Gestión de sesión

**Propiedades**:
- `currentUser: { email: string, nickname: string } | null` - Datos del usuario actual

**Métodos principales**:
- `logout()`: Cierra la sesión del usuario

**Dependencias**:
- `User` Service

## Rutas y Páginas

| Rutas | Páginas |
|------------|----------|
| '/' |  `Página de inicio`:  Muestra estadísticas sobre adopciones y palomas disponibles |
| '/adopt' |  `Página de adopción`: Muestra el catálogo de palomas con el componente `PigeonCards`|
| '/info' |  `Información`: Muestra la información del sitio web y por qué es buena idea elegir a una paloma como compañera |
| '/register' |  `Registro`: Página de registro para nuevos usuarios |
| '/login' |  `Iniciar sesión`: Página de inicio de sesión para usuarios registrados |
| '/user' |  `Perfil`: Perfil para usuarios logueados, enseña información de la cuenta |

## Notas Importantes

- **Datos de sesión**: Los datos de usuarios y adopciones se almacenan en memoria. Al recargar la página se pierden (sin persistencia).
- **Validación de formularios**: Todos los formularios tienen validación en tiempo real con Reactive Forms.
- **Mensajes de error**: Se muestran claramente cuando hay problemas de autenticación o validación.
- **Seguridad básica**: La contraseña se valida pero se almacena sin encriptar en el servidor.

## Autora
Ruth Collado García
