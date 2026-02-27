# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
# Criamos a pasta para evitar o erro de "No such file or directory"
RUN mkdir -p /usr/share/nginx/html/oratoria-de-elite
COPY --from=build /app/dist /usr/share/nginx/html/oratoria-de-elite
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
