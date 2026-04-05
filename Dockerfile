# Imagen base oficial de Node.js
FROM node:20-alpine

# Carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Comando para ejecutar la app
CMD ["node", "app.js"]