module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    // Copy `css/` to `_site/css`, etc
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("js");

    return {
        dir: {
        // ⚠️ These values are both relative to your input directory.
        includes: "_includes",
        layouts: "_layouts"
        }
    }
};