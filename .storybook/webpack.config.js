module.exports = (config, nodeEnv) => {
  // this is the actual part that should be modified: babel-plugin-react-docgen settings
  config.module.rules[0].query.plugins[2][1].resolver = 'findAllComponentDefinitions'
 
  return config
}