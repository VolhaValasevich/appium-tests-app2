describe('App2 ', () => {

    beforeAll(() => {
        browser.timeouts('implicit', 10000);
        browser.click('#sign_in');
        browser.element('#username').setValue('testautomationuser');
        browser.element('#password').setValue('testautomation');
        browser.back();
        browser.click('#sign_in');
    });

    it('should have a greeting', () => {
        expect(browser.getText('#engagement_title')).toEqual('Добро пожаловать в ProtonMail!');
    });

    it('should have a close button', () => {
        expect(browser.getText('#button_close')).toEqual('ЗАКРЫТЬ ТУР');
    });

    describe("Inbox ", () => {

        beforeAll(() => {
            browser.click('#button_close');
        });

        it('should have title', () => {
            const selector = 'new UiSelector().text("ВХОДЯЩИЕ")';
            const title = browser.element('android=' + selector);
            expect(title.value).not.toEqual(null, `${title.message} [${title.selector}]`);
        });

        it('should open settings', () => {
            browser.click('~Открыть');
            const selector = 'new UiSelector().text("Настройки")';
            browser.click('android=' + selector);
            const title = browser.element('android=' + selector);
            expect(title.value).not.toEqual(null, `${title.message} [${title.selector}]`);
            browser.back();
        });

        it('should search for messages', () => {
            browser.click('#search');
            browser.element('#search_src_text').setValue('Welcome\n');
            expect(browser.getText('#message_title')).toContain('Welcome');
        });

    });

});