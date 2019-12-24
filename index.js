module.exports = {
    parser: '@typescript-eslint/parser',
    env   : {
        browser: true,
        es6    : true,
        node   : true,
        mocha  : true,
    },
    globals: {
        Atomics          : 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType : 'module',
    },
    plugins: [
        'import',
        'promise',
        '@typescript-eslint',
    ],
    'extends': [
        './src/base.js',
        './src/es6.js',
        './src/node.js',
        './src/promise.js',
        './src/import.js',
        './src/typescript.js',
    ].map(require.resolve),
    rules: {},
};
