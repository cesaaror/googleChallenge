module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.resolve.fallback = {
          "http": require.resolve("stream-http"),
          "os": require.resolve("os-browserify/browser"),
          "path": require.resolve("path-browserify"),
          "crypto": require.resolve("crypto-browserify"),
          "assert": require.resolve("assert/"),
          "stream": require.resolve("stream-browserify"),
          "url": require.resolve("url/"),
          "net": require.resolve("net-browserify"),
          "tls": require.resolve("tls-browserify"),
          "fs": false, // Si no necesitas fs en el navegador
          "child_process": false // Si no necesitas child_process en el navegador
        };
        return webpackConfig;
      }
    }
  };
  