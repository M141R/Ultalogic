module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  return {
    markdownTemplateEngine: "md",

    htmlTemplateEngine: "njk",

    dir: {
      input: "src",
      output: "public",
    },
  };
};
