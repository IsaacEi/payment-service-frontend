# Payment Service Frontend

Frontend desarrollado con React, Vite, TypeScript y TailwindCSS para la administración y seguimiento de pagos.

## Tecnologías

- React 19
- TypeScript
- Vite
- TailwindCSS
- React Router DOM
- Axios
- TanStack Query
- Shadcn UI

---

## Requisitos Previos

Antes de iniciar el proyecto asegúrate de tener instalado:

- Node.js 20+
- npm 10+
- Backend Payment Service ejecutándose
- RabbitMQ (opcional para pruebas de eventos)
- SQL Server

---

## Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/IsaacEi/payment-service-frontend.git
cd payment-service-frontend
```

### 2. Configurar variables de entorno

```bash
cp .env.template .env
```

```env
VITE_API_URL=http://localhost:8081/api
```

---

## Instalación

```bash
npm install
```

---

## Ejecución en Desarrollo

```bash
npm run dev
```

Aplicación disponible en:

http://localhost:5173

---

## Backend

Verificar que el backend esté ejecutándose en:

http://localhost:8081

### Endpoints principales

- GET /api/payments
- GET /api/payments/{id}
- POST /api/payments
- PATCH /api/payments/{id}/status

---

## Funcionalidades

- Listado de pagos
- Creación de pagos
- Consulta de detalle
- Cambio de estatus
- Confirmación mediante modal
- Historial de cambios de estatus

### Estatus soportados

- PENDING
- PROCESSING
- APPROVED
- REJECTED
- PAID

---

## Scripts Disponibles

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

---

## Estructura del Proyecto

```text
src/
├── actions/
├── components/
├── hooks/
├── pages/
├── routes/
├── services/
├── types/
├── utils/
└── App.tsx
```

---

## Solución de Problemas

### Error CORS

Permitir el origen:

http://localhost:5173

en la configuración de Spring Boot.

### Verificaciones

- Backend ejecutándose
- Puerto correcto
- Variable VITE_API_URL configurada
- SQL Server disponible
- RabbitMQ disponible

---

## Autor

Isaac Cisneros

Proyecto desarrollado como ejercicio de integración entre React, Spring Boot, SQL Server y RabbitMQ.
