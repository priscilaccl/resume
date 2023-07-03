# Angular Cli
- `ng version`

## (optional) Update Npm
- `npm -v`
- `npm install -g npm@latest`

## (optional) Update Node
- `node -v`
- `https://nodejs.org/en`

## (optional) Update latest Angular CLI
- `npm uninstall -g @angular/cli`
- `npm cache clean --force`
- `npm cache verify`
- `npm install -g @angular/cli`
- `ng version`

## Create new project
- `cd C:/Users/Lee/Documents/Github`
- `ng new resume`
- `cd .\resume\`
- `ng serve` 

# Setup gitpages
Go to `angular.json` and change to `docs` on `outputPath`:
```
...
    "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
                "outputPath": "docs",
...
 ```

Go to `package.json` and add `build-prod` line:
```
...
"start": "ng serve",
"build": "ng build",
"build-prod": "ng build --output-path docs --base-href resume",
...
```

Run the command: 
- `npm run build-prod`

## Access repository on `github`
    - Go to Settings > Pages > Build and deployment
        - Change `branch` to `main`
        - Change `folder` to `docs`
        - Wait a moment and click on the live site which will appear on top

