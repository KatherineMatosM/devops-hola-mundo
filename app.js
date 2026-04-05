const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>DevOps Hola Mundo</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #0f172a, #1e293b, #334155);
          color: white;
          padding: 20px;
        }

        .container {
          width: 100%;
          max-width: 800px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          padding: 40px;
          text-align: center;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
        }

        .badge {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(59, 130, 246, 0.18);
          color: #93c5fd;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
          border: 1px solid rgba(147, 197, 253, 0.25);
        }

        h1 {
          font-size: 2.8rem;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .highlight {
          color: #60a5fa;
        }

        p {
          font-size: 1.1rem;
          color: #cbd5e1;
          margin-bottom: 30px;
          line-height: 1.7;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
          margin-top: 30px;
        }

        .card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          padding: 20px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
        }

        .card h3 {
          font-size: 1rem;
          margin-bottom: 8px;
          color: #93c5fd;
        }

        .card span {
          font-size: 0.95rem;
          color: #e2e8f0;
        }

        .footer {
          margin-top: 30px;
          font-size: 0.95rem;
          color: #94a3b8;
        }

        .rocket {
          font-size: 3rem;
          margin-bottom: 18px;
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 2rem;
          }

          .container {
            padding: 28px 20px;
          }

          p {
            font-size: 1rem;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="rocket"></div>
        <div class="badge">Proyecto DevOps Desplegado</div>
        <h1>Hola Mundo con <span class="highlight">Node.js + Docker + Render</span></h1>
        <p>
          Esta aplicación fue construida con <strong>Express</strong>, empaquetada con
          <strong>Docker</strong>, subida a <strong>Docker Hub</strong> y desplegada automáticamente
          en <strong>Render</strong> usando <strong>GitHub Actions (CI/CD)</strong>.
        </p>

        <div class="cards">
          <div class="card">
            <h3>Backend</h3>
            <span>Node.js + Express</span>
          </div>
          <div class="card">
            <h3>Contenedores</h3>
            <span>Docker</span>
          </div>
          <div class="card">
            <h3>Registro</h3>
            <span>Docker Hub</span>
          </div>
          <div class="card">
            <h3>Deploy</h3>
            <span>Render + GitHub Actions</span>
          </div>
        </div>

        <div class="footer">
          CI/CD funcionando correctamente 
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});