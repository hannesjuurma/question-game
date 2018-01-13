'use strict';

/**
 * Require the Fractal module
 */
let fractal = module.exports = require('@frctl/fractal').create();
let pkg            = require('./package.json');
let nighthawkTheme = require('@gotoandplay/nighthawk');
let tsxAdapter     = require('./packages/fractal-tsx-adapter');

/**
 * Give your project a title.
 */
fractal.set('project.title', 'Project Web Style Guide');
fractal.set('project.version', pkg.version);

/**
 * Tell Fractal where to look for components.
 */
fractal.components.engine(tsxAdapter);
fractal.components.set('path', 'src');
fractal.components.set('title', 'Patterns');
fractal.components.set('default.preview', '@preview');
fractal.components.set('statuses', {
    prototype: {
        key: "prototype",
        label: "Prototype",
        description: "Do not implement."
    },
    wip: {
        key: "wip",
        label: "WIP",
        description: "Work in progress. Implement with caution."
    },
    ready: {
        key: "ready",
        label: "Ready",
        description: "Ready to implement."
    }
});
fractal.components.set('default.status', 'prototype');
fractal.components.set('default.context.version', pkg.version);
fractal.components.set('default.context.language', 'en-US');
fractal.components.set('ext', '.tsx');

/**
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', 'src/docs');

/**
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('server.sync', true);
fractal.web.set('server.syncOptions', {
    open: true
});
fractal.web.set('static.path', 'app/styleguide/public');
fractal.web.set('builder.dest', 'app/styleguide/build');

fractal.web.theme(nighthawkTheme());