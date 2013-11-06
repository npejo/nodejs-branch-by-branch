var express = require('express');

module.exports = function(app, config) {
    if ('development' === app.get('env')) {
        app.use(express.errorHandler());
    }

    if (app.get('env') !== 'test') {
        app.use(express.logger({format: 'dev'}));
    }

    app.use(express.compress({
        filter: function(req, res) {
            return /json|text|javascript|css/.test(res.getHeader('Content-Type'));
        },
        level: 9
    }));

    app.use(express.favicon());
    app.use(express.static(config.root + '/public'));
    app.set('views', config.root + '/views');
    app.set('view engine', 'jade');
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.methodOverride());

    app.use(app.router);

    // configure error handling
    // 404s
    app.use(function (req, res, next) {
        res.status(404);

        if (req.accepts('html')) {
            return res.status(404).render('404', {
                url: req.originalUrl,
                error: ' Page Not Found'
            });
        }

        if (req.accepts('json')) {
            return res.json({ error: 'Not found' });
        }

        // default response type
        res.type('txt');
        res.send("Hmmm, couldn't find that page.");
    });

    // 500
    app.use(function (err, req, res, next) {
        var msg = err.message || 'Internal app error';
        return res.status(500).render('500', {error: msg});
    });
}