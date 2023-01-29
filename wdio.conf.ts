import type { Options } from '@wdio/types'

export const config = {
    runner: 'local',
    hostname: '0.0.0.0',
    port: 4444,
    path: '/wd/hub',
    specs: [ './test/features/**/*.feature' ],
    exclude: [],
    maxInstances: 5,
    capabilities: [{
        maxInstances: 100,
        browserName: 'chrome',
        port: 4444,
        "goog:chromeOptions": {
            args: ["--disable-web-security", "--headless", "--disable-dev-shm-usage", "--no-sandbox", "--window-size=1920,1080"]
        },
        acceptInsecureCerts: true,
        timeouts: { implicit: 10000, pageLoad: 20000, script: 30000 },
    }],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://the-internet.herokuapp.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    //services: ['chromedriver'],
    // services: [
    //     ['selenium-standalone', {
    //         logPath: './temp',
    //         args: {
    //             seleniumArgs: ['-port', '4444']
    //         },
    //     }]
    // ],
    framework: 'cucumber',
    reporters: ['spec'],

    cucumberOpts: {
        require: ['./test/features/step-definations/*.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    
}
