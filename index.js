const inlineSourceMap = require("inline-source-map");

function configureInlineSourceMap(options) {
  return {
    pretransform: Object.assign({
      extensions: ["js", "jsx", "mjs"],
      handler: (meta) => {
        if (meta.source) {
          return {
            source: meta.source + "\n" + inlineSourceMap().addGeneratedMappings(meta.filename, meta.source).addSourceContent(meta.filename, meta.source).inlineMappingUrl()
          };
        }
      }
    }, options)
  };
}

module.exports = configureInlineSourceMap;
