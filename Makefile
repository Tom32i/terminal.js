install:
	yarn install

## Build static files
build:
	yarn build

## Publish
deploy@prod:
	rm -rf dist
	yarn build
	chmod -R 755 dist
	rsync -arzv --delete dist/* tom32i@tom32i.fr:/home/tom32i/lab/console

## Publish
deploy@demo:
	rm -rf dist
	yarn build
	chmod -R 755 dist
	rsync -arzv --delete dist/* tom32i@deployer.dev:/home/tom32i/lab/console
