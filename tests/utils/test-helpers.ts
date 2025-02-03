import { Before, After, setWorldConstructor, IWorld } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

// Define Custom World with required properties
interface CustomWorld extends IWorld {
    browser: Browser;
    page: Page;
}

class CustomWorldImpl implements CustomWorld {
    [key: string]: any; // Index signature to allow extra properties

    browser!: Browser;
    page!: Page;

    // Required properties from IWorld
    attach: IWorld['attach'];
    log: IWorld['log'];
    parameters: IWorld['parameters'];
    link: IWorld['link'];

    constructor(options: { attach: IWorld['attach']; log: IWorld['log']; parameters: IWorld['parameters']; link: IWorld['link'] }) {
        this.attach = options.attach;
        this.log = options.log;
        this.parameters = options.parameters;
        this.link = options.link;
    }

    async launchBrowser() {
        this.browser = await chromium.launch({ headless: true });
        this.page = await this.browser.newPage();
    }
}

// Register Custom World
setWorldConstructor(CustomWorldImpl);

// Before hook to launch the browser before each scenario
Before(async function (this: CustomWorld) {
    await this.launchBrowser();
});

// After hook to close the browser after each scenario
After(async function (this: CustomWorld) {
    await this.browser.close();
});

export { CustomWorld };
