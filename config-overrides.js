module.exports = function override(config, env) {
    config.resolve.fallback = {
      "url": require.resolve("url/"),
      "https": require.resolve("https-browserify"),
      "querystring": require.resolve("querystring-es3"),
      "stream": require.resolve("stream-browserify"),
    };
    return config;
  };
  