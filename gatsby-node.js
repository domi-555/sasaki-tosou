const path = require("path")
// Create pages for docs and blogs separately using two separate
// queries. We use the `graphql` function which returns a Promise
// and ultimately resolve all of them using Promise.all(Promise[])
exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
  const caseTemplate = path.resolve('src/templates/case-post.js');
	const blogTemplate = path.resolve('src/templates/blog-post.js');
  const worksTemplate = path.resolve('src/templates/works-post.js');

	// Individual blogs pages
	const works = graphql(`
  {
    works:allMicrocmsBlog {
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
		result.data.works.edges.forEach(({ node }) => {
        createPage({
          path:`${node.category.slug}/${node.blogId}/`,
          component: worksTemplate,
        });
      });
	});

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

	// Individual docs pages
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

		// Create doc pages
		result.data.cases.edges.forEach(({ node }) => {
			createPage({
				path:`${node.category.slug}/${node.caseId}/`,
				component: caseTemplate,
			});
		});
	});

	// Return a Promise which would wait for both the queries to resolve
	return Promise.all([blogs, cases]);
};