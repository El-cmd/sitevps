# Portfolio - Valentin Loth

Un portfolio moderne avec une esthétique "hacker" développé avec React et Material-UI. Le site présente mes compétences, projets et services en tant que développeur junior.

## 🚀 Fonctionnalités

- Design moderne avec thème "hacker"
- Animations fluides et effets visuels
- Complètement responsive
- Navigation intuitive
- Sections :
  - 🏠 Accueil avec présentation
  - 💼 Projets avec liens GitHub
  - 🛠 Services proposés
  - 📊 Compétences avec barres de progression
  - 📬 Page de contact

## 🛠 Technologies Utilisées

- **Frontend** :
  - React.js
  - Material-UI
  - Framer Motion (animations)
  - React Router
  - CSS personnalisé

## 🏗 Architecture du Projet

```
sitevps/
├── src/
│   ├── components/         # Composants React
│   ├── styles/            # Fichiers CSS
│   ├── assets/           # Images et ressources
│   └── App.js            # Composant principal
├── public/               # Fichiers statiques
├── Dockerfile           # Configuration Docker
├── docker-compose.yml   # Configuration Docker Compose
├── nginx.conf           # Configuration Nginx container
└── nginx-proxy.conf     # Configuration Nginx proxy
```

## 🚀 Installation et Déploiement

### Développement Local

```bash
# Cloner le repository
git clone https://github.com/votre-username/sitevps.git
cd sitevps

# Installer les dépendances
npm install

# Lancer en mode développement
npm start
```

### Déploiement avec Docker

1. **Prérequis**
   ```bash
   # Installation de Docker et Docker Compose
   curl -fsSL https://get.docker.com -o get-docker.sh
   sudo sh get-docker.sh
   sudo curl -L "https://github.com/docker/compose/releases/download/v2.23.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   sudo chmod +x /usr/local/bin/docker-compose
   ```

2. **Construction et Lancement**
   ```bash
   # Construire et lancer les conteneurs
   docker-compose up -d --build
   ```

3. **Accès**
   - Le site sera accessible sur `http://votre-ip-vps`

## 🔧 Configuration

### Structure Docker

- **Portfolio Container** : Contient l'application React
- **Nginx Proxy** : Reverse proxy pour gérer les requêtes

### Ports Exposés

- 80 : HTTP
- 443 : HTTPS (à configurer)

## 🛡 Sécurité

- Configuration Nginx sécurisée
- Headers HTTP sécurisés
- Cache optimisé pour les assets statiques

## 🔄 Mise à Jour

```bash
# Mettre à jour les conteneurs
git pull
docker-compose up -d --build
```

## 📝 Maintenance

### Logs

```bash
# Voir les logs des conteneurs
docker-compose logs -f
```

### Backup

```bash
# Sauvegarder les configurations
tar -czf backup.tar.gz docker-compose.yml nginx*.conf Dockerfile
```

## 🤝 Contact

- Email : [votre-email]
- GitHub : [votre-profil-github]
- LinkedIn : [votre-profil-linkedin]

## 📜 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
