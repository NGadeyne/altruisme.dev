# Partie Node.js (pour TailwindCSS)
FROM node:16-alpine as node-build

WORKDIR /app

# Copier package.json et package-lock.json dans le conteneur
COPY package.json package-lock.json ./

# Installer les dépendances Node.js, y compris TailwindCSS
RUN npm install

# Partie Python (pour Flask)
FROM python:3.11-slim as build

WORKDIR /app

# Installer les dépendances Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copier tout le projet (les fichiers Python et Node.js)
COPY . .

# Copier le dossier Node.js installé depuis l'image précédente
COPY --from=node-build /app /app

# Compiler TailwindCSS avec npm
RUN npm run build

# Partie finale : image de production
FROM python:3.11-slim

WORKDIR /app

# Copier tout depuis l'étape de build (Python et Node.js)
COPY --from=build /app /app

# Exposer le port
EXPOSE 8080

# Lancer l'application avec Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "app:app"]
