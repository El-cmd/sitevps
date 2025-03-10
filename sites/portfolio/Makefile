# Variables
DOMAIN = vloth.tech
DOCKER_COMPOSE = docker-compose

# Couleurs
GREEN = \033[0;32m
RED = \033[0;31m
YELLOW = \033[0;33m
NC = \033[0m

# Commandes principales
.PHONY: all
all: network build up

# Création du réseau
.PHONY: network
network:
	@echo "$(GREEN)Création du réseau Docker...$(NC)"
	@docker network create proxy-network 2>/dev/null || true

# Construction des images
.PHONY: build
build:
	@echo "$(GREEN)Construction des images Docker...$(NC)"
	@cd nginx-proxy-manager && $(DOCKER_COMPOSE) build
	@cd sites/portfolio && $(DOCKER_COMPOSE) build

# Démarrage des conteneurs
.PHONY: up
up:
	@echo "$(GREEN)Démarrage des conteneurs...$(NC)"
	@cd nginx-proxy-manager && $(DOCKER_COMPOSE) up -d
	@cd sites/portfolio && $(DOCKER_COMPOSE) up -d

# Arrêt des conteneurs
.PHONY: down
down:
	@echo "$(RED)Arrêt des conteneurs...$(NC)"
	@cd sites/portfolio && $(DOCKER_COMPOSE) down
	@cd nginx-proxy-manager && $(DOCKER_COMPOSE) down

# Autres commandes comme avant...# Variables
DOMAIN = vloth.tech
EMAIL = votre-email@example.com
DOCKER_COMPOSE = docker-compose

# Couleurs pour les messages
GREEN = \033[0;32m
RED = \033[0;31m
YELLOW = \033[0;33m
NC = \033[0m

# Commandes principales
.PHONY: all
all: build up

# Construction des images
.PHONY: build
build:
	@echo "$(GREEN)Construction des images Docker...$(NC)"
	@$(DOCKER_COMPOSE) build

# Démarrage des conteneurs
.PHONY: up
up:
	@echo "$(GREEN)Démarrage des conteneurs...$(NC)"
	@$(DOCKER_COMPOSE) up -d

# Arrêt des conteneurs
.PHONY: down
down:
	@echo "$(RED)Arrêt des conteneurs...$(NC)"
	@$(DOCKER_COMPOSE) down

# Redémarrage des conteneurs
.PHONY: restart
restart: down up

# Affichage des logs
.PHONY: logs
logs:
	@echo "$(YELLOW)Affichage des logs...$(NC)"
	@$(DOCKER_COMPOSE) logs -f

# Configuration HTTPS
.PHONY: ssl-init
ssl-init:
	@echo "$(YELLOW)Configuration initiale SSL...$(NC)"
	@mkdir -p certbot/conf certbot/www
	@$(DOCKER_COMPOSE) down
	@rm -rf ./certbot/conf/*
	@$(DOCKER_COMPOSE) run --rm certbot certonly \
		--webroot \
		--webroot-path=/var/www/certbot \
		--email $(EMAIL) \
		--agree-tos \
		--no-eff-email \
		-d $(DOMAIN) \
		-d www.$(DOMAIN)
	@$(DOCKER_COMPOSE) up -d

# Renouvellement manuel des certificats
.PHONY: ssl-renew
ssl-renew:
	@echo "$(YELLOW)Renouvellement des certificats SSL...$(NC)"
	@$(DOCKER_COMPOSE) run --rm certbot renew

# Nettoyage
.PHONY: clean
clean: down
	@echo "$(RED)Nettoyage des conteneurs et images...$(NC)"
	@docker system prune -af

# Nettoyage complet (attention : supprime aussi les volumes)
.PHONY: fclean
fclean: clean
	@echo "$(RED)Nettoyage complet (volumes inclus)...$(NC)"
	@docker volume prune -f
	@rm -rf certbot/

# Reconstruction complète
.PHONY: re
re: fclean all

# Développement local (ports différents)
.PHONY: dev
dev:
	@echo "$(GREEN)Démarrage en mode développement...$(NC)"
	@$(DOCKER_COMPOSE) -f docker-compose.dev.yml up --build

# Aide
.PHONY: help
help:
	@echo "$(GREEN)Commandes disponibles :$(NC)"
	@echo "  make          : Construit et démarre les conteneurs"
	@echo "  make build    : Construit les images Docker"
	@echo "  make up       : Démarre les conteneurs"
	@echo "  make down     : Arrête les conteneurs"
	@echo "  make restart  : Redémarre les conteneurs"
	@echo "  make logs     : Affiche les logs"
	@echo "  make ssl-init : Configure les certificats SSL initiaux"
	@echo "  make ssl-renew: Renouvelle les certificats SSL"
	@echo "  make clean    : Nettoie les conteneurs et images"
	@echo "  make fclean   : Nettoie tout (volumes inclus)"
	@echo "  make re       : Reconstruction complète"
	@echo "  make dev      : Démarre en mode développement"