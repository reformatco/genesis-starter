module.exports = {
  content: ['./**/*.php', './src/**/*.js'],
  whitelist: [
    "rtl",
    "home",
    "blog",
    "archive",
    "date",
    "error404",
    "logged-in",
    "admin-bar",
    "no-customize-support",
    "custom-background",
    "wp-custom-logo",
    "subnav-active",
    "search-active",
  ],
  whitelistPatterns: [
      /textwidget/,
      /^has(-.*)?$/,
      /figure/,
      /global/,
      /components/,
      /lib/,
      /templates/,
      /^wp(-.*)?$/,
      /^modal(-.*)?$/,
      /^menu(-.*)?$/,
      /^flickity(-.*)?$/,
      /^search(-.*)?$/,
      /^(.*)-template(-.*)?$/,
      /^(.*)?-?single(-.*)?$/,
      /^postid-(.*)?$/,
      /^attachmentid-(.*)?$/,
      /^attachment(-.*)?$/,
      /^page(-.*)?$/,
      /^(post-type-)?archive(-.*)?$/,
      /^author(-.*)?$/,
      /^category(-.*)?$/,
      /^tag(-.*)?$/,
      /^tax-(.*)?$/,
      /^term-(.*)?$/,
      /^(.*)?-?paged(-.*)?$/
  ],
  extractors: [
    {
      extensions: ['php', 'svg', 'js'],
      extractor: class TailwindExtractor {
        static extract (content) {
          return content.match(/[A-Za-z0-9-_:/]+/g) || []
        }
      },
    },
  ],
}