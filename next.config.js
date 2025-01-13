const env = {
  NEXT_PUBLIC_API_URL: "http://localhost:3000",
};

const moduleExports = {
  swcMinify: true,
  env,
  webpack: function (config, options) {
    config.experiments = { asyncWebAssembly: true, layers: true };
    return config;
  },
  images: {
    domains: ["storage.googleapis.com"],
  },
};

module.exports = moduleExports;
