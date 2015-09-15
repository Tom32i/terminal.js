## Build static files
build:
	gulp

## Publish
publish:
	rm -rf dist
	gulp
	chmod -R 755 dist
	rsync -arzv --delete dist/* dédié:/home/tom32i/sites/lab/console
