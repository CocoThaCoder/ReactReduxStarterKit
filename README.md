# ReactReduxStarterKit
A React Starter Kit Scaffold that uses webpack configurations. There are multiple branches of this repo
with the following options:
- `master`- Simple React Redux Starter Kit
- `complete-dev-tools` - React Redux w/ React Hot Loader and React Dev Tools
- `typescript` - A Simple React Redux Starter Kit in Typescript

### Instructions

##### Test
1. Run `npm test` to run test suites using Jest

##### Development
1. Run `npm install` to install required node modules
2. Run `npm start` to run application on localhost:8080

##### Production
1. Run `npm run build` to build the bundle.js file which is placed in the `dist` folder.
2. Run `npm run deploy` to run the application forever in a production environment.

[Here][1] is a link to the pm2 documentation for managing the pm2 process that is created from step 3.

[1]: https://github.com/Unitech/pm2

##### Style Loaders
- This project is using the loaders (sass, css, and style loaders) to control style.
In order to style pages you can import a sass file in the component and it will
receive the styling of that particular sass file. An example of this can be seen in the main.jsx
react component.
