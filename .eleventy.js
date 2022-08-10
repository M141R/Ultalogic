module.exports = function (eleventyConfig) {
  eleventyConfig.addPassThrough("css")
  return {
    markdownTemplateEngine: "md",

    htmlTemplateEngine: "njk",

    dir: {
      input: "src",
      output: "public",
    },
  };
};
