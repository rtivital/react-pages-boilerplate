# React pages boilerplate

![Cover](cover.png)
This boilerplate introduces a simple way for developing serverless React applications, which are perfect for serving from [Github Pages](https://pages.github.com/).

## Technologies

- Typescript
- [Mantine](https://mantine.dev/)
- [Webpack@5](https://webpack.js.org/) as module bundler
- [Eslint](http://eslint.org/) for linting
- [Prettier](https://prettier.io/) for automated code formatting
- [Jest](https://facebook.github.io/jest/) with [Enzyme](http://airbnb.io/enzyme/) for testing

## Getting started

- Clone `git clone https://github.com/rtivital/react-pages-boilerplate` or [download](https://github.com/rtivital/react-pages-boilerplate/archive/master.zip) this repository.
- (Optional) Run `nvm use`. This will ensure that you are running the supported version of Node.js. You can nvm installation instructions [here](https://github.com/creationix/nvm).
- Install dependencies: `yarn`
- Run the project: `npm start`

## Settings

[settings.js](./settings.js) file includes all important settings that should be used to setup deployments to gh-pages:

- **title** – Base application title
- **cname** – Adds CNAME file that allows to use custom domain names with gh-pages
- **repoPath** – username.github.io/repoPath for react router to recognize gh-pages paths
- **prerenderRoutes** – routes that should be prerendered before deploy

## npm scripts

- `npm start` – starts development server with webpack-dev-server
- `npm test` – runs tests with Jest
- `npm run build` – builds project to production
- `npm run deploy` – builds and deploys project to Github pages
- `npm run lint` – lints JavaScript files
- `npm run prettier` – format js and jsx files with prettier

## Changelog

See [releases section](https://github.com/rtivital/react-pages-boilerplate/releases/) to get information about new cool features added to the project.
