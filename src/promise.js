module.exports = {
    plugins: [ 'promise' ],
    rules  : {
        /* Eslint-Plugin-Promise */
        'promise/param-names'   : 'error',
        'promise/no-nesting'    : 'error',
        'promise/no-new-statics': 'error',
        'promise/valid-params'  : 'error',
    },
};

