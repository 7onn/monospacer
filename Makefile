default: help

help:
	@echo 
	@echo "available commands"
	@echo "  - zip (e.g: make zip)"
	@echo

PHONY: zip
zip:
	@mkdir versions/$$(git rev-parse HEAD) || true
	@zip versions/$$(git rev-parse HEAD)/monospacer.zip ./*
