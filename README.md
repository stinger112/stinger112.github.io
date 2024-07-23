# Build and run locally

Prepare JS and CSS
```bash
npm install @xterm/xterm

npm install webpack webpack-cli --save-dev

npx webpack --config webpack.config.js

```

Install Ruby Gems and run local server
```bash
docker run --rm --volume="$PWD:/srv/jekyll" -it -p 4000:4000 jekyll/jekyll:4.2.2 jekyll serve --watch
```
