# Etapa 1: compilar la aplicación React/Vite
FROM node:22-alpine AS build

WORKDIR /app

COPY package.json ./
RUN npm install --no-audit --no-fund

COPY . .

# Esta variable se inyecta al momento de construir la imagen.
# Debe apuntar al backend Payment Service.
ARG VITE_API_URL=http://localhost:8081/api
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# Etapa 2: servir archivos estáticos con Nginx
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
