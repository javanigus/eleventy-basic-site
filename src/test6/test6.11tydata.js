const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
	try {
        let url = 'https://raw.githubusercontent.com/javanigus/eleventy-basic-site/main/colors.json';

		/* This returns a promise */
		return EleventyFetch(url, {
			duration: "1d",
			type: "json"
		});
	} catch(e) {
		return {
			// my failure fallback data
		}
	}
};