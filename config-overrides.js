// This file is used by react-app-rewired to override the webpack config of react-script.

function rewireGraphQL(config) {
  //Exclude .graphql files from the file-loader
  config.module.rules
    .find(conf => conf.loader && conf.loader.includes('file-loader'))
    .exclude.push(/\.(graphql|gql)$/);

  //Add loader for graphQL files
  config.module.rules.push({
    test: /\.(graphql|gql)$/,
    loader: 'graphql-tag/loader'
  });

  return config;
}

module.exports = function override(config, env) {
  rewireGraphQL(config);
  return config;
};
