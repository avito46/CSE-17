# NoteStack — Dockerized Web Application

A containerized full-stack web application built with Flask, MySQL, and Nginx, deployed using Docker Compose. Demonstrates containerization, reverse proxy configuration, environment standardization, and static resource optimization.

**Tech Stack:** Python · Flask · MySQL · Nginx · Docker · Docker Compose · Gunicorn · HTML5 · CSS3 · JavaScript (ES6) · Git

---

## Architecture

```
Browser
   │
   ▼
[Nginx :80]  ──── /static/* ──── served directly (cached, gzip)
   │
   │ proxy_pass
   ▼
[Gunicorn + Flask :5000]
   │
   │ mysql-connector
   ▼
[MySQL 8.0 :3306]
```

Three isolated containers communicate over a private Docker bridge network (`app_network`). Nginx handles all inbound traffic — static files are served directly without touching Flask, reducing load and improving response time.

---

## Features

- Full CRUD REST API (`GET /api/notes`, `POST /api/notes`, `DELETE /api/notes/<id>`)
- Nginx reverse proxy with optimized static resource handling (30-day cache, gzip compression)
- MySQL with persistent named volume — data survives container restarts
- Gunicorn WSGI server (2 workers) for production-grade Flask serving
- Non-root container user for security
- Health check on DB container — app only starts after DB is ready
- DOM input validation with character counters (client-side)
- Fully responsive UI (mobile + desktop)

---

## Project Structure

```
dockerized-webapp/
├── app/
│   ├── Dockerfile
│   ├── requirements.txt
│   ├── app.py                  # Flask app + REST API
│   ├── templates/
│   │   └── index.html
│   └── static/
│       ├── css/style.css
│       └── js/main.js
├── nginx/
│   └── nginx.conf              # Reverse proxy + static optimization
├── db/
│   └── init.sql                # DB + table initialization
├── docker-compose.yml
├── .env.example
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites
- Docker Desktop (or Docker Engine + Docker Compose on Linux)
- Git

### 1. Clone the repo
```bash
git clone https://github.com/avito46/dockerized-webapp.git
cd dockerized-webapp
```

### 2. Set up environment variables
```bash
cp .env.example .env
# Edit .env and set a strong DB_PASSWORD
```

### 3. Build and run
```bash
docker-compose up --build
```

App is available at **http://localhost**

### 4. Stop
```bash
docker-compose down          # Stop containers
docker-compose down -v       # Stop + delete DB volume (fresh start)
```

---

## Git Branching Strategy

```
main          — stable, production-ready code only
  └── dev     — integration branch
        ├── feature/flask-api
        ├── feature/nginx-config
        └── feature/frontend-ui
```

All features developed on separate branches, merged into `dev` via pull request, then merged to `main` after testing. Commit messages follow Conventional Commits format: `feat:`, `fix:`, `chore:`, `docs:`.

---

## Key Design Decisions

| Decision | Reason |
|---|---|
| Nginx in front of Flask | Static files served without hitting Python — faster, lower CPU |
| Gunicorn over Flask dev server | Multi-worker, production-grade WSGI |
| DB healthcheck in compose | Prevents app crashing on startup before MySQL is ready |
| Named Docker volume for DB | Data persists across `docker-compose down` restarts |
| `.env` for secrets | Passwords never hardcoded or committed to Git |
| Non-root user in Dockerfile | Limits blast radius if container is compromised |

---

## Resume Alignment

> "Engineered and deployed a containerized web application using Docker to standardize build and runtime environments."
→ `Dockerfile` + `docker-compose.yml` define identical environments across any machine.

> "Automated configuration processes, reducing environment setup time by 40%."
→ Single `docker-compose up --build` replaces manual Python env setup, MySQL install, Nginx config, and service wiring.

> "Applied Git branching strategies to maintain structured code integration and version control."
→ Feature branch → dev → main workflow with `.gitignore` and commit conventions.

> "Optimized static resource handling to improve load efficiency and runtime performance."
→ Nginx serves `/static/*` directly with 30-day cache headers and gzip — zero Flask involvement for static assets.

---

## Author

**Aviral Dwivedi**  
B.Tech CSE, ABES Engineering College (2025–2029)  
[github.com/avito46](https://github.com/avito46) · [linkedin.com/in/aviral-dwivedi-558195365](https://linkedin.com/in/aviral-dwivedi-558195365)
