module.exports = {
    plugins: [ 'import' ],
    rules  : {
        /* Eslint-Plugin-Import */
        'import/no-unresolved': 'error',
        'import/first'        : 'error',
        'import/exports-last' : 'error',
        'import/no-duplicates': [
            'error',
            { considerQueryString: true },
        ],
        'import/order'               : 'error',
        'import/newline-after-import': 'error',
    },
};

