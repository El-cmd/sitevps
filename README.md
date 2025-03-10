# Portfolio Multi-Sites avec Nginx Proxy Manager

Ce projet est une configuration Docker pour héberger plusieurs sites web sur un VPS, avec le portfolio comme premier site. Il utilise Nginx Proxy Manager pour gérer facilement les domaines et les certificats SSL.

## 📁 Structure du Projet

```
/
├── nginx-proxy-manager/     # Gestion des domaines et SSL
│   ├── docker-compose.yml
│   ├── data/               # Configuration NPM (créé automatiquement)
│   └── letsencrypt/       # Certificats SSL (créé automatiquement)
│
├── sites/
│   └── portfolio/         # Site portfolio
│       ├── srcs/         # Code source React
│       ├── Dockerfile
│       ├── docker-compose.yml
│       └── Makefile      # Pour le développement local
│
└── Makefile              # Gestion globale du projet
```

## 🚀 Fonctionnalités

- **Multi-Sites** : Capable d'héberger plusieurs sites sur un même VPS
- **SSL Automatique** : Gestion automatique des certificats SSL via Let's Encrypt
- **Interface d'Administration** : Interface web pour gérer les domaines et SSL
- **Développement Local** : Configuration séparée pour le développement

## 🛠 Prérequis

- Docker et Docker Compose
- Un VPS avec les ports nécessaires configurés
- Un nom de domaine configuré

## 📥 Installation

1. **Cloner le projet**
   ```bash
   git clone <votre-repo>
   cd <votre-repo>
   ```

2. **Configuration initiale**
   ```bash
   # Configurer les accès nécessaires
   # Démarrer les services
   make
   ```

3. **Configuration Nginx Proxy Manager**
   - Accéder à l'interface d'administration
   - Configurer les identifiants
   - Ajouter votre domaine et configurer SSL

## 🔧 Commandes Make

### Commandes Globales (racine)
- `make` : Démarre tout le système
- `make down` : Arrête tous les services
- `make logs-proxy` : Logs du proxy
- `make logs-portfolio` : Logs du portfolio
- `make clean` : Nettoie les conteneurs
- `make fclean` : Nettoyage complet

### Commandes de Développement (portfolio)
- `cd sites/portfolio && make dev` : Démarre le portfolio en mode dev
- `cd sites/portfolio && make dev-d` : Démarre en arrière-plan
- `cd sites/portfolio && make logs` : Affiche les logs

## 🌐 Ajouter un Nouveau Site

1. Créer un nouveau dossier dans `sites/`
2. Ajouter les fichiers nécessaires (Dockerfile, docker-compose.yml)
3. Connecter au réseau `proxy-network`
4. Configurer dans Nginx Proxy Manager

## 🔒 Sécurité

- Configuration des ports minimale
- Certificats SSL automatiques
- Interface d'administration sécurisée
- Isolation des conteneurs via Docker

## 🛠 Maintenance

- Les certificats SSL se renouvellent automatiquement
- Les logs sont accessibles via les commandes make
- Sauvegardes recommandées des configurations

## 📝 Notes

- Configuration de sécurité requise avant déploiement
- Chaque site peut avoir sa propre configuration de développement
- Les modifications de la configuration proxy sont persistantes
