const inlineSourceMap = require("inline-source-map");

function configureInlineSourceMap(options) {
  return {
    pretransform: Object.assign({
      extensions: ["js", "jsx", "mjs"],
      handler: (meta) => {
        if (!meta.source) {
          return;
        }

        const source = meta.source;
        const filename = meta.filename || meta.path || "$anonymous";

        const smString = (
          inlineSourceMap()
            .addGeneratedMappings(filename, source)
            .addSourceContent(filename, source)
            .inlineMappingUrl()
        );

        return {
          filename: filename,
          source: source + "\n" + smString
        };
      }
    }, options)
  };
}

module.exports = configureInlineSourceMap;
