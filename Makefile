install:
	npm install

## Build static files
build:
	gulp

## Publish
deploy@prod:
	rm -rf dist
	gulp
	chmod -R 755 dist
	rsync -arzv --delete dist/* dédié:/home/tom32i/lab/console

## Publish
deploy@demo:
	rm -rf dist
	gulp
	chmod -R 755 dist
	rsync -arzv --delete dist/* tom32i@deployer.dev:/home/tom32i/lab/console
