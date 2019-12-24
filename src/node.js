module.exports = {
    globals: {
        Atomics          : 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    rules: {
        /* Node.js and CommonJS */
        'no-buffer-constructor': 'error',
        'no-new-require'       : 'error',
        'no-path-concat'       : 'error',
    },
};

