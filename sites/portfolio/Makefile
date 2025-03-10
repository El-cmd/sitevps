# Variables
DOCKER_COMPOSE = docker-compose

# Couleurs
GREEN = \033[0;32m
YELLOW = \033[0;33m
RED = \033[0;31m
NC = \033[0m

# Commandes de développement
.PHONY: dev
dev:
	@echo "$(GREEN)Démarrage du portfolio en mode développement...$(NC)"
	@$(DOCKER_COMPOSE) up --build

.PHONY: dev-d
dev-d:
	@echo "$(GREEN)Démarrage du portfolio en mode développement (détaché)...$(NC)"
	@$(DOCKER_COMPOSE) up -d --build

.PHONY: down
down:
	@echo "$(RED)Arrêt du portfolio...$(NC)"
	@$(DOCKER_COMPOSE) down

.PHONY: logs
logs:
	@echo "$(YELLOW)Affichage des logs...$(NC)"
	@$(DOCKER_COMPOSE) logs -f

.PHONY: clean
clean: down
	@echo "$(RED)Nettoyage des conteneurs et images...$(NC)"
	@docker system prune -f

.PHONY: help
help:
	@echo "$(GREEN)Commandes de développement :$(NC)"
	@echo "  make dev     : Démarre le portfolio (mode développement)"
	@echo "  make dev-d   : Démarre le portfolio en arrière-plan"
	@echo "  make down    : Arrête le portfolio"
	@echo "  make logs    : Affiche les logs"
	@echo "  make clean   : Nettoie les conteneurs"