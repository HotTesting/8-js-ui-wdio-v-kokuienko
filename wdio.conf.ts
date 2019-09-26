const SUT_URL = process.env.SUT_URL || "http://ip-5236.sunline.net.ua:38015/";
console.log("GOT BASE URL", SUT_URL);

const wdioConfig = {
    runner: "local",
    // Where selenium standalone or chrome driver started
    hostname: 'ip-5236.sunline.net.ua',
    // port: 4444,
    path: "/wd/hub",
    specs: ["./test/specs/cart.ts"],
    maxInstances: 2,
    capabilities: [{
        browserName: 'chrome',
        "selenoid:options": {
            enableVNC: true
        }
    // }, {
    //     browserName: 'firefox',
    //     "selenoid:options": {
    //         enableVNC: true
    //     }
    }],

    // MULTIREMOTE
    // capabilities: {
    //     user1: {
    //         capabilities: {
    //             browserName: "chrome"
    //         }
    //     },
    //     user2: {
    //         capabilities: {
    //             browserName: "firefox"
    //         }
    //     }
    // },
    logLevel: "info",
    baseUrl: SUT_URL,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    // services: ["chromedriver"],
    framework: "mocha",
    reporters: [
        "spec", 
        ['allure', {
            outputDir: 'allure-results'
        }]
    ],
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: "bdd",
        timeout: 60000
        // retries: 5
        // grep: '@SMOKE'
    },
    beforeSession: function (config, capabilities) {
        if (process.env.DEBUG == "1") {
            // Giving debugger some time to connect...
            return new Promise(resolve => setTimeout(resolve, 10000));
        }
    },
    before: function (capabilities, specs) {
        browser.setWindowSize(1920, 1080);
    }
};

if (process.env.DEBUG == "1") {
    console.log("###### Running in debug mode! ######");
    wdioConfig.maxInstances = 1
    wdioConfig['execArgv'] = ["--inspect=127.0.0.1:5858"];
    wdioConfig.mochaOpts.timeout = 360000;
}

module.exports.config = wdioConfig;