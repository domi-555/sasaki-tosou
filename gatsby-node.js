const path = require("path")
// Create pages for docs and blogs separately using two separate
// queries. We use the `graphql` function which returns a Promise
// and ultimately resolve all of them using Promise.all(Promise[])
exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
  const caseTemplate = path.resolve('src/templates/case-post.js');
	const blogTemplate = path.resolve('src/templates/blog-post.js');
  const familyTemplate = path.resolve('src/templates/family-post.js');
  const diaryTemplate = path.resolve('src/templates/diary-post.js');
  const kaisyaTemplate = path.resolve('src/templates/kaisya-post.js');
  const reportTemplate = path.resolve('src/templates/report-post.js');
  const localTemplate = path.resolve('src/templates/local-post.js');
  const newsTemplate = path.resolve('src/templates/news-post.js');
  const worksTemplate = path.resolve('src/templates/works-post.js');
  const omoidesTemplate = path.resolve('src/templates/omoide-post.js');
  const arekoresTemplate = path.resolve('src/templates/arekore-post.js');

  // Individual blogs pages
	const blogs = graphql(`
  {
    blogs:allMicrocmsBlog(filter: {category: {slug: {eq: "weblog"}}}) {
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
          path:`/blog/${node.category.slug}/${node.blogId}/`,
          component: blogTemplate,
        });
      });
	});

  // Individual diary pages
	const diary = graphql(`
  {
    diary:allMicrocmsBlog(filter: {category: {slug: {eq: "diary"}}}) {
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

		// Create diary pages
		result.data.diary.edges.forEach(({ node }) => {
        createPage({
          path:`/blog/${node.category.slug}/${node.blogId}/`,
          component: diaryTemplate,
        });
      });
	});

  // Individual local pages
	const local = graphql(`
  {
    local:allMicrocmsBlog(filter: {category: {slug: {eq: "local-events"}}}) {
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

		// Create local pages
		result.data.local.edges.forEach(({ node }) => {
        createPage({
          path:`/blog/${node.category.slug}/${node.blogId}/`,
          component: localTemplate,
        });
      });
	});

  // Individual report pages
	const report = graphql(`
  {
    report:allMicrocmsBlog(filter: {category: {slug: {eq: "report"}}}) {
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

		// Create report pages
		result.data.report.edges.forEach(({ node }) => {
        createPage({
          path:`/blog/${node.category.slug}/${node.blogId}/`,
          component: reportTemplate,
        });
      });
	});

  // Individual kaisya pages
	const kaisya = graphql(`
  {
    kaisya:allMicrocmsBlog(filter: {category: {slug: {eq: "kaisya"}}}) {
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

		// Create kaisya pages
		result.data.kaisya.edges.forEach(({ node }) => {
        createPage({
          path:`/blog/${node.category.slug}/${node.blogId}/`,
          component: kaisyaTemplate,
        });
      });
	});

  // Individual family pages
	const family = graphql(`
  {
    family:allMicrocmsBlog(filter: {category: {slug: {eq: "family"}}}) {
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

		// Create family pages
		result.data.family.edges.forEach(({ node }) => {
        createPage({
          path:`/blog/${node.category.slug}/${node.blogId}/`,
          component: familyTemplate,
        });
      });
	});

  // Individual news pages
	const news = graphql(`
  {
    news:allMicrocmsBlog(filter: {category: {slug: {eq: "news"}}}) {
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

		// Create news pages
		result.data.news.edges.forEach(({ node }) => {
        createPage({
          path:`/blog/${node.category.slug}/${node.blogId}/`,
          component: newsTemplate,
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
	return Promise.all([blogs, cases, works, arekores, omoides,diary,local,report,kaisya,family,news]);
};