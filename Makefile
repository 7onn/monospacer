default: help

help:
	@echo 
	@echo "available commands"
	@echo "  - zip (e.g: make zip)"
	@echo

PHONY: zip
zip:
	@zip monospacer.zip ./*
