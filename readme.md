## How to install it

The project use TailwindCLI so just run this command on development:

```
npx tailwindcss -i ./src/tailwind.css -o ./dist/tailwind.css --watch
```

On production you can compress and minify the css files:

```
NODE_ENV=production npx tailwindcss -i ./src/tailwind.css -o ./dist/tailwind.css --minify
```