module.exports = function (eleventyConfig) {
  return {
    markdownTemplateEngine: "md",

    htmlTemplateEngine: "njk",

    dir: {
      input: "src",
      output: "public",
    },
  };
};
