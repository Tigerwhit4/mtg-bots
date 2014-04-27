var require = requirejs.config({
    baseUrl: '/',
    paths:   {
        Handlebars: 'lib/handlebars',
        jquery:     '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
        text:       'lib/text',
        hbs:        'lib/require-handlebars-plugin/hbs'
    },
    shim: {
        Handlebars: {
            exports: 'Handlebars'
        }
    },
    hbs: {}
});
