# Setup MERN stack project with **typescript**

# SERVER

## Package

    - npm i -D typescript ts-node
    - npm i -D @types/node`
    - npm i express -D @types/express
    - npm i cors dotenv

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

    - npx create-react-app client --template typescript
