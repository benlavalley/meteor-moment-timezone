Package.describe({
  name: 'aldeed:moment-timezone',
  summary: "Timezone support for moment.js, packaged for Meteor. See http://momentjs.com/timezone.",
  version: "0.4.0",
  git: "https://github.com/aldeed/meteor-moment-timezone.git"
});

Package.onUse(function (api) {
  api.use('momentjs:moment@2.6.0');
  api.imply('momentjs:moment');

  api.addFiles([
    'require-shim.js',
    'lib/moment-timezone/moment-timezone.js',
    'lib/moment-timezone-data/moment-timezone-data.js',
    'revert-require-shim.js'
  ], ['client', 'server']);
});

Package.onTest(function (api) {
  api.use([
    'aldeed:moment-timezone',
    'tinytest',
    'test-helpers'
  ], ['client', 'server']);

  api.addFiles('test-mrt:moment-timezone.js', ['client', 'server']);
});
