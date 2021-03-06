// An example configuration file.
exports.config = {
    directConnect: true,
    chromeDriver: 'selenium/chromedriver',
    baseUrl: 'http://localhost:8081/challenge/min/',
    //seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: [ 'e2e/**/*.spec.js' ],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};