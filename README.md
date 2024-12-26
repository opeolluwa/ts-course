# Typescript Course

- [Description](#description)
- [Getting Started](#getting-started)

- [Documentation](#documentation)

## Description

Migrating to Typescript .

## Documentation

### Creating a Node application with JavaScript

1. Create a new application

```sh
npm init -y 
touch app.js
```

2. Update the script section

```json
"scripts": {
  "dev": "node --watch app.js"
},
```

### Adding Typescript Support for the application

1. Install typescript as a dev dependency, this will create `tsconfig.json`

```sh
npm i -D typescript
tsc --init
```

2. Rename `app.js` to `app.ts`

3. Make a `src` directory and move `app.ts` to it

4. Update the `tsconfig.json

```json
"rootDir": "./src",    
 "outDir": "./dist",
```

5. Rust `tsc` to compile your application to js from ts
