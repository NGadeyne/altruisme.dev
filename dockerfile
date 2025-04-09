# Partie Node.js (pour TailwindCSS)
FROM node:16-alpine as node-build

WORKDIR /app

# Copier package.json et package-lock.json dans le conteneur
COPY package.json package-lock.json ./

# Installer les dépendances Node.js, y compris TailwindCSS
RUN npm install

# Partie Python
FROM python:3.11-slim as build

WORKDIR /app

# Installer les dépendances Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copier le code Flask
COPY . .

# Compiler TailwindCSS avec npm
RUN npm run build

# Partie finale : image de production
FROM python:3.11-slim

WORKDIR /app

# Copier les fichiers de Python et de Node.js (styles.css compilé)
COPY --from=node-build /app /app

# Exposer le port
EXPOSE 8080

# Démarrer avec Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "app:app"]
