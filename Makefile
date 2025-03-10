# Variables
DOMAIN = vloth.tech
DOCKER = docker
DOCKER_COMPOSE = docker-compose
ROOT_DIR = $(shell pwd)

# Couleurs
GREEN = \033[0;32m
RED = \033[0;31m
YELLOW = \033[0;33m
NC = \033[0m

# Commandes principales
.PHONY: all
all: network build up

# Création du réseau Docker
.PHONY: network
network:
	@echo "$(GREEN)Création du réseau Docker...$(NC)"
	@$(DOCKER) network create proxy-network 2>/dev/null || true

# Construction des images
.PHONY: build
build:
	@echo "$(GREEN)Construction des images Docker...$(NC)"
	@cd $(ROOT_DIR)/nginx-proxy-manager && $(DOCKER_COMPOSE) build
	@cd $(ROOT_DIR)/sites/portfolio && $(DOCKER_COMPOSE) build

# Démarrage des conteneurs
.PHONY: up
up:
	@echo "$(GREEN)Démarrage de Nginx Proxy Manager...$(NC)"
	@cd $(ROOT_DIR)/nginx-proxy-manager && $(DOCKER_COMPOSE) up -d
	@echo "$(GREEN)Démarrage du portfolio...$(NC)"
	@cd $(ROOT_DIR)/sites/portfolio && $(DOCKER_COMPOSE) up -d
	@echo "$(GREEN)Services démarrés ! Accédez à :$(NC)"
	@echo "  - Portfolio: https://$(DOMAIN)"
	@echo "  - Admin Nginx: http://localhost:81"

# Arrêt des conteneurs
.PHONY: down
down:
	@echo "$(RED)Arrêt des services...$(NC)"
	@cd $(ROOT_DIR)/sites/portfolio && $(DOCKER_COMPOSE) down
	@cd $(ROOT_DIR)/nginx-proxy-manager && $(DOCKER_COMPOSE) down

# Affichage des logs
.PHONY: logs-proxy
logs-proxy:
	@echo "$(YELLOW)Logs de Nginx Proxy Manager...$(NC)"
	@cd $(ROOT_DIR)/nginx-proxy-manager && $(DOCKER_COMPOSE) logs -f

.PHONY: logs-portfolio
logs-portfolio:
	@echo "$(YELLOW)Logs du portfolio...$(NC)"
	@cd $(ROOT_DIR)/sites/portfolio && $(DOCKER_COMPOSE) logs -f

# Nettoyage
.PHONY: clean
clean: down
	@echo "$(RED)Nettoyage des conteneurs et images...$(NC)"
	@$(DOCKER) system prune -af

# Nettoyage complet
.PHONY: fclean
fclean: clean
	@echo "$(RED)Nettoyage complet...$(NC)"
	@$(DOCKER) network rm proxy-network 2>/dev/null || true
	@rm -rf $(ROOT_DIR)/nginx-proxy-manager/data
	@rm -rf $(ROOT_DIR)/nginx-proxy-manager/letsencrypt

# Reconstruction complète
.PHONY: re
re: fclean all

# Aide
.PHONY: help
help:
	@echo "$(GREEN)Commandes disponibles :$(NC)"
	@echo "  make         : Démarre tout (réseau, proxy, portfolio)"
	@echo "  make down    : Arrête tous les services"
	@echo "  make logs-proxy    : Affiche les logs du proxy"
	@echo "  make logs-portfolio: Affiche les logs du portfolio"
	@echo "  make clean   : Nettoie les conteneurs"
	@echo "  make fclean  : Nettoie tout (conteneurs, réseau, données)"
	@echo "  make re      : Reconstruction complète"
	@echo "  make help    : Affiche cette aide"