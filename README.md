# DevOps Hola Mundo

## Descripción
Este proyecto consiste en una aplicación web sencilla desarrollada con Node.js y Express.  
La aplicación fue contenedorizada con Docker, publicada en Docker Hub y desplegada en Render.  
Además, se configuró un flujo de integración y despliegue continuo (CI/CD) con GitHub Actions.

## Tecnologías utilizadas
- Node.js
- Express
- Docker
- Docker Hub
- GitHub Actions
- Render

## Funcionamiento del proyecto
1. Se creó una aplicación básica con Node.js y Express.
2. Se definió un `Dockerfile` para construir la imagen del proyecto.
3. La imagen se subió a Docker Hub.
4. Se creó un servicio web en Render usando la imagen de Docker Hub.
5. Se configuró GitHub Actions para automatizar:
   - la construcción de la imagen Docker
   - el envío de la imagen a Docker Hub
   - el despliegue automático en Render

## Flujo CI/CD
Cada vez que se hace `git push` a la rama `main`:
1. GitHub Actions ejecuta el workflow.
2. Se construye una nueva imagen Docker.
3. La imagen se publica en Docker Hub.
4. Se llama a la API de Render para generar un nuevo despliegue.

## Archivos importantes
- `app.js`: servidor principal con Express
- `package.json`: dependencias y script de inicio
- `Dockerfile`: instrucciones para construir la imagen
- `.github/workflows/deploy.yml`: automatización con GitHub Actions

## Resultado
El proyecto queda disponible en línea mediante Render y se actualiza automáticamente cuando se hacen cambios en GitHub.

## Conclusión
Este proyecto demuestra el ciclo básico de DevOps:
- desarrollo de una aplicación
- contenedorización con Docker
- publicación en un registro
- despliegue en la nube
- automatización del proceso con CI/CD
