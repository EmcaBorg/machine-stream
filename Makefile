DOCKER_COMPOSE?="docker-compose.yml"

cmd-exists-%:
	@hash $(*) > /dev/null 2>&1 || \
		(echo "ERROR: '$(*)' must be installed and available on your PATH."; exit 1)

.PHONY: help
help:           			## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

.PHONY: serve
serve: cmd-exists-docker-compose	## Start docker container and serve SPA
	@docker-compose -f "${DOCKER_COMPOSE}" up --build --detach

.PHONY: build
build: cmd-exists-docker-compose	## (Re)build the image using docker compose
	@docker-compose -f "${DOCKER_COMPOSE}" build

.PHONY: up
up: cmd-exists-docker-compose		## Start docker container
	@docker-compose -f "${DOCKER_COMPOSE}"  up --detach

.PHONY: down
down: cmd-exists-docker-compose		## Stop docker container
	@docker-compose -f "${DOCKER_COMPOSE}" down





