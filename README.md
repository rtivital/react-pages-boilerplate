# React pages boilerplate

![Cover](cover.png)
This boilerplate introduces a simple way for developing serverless React applications, which are perfect for serving from [Github Pages](https://pages.github.com/).

## Technologies

- [Webpack@4](https://webpack.js.org/) as module bundler
- [Babel](https://babeljs.io/) for js and jsx transpiling
- [react-hot-loader@4](https://github.com/gaearon/react-hot-loader) for extremely fast hot updates
- [Eslint](http://eslint.org/) for linting
- [Prettier](https://prettier.io/) for automated code formatting
- [Jest](https://facebook.github.io/jest/) with [Enzyme](http://airbnb.io/enzyme/) for testing
- css modules, less, autoprefixer for styles processing
- [Storybook](https://storybook.js.org/) for painless UI development and testing

## Getting started

- Clone `git clone https://github.com/rtivital/react-pages-boilerplate` or [download](https://github.com/rtivital/react-pages-boilerplate/archive/master.zip) this repository.
- (Optional) Run `nvm use`. This will ensure that you are running the supported version of Node.js. You can nvm installation instructions [here](https://github.com/creationix/nvm).
- Install dependencies: `yarn`
- Run the project: `npm start`

## npm scripts

- `npm start` – starts development server with webpack-dev-server
- `npm test` – runs tests with Jest
- `npm run build` – builds project to production
- `npm run deploy` – builds and deploys project to Github pages
- `npm run lint` – lints JavaScript files
- `npm run storybook` – starts storybook server
- `npm run prettier` – format js and jsx files with prettier

## Changelog

See [releases section](https://github.com/rtivital/react-pages-boilerplate/releases/) to get information about new cool features added to the project.
