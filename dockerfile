# Partie Python
FROM python:3.11-slim as build

WORKDIR /app

# Installer les dépendances Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Partie Node.js (pour TailwindCSS)
FROM node:16-alpine as node-build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# Copier tout le reste
COPY . .

# Builder TailwindCSS
RUN npm run build

# Partie finale : l'image finale pour la prod
FROM python:3.11-slim

WORKDIR /app

# Copier les fichiers Python + NodeJS (styles.css compilé)
COPY --from=build /app /app

# Expose le port pour Flask
EXPOSE 8080

# Lance Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "app:app"]
