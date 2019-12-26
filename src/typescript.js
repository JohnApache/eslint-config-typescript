module.exports = {
    plugins: [ '@typescript-eslint' ],
    rules  : {
        /* @Typescript-Eslint/Eslint-Plugin */
        '@typescript-eslint/adjacent-overload-signatures': 'error',

        // '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter  : 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter  : 'semi',
                    requireLast: false,
                },
            },
        ],
        '@typescript-eslint/type-annotation-spacing': [
            'error',
            {
                before: false,
                after : true,
            },
        ],

        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars              : 'all',
                args              : 'after-used',
                ignoreRestSiblings: false,
                caughtErrors      : 'all',
            },
        ],
    },
};

