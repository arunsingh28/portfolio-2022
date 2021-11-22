# Setup MERN stack project with **typescript**

# SERVER

## Package

    -npm i -D typescript ts-node
    -npm i -D @types/node`
    -npm i express -D @types/express
    -npm i cors dotenv

## Step 2

create a `tsconfig.json` file in the root folder

```
{
"compilerOptions": {
     "module": "commonjs",
     "target": "es6",
     "rootDir": "./",
     "esModuleInterop": true }
}

```

## CLIENT

## Package

    -npx create-react-app client --template typescript

    **install tailwind**

    -npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
    -npm install @craco/craco

## Step 2

create `craco.config.js` at the root of your project

```
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

## final step for tailwindcss

`-npx tailwindcss-cli@latest init`
