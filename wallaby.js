/* eslint-disable */
module.exports = function(wallaby) {
    return {
        files: [
            { pattern: 'src/**/*.js', load: false },
            'setupTest.js',
            '!src/**/__tests__/*.js',
        ],

        tests: ['src/**/__tests__/*.js'],

        testFramework: 'jest',

        env: {
            type: 'node',
            runner: 'node',
        },

        compilers: {
            '**/*.js': wallaby.compilers.babel(),
        },
    };
};
