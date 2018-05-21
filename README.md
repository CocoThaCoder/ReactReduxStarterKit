# ReactReduxStarterKit
A React Starter Kit Scaffold that uses webpack configurations. There are multiple branches of this repo
with the following options:
- `master`- Simple React Redux Starter Kit
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

##### Styles Components
This project uses styled components for styling. [Here][2] is a link to the documentation.

##### Eslint + Prettier
This projects is setup with eslint and prettier configured out of the box. It also uses husky to run prettier on any changed files using the precommit hook.


[1]: https://github.com/Unitech/pm2
[2]: https://www.styled-components.com/docs