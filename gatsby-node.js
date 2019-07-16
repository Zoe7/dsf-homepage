const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      cms {
        pages {
          id
          title
          content
          slug
        }
      }
    }
  `);

  const index = data.cms.pages[0];

  actions.createPage({
    path: '/',
    component: path.resolve(`./src/components/Page.js`),
    context: {
      id: index.id,
      title: index.title,
      content: index.content
    },
    jsonName: index.id
  });

  const pages = data.cms.pages.slice(1);

  pages.forEach(({ id, title, slug, content }) => {
    actions.createPage({
      path: slug,
      component: path.resolve(`./src/components/Page.js`),
      context: {
        id,
        title,
        content
      },
      jsonName: id
    });
  });
};
