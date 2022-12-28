const inspect = require("util").inspect;
const findRemoveSync = require('find-remove');

module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    // Copy `css/` to `_site/css`, etc
    //eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("img");
    //eleventyConfig.addPassthroughCopy("js");

    // tell 11ty which files to process and which files to copy while maintaining directory structure
    eleventyConfig.setTemplateFormats(["md","html","njk","css","json", "js"]);

    eleventyConfig.on('eleventy.after', async () => {
        // Run me after the build ends
        const pathToBuildFolder = __dirname + "\\_site";
        console.log(pathToBuildFolder);
        var result = findRemoveSync(pathToBuildFolder, { files: '\.11tydata\.js$', regex: true })
        console.log(result);
        result = findRemoveSync(pathToBuildFolder, { files: ['.eleventy.js', 'package.json', 'package-lock.json'] })
        console.log(result);
    });

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