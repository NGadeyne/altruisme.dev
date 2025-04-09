# Etape 1: Construire le projet Node (pour TailwindCSS)
FROM node:16-alpine as node-build

WORKDIR /app

# Copier package.json et package-lock.json
COPY package.json package-lock.json ./

# Installer les dépendances npm
RUN npm install

# Etape 2: Construire le projet Python
FROM python:3.11-slim as build

WORKDIR /app

# Installer les dépendances Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copier le code source du projet Flask
COPY . .

# Copier les fichiers Node.js nécessaires à partir de l'étape précédente
COPY --from=node-build /app /app

# Vérifier l'installation de tailwindcss
RUN npm list tailwindcss

# Compiler TailwindCSS
RUN npm run build

# Etape 3: Image finale pour la production
FROM python:3.11-slim

WORKDIR /app

# Copier tous les fichiers de l'étape build
COPY --from=build /app /app

# Exposer le port
EXPOSE 8080

# Lancer l'application Flask via Gun
