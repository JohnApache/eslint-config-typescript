module.exports = {
    rules: {
        /* Possible Errors */
        'for-direction'            : 'error',
        'getter-return'            : 'error',
        'no-async-promise-executor': 'error',
        'no-compare-neg-zero'      : 'error',
        'no-cond-assign'           : 'error',
        'no-constant-condition'    : [
            'error',
            { checkLoops: false },
        ],
        'no-control-regex' : 'error',
        'no-debugger'      : 'error',
        'no-dupe-args'     : 'error',
        'no-dupe-keys'     : 'error',
        'no-duplicate-case': 'error',
        'no-empty'         : [
            'error',
            { allowEmptyCatch: true },
        ],
        'no-empty-character-class': 'error',
        'no-ex-assign'            : 'error',
        'no-extra-boolean-cast'   : 'error',
        'no-extra-parens'         : [
            'error',
            'all',
            {
                conditionalAssign               : false,
                returnAssign                    : false,
                nestedBinaryExpressions         : false,
                ignoreJSX                       : 'multi-line',
                enforceForArrowConditionals     : false,
                enforceForSequenceExpressions   : false,
                enforceForNewInMemberExpressions: false,
            },
        ],
        'no-extra-semi'        : 'error',
        'no-func-assign'       : 'error',
        'no-import-assign'     : 'error',
        'no-inner-declarations': [
            'error',
            'both',
        ],
        'no-invalid-regexp': [
            'error',
            {
                allowConstructorFlags: [
                    'u',
                    'y',
                ],
            },
        ],
        'no-irregular-whitespace': [
            'error',
            {
                skipStrings  : false,
                skipComments : false,
                skipRegExps  : false,
                skipTemplates: false,
            },
        ],
        'no-misleading-character-class': 'error',
        'no-obj-calls'                 : 'error',
        'no-regex-spaces'              : 'error',

        // 'no-setter-return': 'error',
        'no-sparse-arrays'           : 'error',
        'no-template-curly-in-string': 'error',
        'no-unexpected-multiline'    : 'error',
        'no-unreachable'             : 'error',
        'no-unsafe-negation'         : 'error',
        'require-atomic-updates'     : 'error',
        'use-isnan'                  : 'error',
        'valid-jsdoc'                : 'error',
        'valid-typeof'               : 'error',

        /* Best Practices */
        'block-scoped-var': 'error',
        curly             : [
            'error',
            'multi-line',
            'consistent',
        ],
        'default-case': 'error',
        'dot-location': [
            'error',
            'property',
        ],
        'dot-notation': [
            'error',
            { allowKeywords: true },
        ],
        eqeqeq: [
            'error',
            'always',
            { 'null': 'ignore' },
        ],
        'guard-for-in'        : 'warn',
        'no-alert'            : 'error',
        'no-caller'           : 'error',
        'no-case-declarations': 'error',
        'no-div-regex'        : 'error',
        'no-else-return'      : 'error',
        'no-empty-pattern'    : 'error',
        'no-fallthrough'      : [
            'error',
            {
                commentPattern:
                'break[\\s\\w]*omitted',
            },
        ],
        'no-floating-decimal': 'error',
        'no-global-assign'   : 'error',
        'no-iterator'        : 'error',
        'no-labels'          : 'error',
        'no-lone-blocks'     : 'error',
        'no-loop-func'       : 'error',
        'no-magic-numbers'   : [
            'warn',
            {
                ignore: [
                    0,
                    1,
                    2,
                    -1,
                    -2,
                ],
                ignoreArrayIndexes: true,
                detectObjects     : false,
            },
        ],
        'no-multi-spaces': [
            'error',
            {
                ignoreEOLComments: true,
                exceptions       : {
                    Property          : true,
                    BinaryExpression  : false,
                    VariableDeclarator: true,
                    ImportDeclaration : true,
                },
            },
        ],
        'no-new-wrappers'  : 'error',
        'no-octal'         : 'error',
        'no-octal-escape'  : 'error',
        'no-param-reassign': 'error',
        'no-proto'         : 'error',
        'no-redeclare'     : [
            'error',
            { builtinGlobals: true },
        ],
        'no-return-assign': 'error',
        'no-return-await' : 'error',
        'no-self-assign'  : [
            'error',
            { props: true },
        ],
        'no-self-compare'             : 'error',
        'no-sequences'                : 'error',
        'no-throw-literal'            : 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions'       : [
            'error',
            {
                allowShortCircuit: true,
                allowTernary     : true,
            },
        ],
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-void'          : 'error',
        'no-with'          : 'error',
        'no-eval'          : 'error',
        'no-useless-catch' : 'error',
        radix              : [
            'error',
            'as-needed',
        ],
        'require-await': 'error',
        'wrap-iife'    : [
            'error',
            'inside',
            { functionPrototypeMethods: true },
        ],

        /* Variables */
        'no-delete-var'             : 'error',
        'no-shadow-restricted-names': 'error',
        'no-unused-vars'            : [
            'warn',
            {
                vars                     : 'local',
                varsIgnorePattern        : '[iI]gnored',
                args                     : 'after-used',
                argsIgnorePattern        : '^_',
                caughtErrors             : 'all',
                caughtErrorsIgnorePattern: '^ignore',
            },
        ],
        'no-use-before-define': [
            'error',
            'nofunc',
        ],

        /* Stylistic Issues */
        'array-bracket-newline': [
            'error',
            {
                multiline: true,
                minItems : 3,
            },
        ],
        'array-bracket-spacing': [
            'error',
            'always',
            {
                // 'singleValue': false,
                objectsInArrays: false,
                arraysInArrays : false,
            },
        ],
        'array-element-newline': [
            'error',
            {
                multiline: true,
                minItems : 1,
            },
        ],
        'block-spacing': [
            'error',
            'always',
        ],
        'brace-style': [
            'error',
            '1tbs',
            { allowSingleLine: true },
        ],
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'comma-spacing': [
            'error',
            {
                before: false,
                after : true,
            },
        ],
        'comma-style': [
            'error',
            'last',
        ],
        'computed-property-spacing': [
            'error',
            'never',
        ],
        'eol-last': [
            'error',
            'always',
        ],
        'func-call-spacing': [
            'error',
            'never',
        ],
        'func-name-matching': [
            'error',
            'always',
            { includeCommonJSModuleExports: false },
        ],
        'function-paren-newline': [
            'error',
            'multiline',
        ],
        indent: [
            'error',
            4,
            {
                SwitchCase        : 1,
                VariableDeclarator: {
                    'var'  : 1,
                    let    : 1,
                    'const': 1,
                },
                outerIIFEBody      : 1,
                MemberExpression   : 1,
                FunctionDeclaration: {
                    parameters: 'first',
                    body      : 1,
                },
                FunctionExpression: {
                    parameters: 'first',
                    body      : 1,
                },
                CallExpression        : { arguments: 'first' },
                ArrayExpression       : 'first',
                ObjectExpression      : 'first',
                ImportDeclaration     : 'first',
                flatTernaryExpressions: true,

                // 'ignoredNodes': [ 'ConditionalExpression' ],
                ignoreComments: false,
            },
        ],
        'jsx-quotes': [
            'error',
            'prefer-single',
        ],
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon : true,
                mode       : 'minimum',
                align      : {
                    beforeColon: false,
                    afterColon : true,
                    on         : 'colon',
                    mode       : 'strict',
                },
            },
        ],
        'keyword-spacing': [
            'error',
            {
                before: true,
                after : true,
            },
        ],
        'lines-around-comment': [
            'error',
            {
                beforeBlockComment: true,
                afterBlockComment : false,
                beforeLineComment : true,
                afterLineComment  : false,
                allowBlockStart   : true,
                allowBlockEnd     : true,
                allowClassStart   : true,
                allowClassEnd     : true,
                allowObjectStart  : true,
                allowObjectEnd    : true,
                allowArrayStart   : true,
                allowArrayEnd     : true,
            },
        ],
        'lines-between-class-members': [
            'error',
            'always',
            { exceptAfterSingleLine: true },
        ],
        'max-depth': [
            'warn',
            10,
        ],
        'max-len': [
            'warn',
            {
                code                  : 140,
                tabWidth              : 4,
                comments              : 140,
                ignoreComments        : true,
                ignoreTrailingComments: true,
                ignoreUrls            : true,
                ignoreStrings         : true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals  : true,
            },
        ],
        'max-lines': [
            'warn',
            {
                max           : 2000,
                skipBlankLines: true,
                skipComments  : true,
            },
        ],
        'max-nested-callbacks': [
            'warn',
            { max: 10 },
        ],
        'max-params': [
            'warn',
            { max: 10 },
        ],
        'new-parens'              : 'error',
        'newline-per-chained-call': [
            'error',
            { ignoreChainWithDepth: 2 },
        ],
        'no-array-constructor'    : 'error',
        'no-lonely-if'            : 'error',
        'no-mixed-spaces-and-tabs': [
            'error',
            'smart-tabs',
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                max   : 5,
                maxEOF: 2,
                maxBOF: 2,
            },
        ],
        'no-trailing-spaces': [
            'error',
            {
                skipBlankLines: false,
                ignoreComments: false,
            },
        ],
        'no-unneeded-ternary': [
            'error',
            { defaultAssignment: true },
        ],
        'no-whitespace-before-property'   : 'error',
        'nonblock-statement-body-position': 'error',
        'object-curly-newline'            : [
            'error',
            {
                multiline    : true,
                minProperties: 3,
            },
        ],
        'object-curly-spacing': [
            'error',
            'always',
            {
                arraysInObjects : false,
                objectsInObjects: false,
            },
        ],
        'operator-assignment': [
            'error',
            'always',
        ],
        'operator-linebreak': [
            'error',
            'after',
        ],
        'padded-blocks': [
            'error',
            { classes: 'always' },
        ],
        'quote-props': [
            'error',
            'as-needed',
            {
                keywords   : true,
                unnecessary: true,
                numbers    : true,
            },
        ],
        quotes: [
            'error',
            'single',
            {
                avoidEscape          : true,
                allowTemplateLiterals: true,
            },
        ],
        semi: [
            'error',
            'always',
            { omitLastInOneLineBlock: true },
        ],
        'semi-spacing': [
            'error',
            {
                before: false,
                after : true,
            },
        ],
        'semi-style': [
            'error',
            'last',
        ],
        'sort-vars'          : 'error',
        'space-before-blocks': [
            'error',
            'always',
        ],
        'space-before-function-paren': [
            'error',
            {
                anonymous : 'never',
                named     : 'always',
                asyncArrow: 'always',
            },
        ],
        'space-in-parens': [
            'error',
            'never',
        ],
        'space-infix-ops': 'error',
        'space-unary-ops': [
            'error',
            {
                words   : true,
                nonwords: false,
            },
        ],
        'switch-colon-spacing': [
            'error',
            {
                before: false,
                after : true,
            },
        ],
        'wrap-regex': 'error',

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
