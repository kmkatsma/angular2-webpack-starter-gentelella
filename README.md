### Angular2 Gentelella 
This repo is a fork off of angular2 <a href="https://github.com/angularclass/angular2-webpack-starter.git">Angular Webpack Starter</a> modified to utilize the <a href="https://github.com/puikinsh/gentelella">Gentelella</a> free bootstrap theme

It does not currently have support for all the pages of existing gentelella, and some of the javascript tools (like pie charts) needed for dashboard controls have not yet been incorporated in project. 

### JQuery and Bootstrap 3
**JQuery and Bootstrap have been added to this project to support requirements of Gentelella**
JQuery is imported globally, and the $ references are just typed in IDE by the globally imported typings jquery.d.ts file.  I do not do an import of JQuery on any pages as this has proven quite problematic for me, and a number of people in regards to both typings issues and JS module issues.

I have made some small efforts to try to do things in more angular friendly approach, but for the most part JQuery is just invoked after Angular2 components are rendered using the ngAfterViewInit. It's also used directly in the click events that are bound through Angular to individual screen elements. This is opposed to the dynamic adding of click handlers to the DOM elements in the base Gentelella.

### Other dependencies (jquery-flot and font-awesome) 
**jquery-flot**
The hardest challenge to the conversion was incorporation of jquery-flot and font-awesome.  Jquery-flot doesn't follow module patterns currently in use for webpack/typescript, so had to do some individual file imports. I also had to bring in the flot-spline depency as a file import from a "vendors" folder.  I did not want to use bower, which is the only library source for this file currently - at least that which I could find.

**font-awesome**
I used font-awesome-webpack to bring in the font-awesome components.  There is an ugly hack in the import for this in the app modulke, mainly because of an issue with webpack2 <a href="https://github.com/gowravshekar/font-awesome-webpack/issues/24">outlined here </a> - there is a fork with the fix included, but I didn't use.  I include ng2-fontawesome, and use in one place, but most is just left as styles in HTML.   

### Quick start
**Make sure you have Node version >= 5.0 (I actually have been using 4.5.0 version with success) and NPM >= 3**
**Make sure you have typings installed globally**

```bash
# clone repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/kmkatsma/angular2-webpack-starter-gentelella.git

# change directory to our repo
cd angular2-webpack-starter-gentelella

# install the repo with npm
npm install

# install typings with typings
typings install

# start the server
npm start

# use Hot Module Replacement
npm run server:dev:hmr

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm`and `typings` 
* Ensure you're running the latest versions Node `v4.x.x`+ (or `v5.x.x`) and NPM `3.x.x`+

> If you have `nvm` installed, which is highly recommended (`brew install nvm`) you can do a `nvm install --lts && nvm use` in `$` to run with the latest Node LTS. You can also have this `zsh` done for you [automatically](https://github.com/creationix/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file) 

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)
* `typescript` (`npm install --global typescript`)
* `typings` (`npm install --global typings`)

## Installing
* `fork` this repo
* `clone` your fork
* `npm install webpack-dev-server rimraf webpack -g` to install required global dependencies
* `npm install` to install all dependencies
* `npm run server` to start the dev server in another tab

## Running the app
After you have installed all dependencies you can now run the app. Run `npm run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://0.0.0.0:3000` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:3000/`).

### server
```bash
# development
npm run server
# production
npm run build:prod
npm run server:prod
```

## Other commands

### build files
```bash
# development
npm run build:dev
# production
npm run build:prod
```

### hot module replacement
```bash
npm run server:dev:hmr
```

### watch and build files
```bash
npm run watch
```

### run tests
```bash
npm run test
```

### watch and run our tests
```bash
npm run watch:test
```

### run end-to-end tests
```bash
# make sure you have your server running in another terminal
npm run e2e
```

### run webdriver (for end-to-end)
```bash
npm run webdriver:update
npm run webdriver:start
```

### run Protractor's elementExplorer (for end-to-end)
```bash
npm run webdriver:start
# in another terminal
npm run e2e:live
```
 

# Configuration
Configuration files live in `config/` we are currently using webpack, karma, and protractor for different stages of your application

# Contributing
You can include more examples as components but they must introduce a new concept such as `Home` component (separate folders), and Todo (services). I'll accept pretty much everything so feel free to open a Pull-Request

# TypeScript
> To take full advantage of TypeScript with autocomplete you would have to install it globally and use an editor with the correct TypeScript plugins.

## Use latest TypeScript compiler
TypeScript 1.7.x includes everything you need. Make sure to upgrade, even if you installed TypeScript previously. (Note I use typescript 2.0.1)

```
npm install --global typescript
```

## Use a TypeScript-aware editor
We have good experience using these editors:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Webstorm 10](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)

### Visual Studio Code + Debugger for Chrome
> Install [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) and see docs for instructions to launch Chrome 

The included `.vscode` automatically connects to the webpack development server on port `3000`.

# Types
> When you include a module that doesn't include Type Definitions inside of the module you can include external Type Definitions with @types

i.e, to have youtube api support, run this command in terminal: 
```shell
npm i @types/youtube @types/gapi @types/gapi.youtube
``` 
In some cases where your code editor doesn't support Typescript 2 yet or these types weren't listed in ```tsconfig.json```, add these to **"src/custom-typings.d.ts"** to make peace with the compile check: 
```es6
import '@types/gapi.youtube';
import '@types/gapi';
import '@types/youtube';
```

## Custom Type Definitions
When including 3rd party modules you also need to include the type definition for the module
if they don't provide one within the module. You can try to install it with @types

```
npm install @types/node
npm install @types/lodash
```

If you can't find the type definition in the registry we can make an ambient definition in
this file for now. For example

```typescript
declare module "my-module" {
  export function doesSomething(value: string): string;
}
```


If you're prototyping and you will fix the types later you can also declare it as type any

```typescript
declare var assert: any;
declare var _: any;
declare var $: any;
```

If you're importing a module that uses Node.js modules which are CommonJS you need to import as

```typescript
import * as _ from 'lodash';
```

___

# License
 [MIT](/LICENSE)
