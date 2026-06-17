# Payment Service Frontend

Frontend desarrollado con React, Vite, TypeScript y TailwindCSS para administrar pagos del backend `payment-service`.

La aplicación permite listar pagos, crear pagos, consultar detalle, cambiar estatus y consumir la API REST expuesta por Spring Boot.

---

## Tecnologías

- React
- TypeScript
- Vite
- TailwindCSS
- Axios
- TanStack Query
- React Router
- Shadcn UI
- Docker
- Nginx

---

## Requisitos

Para ejecutar localmente sin Docker necesitas:

- Node.js 20 o superior
- npm
- Backend `payment-service` ejecutándose en `http://localhost:8080`

Para ejecutar con Docker necesitas:

- Docker
- Docker Compose
- Backend `payment-service` ejecutándose en `http://localhost:8080`

---

## Variables de entorno

Copia el archivo de ejemplo:

```bash
cp .env.template .env
```

Contenido esperado:

```env
VITE_API_URL=http://localhost:8080/api
FRONTEND_PORT=5173
```

`VITE_API_URL` es la URL base del backend.

`FRONTEND_PORT` es el puerto donde se publicará el frontend cuando uses Docker Compose.

> Importante: en Vite, las variables `VITE_*` se integran al momento de compilar. Si cambias `VITE_API_URL`, vuelve a construir la imagen Docker.

---

## Ejecutar sin Docker

Instala dependencias:

```bash
npm install
```

Ejecuta en modo desarrollo:

```bash
npm run dev
```

Abre la aplicación en:

```text
http://localhost:5173
```

---

## Ejecutar con Docker Compose

> Nota: este Dockerfile usa `npm install` en lugar de `npm ci` porque el `package-lock.json` incluido no estaba sincronizado con `package.json`. Si quieres volver a usar `npm ci`, primero regenera el lock con `npm install` y confirma el nuevo `package-lock.json`.

Construye y levanta el contenedor:

```bash
docker compose up --build
```

Abre la aplicación en:

```text
http://localhost:5173
```

Para detener el contenedor:

```bash
docker compose down
```

---

## Ejecutar con Docker manualmente

Construye la imagen:

```bash
docker build \
  --build-arg VITE_API_URL=http://localhost:8080/api \
  -t payment-service-frontend .
```

Ejecuta el contenedor:

```bash
docker run --name payment-service-frontend \
  -p 5173:80 \
  payment-service-frontend
```

Abre:

```text
http://localhost:5173
```

Para detener y eliminar el contenedor:

```bash
docker rm -f payment-service-frontend
```

---

## Backend requerido

Antes de abrir el frontend, confirma que el backend esté arriba:

```text
http://localhost:8080
```

Endpoints usados por el frontend:

```text
GET    /api/payments
GET    /api/payments/{id}
POST   /api/payments
PATCH  /api/payments/{id}/status
```

---

## Configuración CORS en Spring Boot

Si el navegador marca error de CORS, permite el origen del frontend en el backend:

```text
http://localhost:5173
```

Ejemplo básico en Spring Boot:

```java
@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                        .allowedOrigins("http://localhost:5173")
                        .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
                        .allowedHeaders("*");
            }
        };
    }
}
```

---

## Scripts disponibles

```bash
npm run dev       # Ejecuta Vite en desarrollo
npm run build     # Compila TypeScript y genera dist/
npm run preview   # Previsualiza el build localmente
npm run lint      # Ejecuta ESLint
```

---

## Archivos Docker agregados

```text
Dockerfile          # Compila con Node y sirve con Nginx
nginx.conf          # Configuración para servir React Router correctamente
docker-compose.yml  # Levanta el frontend en Docker
.dockerignore       # Evita copiar archivos innecesarios a la imagen
```

---

## Flujo recomendado

1. Levanta SQL Server, RabbitMQ y backend `payment-service`.
2. Verifica que el backend responda en `http://localhost:8080`.
3. Levanta el frontend con:

```bash
docker compose up --build
```

4. Abre:

```text
http://localhost:5173
```

---

## Solución de problemas

### Error: `npm ci can only install packages when your package.json and package-lock.json are in sync`

Ese error pasa cuando `package.json` y `package-lock.json` no coinciden.

Este proyecto ya queda corregido en Docker usando:

```dockerfile
COPY package.json ./
RUN npm install --no-audit --no-fund
```

Si prefieres usar `npm ci`, ejecuta localmente:

```bash
npm install
```

Luego vuelve a construir:

```bash
docker compose down
docker compose build --no-cache
docker compose up
```

### El frontend abre, pero no carga pagos

Verifica:

- Que el backend esté corriendo.
- Que `VITE_API_URL` apunte a `http://localhost:8080/api`.
- Que Spring Boot permita CORS desde `http://localhost:5173`.
- Que el endpoint `GET /api/payments` responda correctamente.

### Cambié `VITE_API_URL` y sigue usando la URL anterior

Vuelve a construir la imagen:

```bash
docker compose down
docker compose up --build
```

### React Router muestra 404 al refrescar una ruta

El archivo `nginx.conf` ya incluye esta regla:

```nginx
try_files $uri $uri/ /index.html;
```

Eso permite refrescar rutas del frontend sin romper la navegación.
