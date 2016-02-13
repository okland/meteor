Package.describe({
    summary: "Dictionary data structure allowing non-string keys",
    version: '1.0.4'
});

Npm.depends({
    "immutable": "3.7.6"
});

Package.onUse(function (api) {
    api.use(['underscore', 'ejson']);
    // add package
    api.use(['cosmos:browserify'], 'client');

    api.addFiles([ 'id-map.js']);
    api.addFiles(['app.browserify.js'], ['client']);
    api.addFiles(['immutable-id-map.server.js'], ['server']);
    api.addFiles(['immutable-id-map.js']);

    api.export('IdMap');
    api.export('ImmutableIdMap');
});
