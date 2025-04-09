# Etape 1: Utiliser une image Python et installer Node.js
FROM python:3.11-slim as build

# Installer Node.js
RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean

WORKDIR /app

# Copier package.json et package-lock.json
COPY package.json package-lock.json ./

# Installer les dépendances npm
RUN npm install

# Copier requirements.txt et installer les dépendances Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copier le code source du projet Flask
COPY . .

# Vérifier l'installation de tailwindcss
RUN npx tailwindcss --version

# Compiler TailwindCSS
RUN npm run build

# Etape 2: Image finale pour la production
FROM python:3.11-slim

WORKDIR /app

# Copier tous les fichiers de l'étape build
COPY --from=build /app /app

# Exposer le port
EXPOSE 8080

# Lancer l'application Flask via Gunicorn
CMD ["gunicorn", "app:app", "--bind", "0.0.0.0:8080"]