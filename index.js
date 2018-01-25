const inlineSourceMap = require("inline-source-map");

function configureInlineSourceMap(options) {
  return {
    pretransform: Object.assign({
      extensions: ["js", "jsx", "mjs"],
      handler: (meta) => {
        const source = meta.source;

        if (!source) {
          return;
        }

        const filename = meta.filename || meta.path || "$anonymous";

        const smString = (
          inlineSourceMap()
            .addGeneratedMappings(filename, meta.source)
            .addSourceContent(filename, meta.source)
            .inlineMappingUrl()
        );

        return {
          filename: filename,
          source: meta.source + "\n" + smString
        };
      }
    }, options)
  };
}

module.exports = configureInlineSourceMap;
