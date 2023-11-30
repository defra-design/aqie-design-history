module.exports = function (eleventyConfig) {
  // Options to customise the appearance of your design history
  // https://x-govuk.github.io/govuk-eleventy-plugin/options/
  eleventyConfig.addPlugin(require('@x-govuk/govuk-eleventy-plugin'), {
    stylesheets: [
      '/styles/application.css'
    ],
    headingPermalinks: true,
    brandColour: '#00a33b',
    header: {
      organisationLogo: 'royal-arms',
      organisationName: 'DEFRA',
      productName: 'Air quality design history'
    },
    url: process.env.GITHUB_ACTIONS
      ? 'https://defra-design.github.io/aqie-design-history/'
      : '/'
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })
  eleventyConfig.addPassthroughCopy('./app/posts/images');


    // Colllections
  eleventyConfig.addCollection('citizen-alpha', collection => {
    return collection.getFilteredByGlob('app/posts/citizen-alpha/*.md')
  })

  eleventyConfig.addCollection('private-beta', collection => {
    return collection.getFilteredByGlob('app/posts/private-beta/*.md')
  })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    pathPrefix: "/aqie-design-history/", 
    dir: {
      input: 'app',
      output: 'docs',
      layouts: '_layouts',
      includes: '_components'
    }
  }
}

