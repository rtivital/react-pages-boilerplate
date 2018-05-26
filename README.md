# React pages boilerplate

![Cover](cover.png)
This boilerplate introduces a simple way for developing serverless React applications, which are perfect for serving from [Github Pages](https://pages.github.com/).

## Technologies

* [Webpack@4](https://webpack.js.org/) as module bundler
* [Babel](https://babeljs.io/) with [babel-preset-env](https://babeljs.io/docs/plugins/preset-env/) for js and jsx transpiling
* [react-hot-loader@4](https://github.com/gaearon/react-hot-loader) for extremely fast hot updates
* [Eslint](http://eslint.org/) and [Stylelint](http://stylelint.io/) for linting
* [Prettier](https://prettier.io/) for automated code formatting
* [Jest](https://facebook.github.io/jest/) with [Enzyme](http://airbnb.io/enzyme/) for testing
* CSS Modules, [Sass](http://sass-lang.com/) and [PostCSS](http://postcss.org/) with [Autoprefixer](https://github.com/postcss/autoprefixer) for styles processing
* [Storybook](https://storybook.js.org/) for painless UI development and testing

## Preinstalled and configured libraries

* [react@16](https://github.com/facebook/react)
* [redux](https://github.com/reactjs/redux)
* [react-router@4](https://github.com/ReactTraining/react-router) with HashRouter (perfectly suits Github Pages environment)
* [react-redux](https://github.com/reactjs/react-redux)
* [axios](https://github.com/mzabriskie/axios) with [redux-axios-middleware](https://github.com/svrcekmichal/redux-axios-middleware)
* [ramda](http://ramdajs.com/) and [lodash](https://lodash.com/) as utility libraries (unused parts will be cut off with babel and webpack plugins)
* [react-icons](https://gorangajic.github.io/react-icons/)

## Getting started

* Clone `git clone https://github.com/rtivital/react-pages-boilerplate` or [download](https://github.com/rtivital/react-pages-boilerplate/archive/master.zip) this repository.
* (Optional) Run `nvm use`. This will ensure that you are running the supported version of Node.js. You can nvm installation instructions [here](https://github.com/creationix/nvm).
* Install dependencies: `npm install`
* Run the project: `npm start`
* Remove git folder with `npm run clean:git` (this will remove .git folder attached to react-pages-boilerplate) and follow [these instructions](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) to init new Github repository and enable publishing to Gihub Pages.

## npm scripts

* `npm start` – starts development server with webpack-dev-server
* `npm test` – runs tests with Jest
* `npm run build` – builds project to production (Note that the result bundle is not suitable for hosting on Github Pages, use `npm run deploy` to build and deploy to Github Pages)
* `npm run deploy` – builds and deploys project to Github pages
* `npm run lint` – lints both JavaScript (with `npm run lint:js`) and Sass files (with `npm run lint:scss`)
* `npm run storybook` – starts storybook server on port 9001
* `npm run prettier` – format js and jsx files with prettier

## Changelog

See [releases section](https://github.com/rtivital/react-pages-boilerplate/releases/) to get information about new cool features added to the project.
