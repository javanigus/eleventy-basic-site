const inspect = require("util").inspect;

module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    // Copy `css/` to `_site/css`, etc
    //eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("img");

    eleventyConfig.addPassthroughCopy('**/*.js', "_site", {
      //filter: path => (path.endsWith('.11tydata.js') == false)
      // debug
      filter: path => {
        const doCopy = (path.endsWith('.11tydata.js') == false)
        console.log("copy", doCopy, path)
        return doCopy
      }
    });

    eleventyConfig.setTemplateFormats(["md","html","njk","css","json"]);

    // Values can be static:
    eleventyConfig.addGlobalData("myStatic", "static");
    // functions:
    eleventyConfig.addGlobalData("myFunction", () => new Date());

    eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

    // add support for blocks
    eleventyConfig.addShortcode('renderlayoutblock', function(name) {
        return (this.page.layoutblock || {})[name] || '';
    });
  
    eleventyConfig.addPairedShortcode('layoutblock', function(content, name) {
        if (!this.page.layoutblock) this.page.layoutblock = {};
        this.page.layoutblock[name] = content;
        return '';
    });

    return {
        dir: {
        // ⚠️ These values are both relative to your input directory.
        includes: "_includes",
        layouts: "_layouts"
        }
    }
};