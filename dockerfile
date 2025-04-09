# Utilise une image Python légère
FROM python:3.13-alpine

# Installe Node.js (nécessaire pour Tailwind)
RUN apk add --no-cache \
    nodejs \
    npm

# Crée le dossier de travail
WORKDIR /app

# Copie les dépendances Python
COPY requirements.txt .

# Installe les dépendances Python
RUN pip install --no-cache-dir -r requirements.txt

# Copie le fichier package.json et package-lock.json (assurez-vous qu'ils existent dans votre projet)
COPY package.json package-lock.json ./

# Installe les dépendances Node.js (y compris Tailwind)
RUN npm install

# Copie le reste du code de l'app
COPY . .

# Génère le fichier CSS avec Tailwind
RUN npm run build

# Expose le port attendu par App Platform
EXPOSE 8080

# Lance l'app avec Gunicorn en production
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "app:app"]
