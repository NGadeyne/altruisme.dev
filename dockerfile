# Partie Node.js (pour TailwindCSS)
FROM node:16-alpine as node-build

WORKDIR /app

# Copier uniquement les fichiers nécessaires pour installer les dépendances
COPY package.json package-lock.json ./

# Installer les dépendances Node.js, y compris TailwindCSS
RUN npm install

# Partie Python (pour Flask)
FROM python:3.11-slim as build

WORKDIR /app

# Installer les dépendances Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copier le code source et les fichiers nécessaires
COPY . .

# Copier les dépendances Node.js installées depuis l'étape précédente
COPY --from=node-build /app /app

# Vérifier que TailwindCSS est installé
RUN npm list tailwindcss

# Compiler TailwindCSS avec npm
RUN npm run build

# Partie finale : image de production
FROM python:3.11-slim

WORKDIR /app

# Copier l'ensemble du code et des dépendances
COPY --from=build /app /app

# Installer Node.js et npm dans l'image finale (si nécessaire)
RUN apt-get update && apt-get install -y nodejs npm

# Exposer le port
EXPOSE 8080

# Lancer l'application avec Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "app:app"]
