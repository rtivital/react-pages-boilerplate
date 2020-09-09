module.exports = {
  // Base application title used in document.title
  title: 'React pages boilerplate',

  // use cname option to add CNAME file to webpack build
  // CNAME file allows to use custom domain names with gh-pages, example:
  // cname: 'omatsuri.app'
  cname: null,

  // add repo path for username.github.io/repoPath for react router to recognize paths,
  // use only when deployed to github.io, leave as null for deployments with custom domains
  repoPath: '/react-pages-boilerplate',

  // list of routes that should be prerendered
  // list should always contain '/' and '/404' for gh-pages to recognize app
  prerenderRoutes: ['/', '/404'],
};
