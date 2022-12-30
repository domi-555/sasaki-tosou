const path = require("path")
// Create pages for docs and blogs separately using two separate
// queries. We use the `graphql` function which returns a Promise
// and ultimately resolve all of them using Promise.all(Promise[])
exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
  const caseTemplate = path.resolve('src/templates/case-post.js');
	const blogTemplate = path.resolve('src/templates/blog-post.js');
  const worksTemplate = path.resolve('src/templates/works-post.js');
  const omoidesTemplate = path.resolve('src/templates/omoide-post.js');
  const arekoresTemplate = path.resolve('src/templates/arekore-post.js');

  // Individual blogs pages
	const blogs = graphql(`
  {
    blogs:allMicrocmsBlog {
      edges {
        node {
          
          blogId
          category {
            slug
            name
          }
          title
          date(formatString: "YYYY年MM月DD日")
        }
      }
      totalCount
    }
  }
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create blog pages
		result.data.blogs.edges.forEach(({ node }) => {
        createPage({
          path:`${node.category.slug}/${node.blogId}/`,
          component: blogTemplate,
        });
      });
	});

	// Individual cases pages
	const cases = graphql(`
  {
    cases:allMicrocmsCase {
      edges {
        node {
          
          caseId
          category {
            slug
            name
          }
          title
          date(formatString: "YYYY年MM月DD日")
        }
      }
      totalCount
    }
  }
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create cases pages
		result.data.cases.edges.forEach(({ node }) => {
			createPage({
				path:`${node.category.slug}/${node.caseId}/`,
				component: caseTemplate,
			});
		});
	});

  // Individual omoides pages
	const omoides = graphql(`
  {
    omoide: allMicrocmsBlog(filter: {category: {slug: {eq: "omoide"}}}) {
      edges {
        node {
          blogId
          category {
            slug
            name
          }
          title
          date(formatString: "YYYY年MM月DD日")
        }
      }
      totalCount
    }
  }
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create blog pages
		result.data.omoide.edges.forEach(({ node }) => {
        createPage({
          path:`${node.category.slug}/${node.blogId}/`,
          component: omoidesTemplate,
        });
      });
	});

  // Individual omoides pages
	const arekores = graphql(`
  {
    arekores: allMicrocmsBlog(filter: {category: {slug: {eq: "tosou-arekore"}}}) {
      edges {
        node {
          blogId
          category {
            slug
            name
          }
          title
          date(formatString: "YYYY年MM月DD日")
        }
      }
      totalCount
    }
  }
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create arekore pages
		result.data.arekores.edges.forEach(({ node }) => {
        createPage({
          path:`${node.category.slug}/${node.blogId}/`,
          component: arekoresTemplate,
        });
      });
	});

  // Individual nowWorkings pages
	const works = graphql(`
  {
    works:allMicrocmsBlog(filter: {category: {slug: {eq: "now-working"}}}) {
      edges {
        node {
          blogId
          category {
            slug
            name
          }
          title
          date(formatString: "YYYY年MM月DD日")
          body
          mainimage {
            url
          }
        }
      }
      totalCount
    }
  }
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create nowWorkings pages
		result.data.works.edges.forEach(({ node }) => {
        createPage({
          path:`/now-working/${node.blogId}/`,
          component: worksTemplate,
        });
      });
	});

	// Return a Promise which would wait for both the queries to resolve
	return Promise.all([blogs, cases, works, arekores, omoides]);
};