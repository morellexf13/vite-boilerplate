module.exports = {
  presets: [
    [
      "@babel/preset-env",
      { useBuiltIns: "entry", corejs: "2", targets: { node: "current" } }
    ]
  ],
  plugins: [
    function () {
      return {
        visitor: {
          MetaProperty(path) {
            path.replaceWithSourceString("process");
          }
        }
      };
    }
  ]
};
