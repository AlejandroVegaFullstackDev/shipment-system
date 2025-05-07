# Shipment‑System – API de Gestión de Envíos

> Proyecto personal desarrollado con **NestJS** (Node.js) para demostrar prácticas sólidas en diseño de APIs y contenedorización con Docker.

## ✨ Funcionalidades clave

* Registrar envíos y calcular la **tarifa** automáticamente según la distancia.
* Consultar el histórico completo de envíos.
* Arquitectura modular de NestJS (controllers ↔ services ↔ models).
* Contenedor Docker listo para producción y entornos locales.
* Código 100 % libre de datos sensibles o propiedad de terceros.

## 🚀 Puesta en marcha en minutos

```bash
# 1. Clona el repositorio
$ git clone https://github.com/AlejandroVegaFullstackDev/shipment-system.git \
  && cd shipment-system

# 2. Construye la imagen
$ docker build -t shipment-system .

# 3. Ejecuta el contenedor (puerto 3000)
$ docker run -d -p 3000:3000 --name shipment-system shipment-system

# 4. Verifica la API
$ curl http://localhost:3000/shipments        # debería responder []
```

> **Nota**: Si prefieres *Docker Compose*, renombra `docker-compose.example.yml` a `docker-compose.yml` y ejecuta `docker compose up -d`.

## 🗄️ Stack Tecnológico

| Capa          | Tecnología          | Versión |
| ------------- | ------------------- | ------- |
| Framework     | NestJS (TypeScript) | 10.x    |
| Runtime       | Node.js             | 20.x    |
| Base de datos | — (in‑memory) \*    | —       |
| Contenedores  | Docker              | 26+     |
| Tests         | Jest & Supertest    | —       |

\* La capa de persistencia está desacoplada; puedes conectar PostgreSQL, MongoDB o cualquier driver implementando `ShipmentRepository`.

## 📂 Estructura del código

```
src/
 ├─ shipments/
 │   ├─ controllers/shipments.controller.ts   # Endpoints REST
 │   ├─ services/shipments.service.ts        # Lógica de negocio
 │   ├─ models/shipment.model.ts             # Entidad
 │   └─ dto/                                 # Validadores DTO
 ├─ common/                                  # Pipes, filtros, etc.
 └─ main.ts                                   # Bootstrap Nest
```

## 🔗 Endpoints

| Método | Endpoint   | Descripción              |
| ------ | ---------- | ------------------------ |
| POST   | /shipments | Registrar un nuevo envío |
| GET    | /shipments | Listar todos los envíos  |

### 1. Registrar envío – `POST /shipments`

```json
{
  "recipient": "Juan Pérez",
  "sender": "Acme Inc.",
  "content": "Libro",
  "distance": 20
}
```

Respuesta →

```json
{
  "id": "xg3980qpr",
  "recipient": "Juan Pérez",
  "sender": "Acme Inc.",
  "content": "Libro",
  "shipmentDate": "2024‑04‑18T16:40:31.160Z",
  "distance": 20,
  "fee": 15
}
```

### 2. Listar envíos – `GET /shipments`

```bash
curl http://localhost:3000/shipments
```

Respuesta → array de envíos con campos `id`, `recipient`, `sender`, `content`, `shipmentDate`, `distance`, `fee`.

## 🧮 Cálculo de la tarifa (`fee`)

La tarifa se determina con una escala simple por kilómetro:

| Rango km | Tarifa fija (USD)     |
| -------- | --------------------- |
| 0 – 20   | 15                    |
| 21 – 50  | 25                    |
| 51 – 100 | 40                    |
| > 100    | 40 + 0.5 × (km − 100) |

> Esta lógica vive en `shipments.service.ts` y se puede ajustar fácilmente.

## 🧪 Pruebas

```bash
# Ejecutar unit e integración
$ npm run test

# Cobertura
$ npm run test:cov
```

## ☁️ Despliegue

* **Railway / Fly.io / AWS ECS**: basta con apuntar al Dockerfile.
* Ejemplo de workflow GitHub Actions para contenedores incluido en `.github/workflows/ci.yml`.

## 📄 Licencia

Distribuido bajo **MIT**.

## 🤝 Créditos y contexto

Proyecto originalmente realizado como **prueba técnica** y refactorizado para compartir buenas prácticas. Cualquier parecido con requisitos específicos de terceros es coincidencia; el código aquí presente es de **propiedad exclusiva de Alejandro Vega**.
