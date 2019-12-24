module.exports = {
    rules: {
        /* ECMAScript 6 */
        'arrow-body-style': [
            'error',
            'as-needed',
            { requireReturnForObjectLiteral: false },
        ],
        'arrow-parens': [
            'error',
            'as-needed',
            { requireForBlockBody: false },
        ],
        'arrow-spacing'         : 'error',
        'generator-star-spacing': [
            'error',
            'both',
        ],
        'no-class-assign'   : 'error',
        'no-confusing-arrow': [
            'error',
            { allowParens: true },
        ],
        'no-const-assign'      : 'error',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports' : [
            'error',
            { includeExports: true },
        ],
        'no-new-symbol'          : 'error',
        'no-useless-computed-key': 'error',
        'no-useless-rename'      : 'error',
        'no-var'                 : 'error',
        'prefer-const'           : [
            'error',
            {
                destructuring         : 'all',
                ignoreReadBeforeAssign: true,
            },
        ],
        'prefer-numeric-literals': 'error',
        'prefer-template'        : 'error',
        'rest-spread-spacing'    : [
            'error',
            'never',
        ],
        'symbol-description'    : 'error',
        'template-curly-spacing': [
            'error',
            'always',
        ],
        'yield-star-spacing': [
            'error',
            'both',
        ],
    },
};

