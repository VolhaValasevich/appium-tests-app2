describe('App2 ', () => {

    it('should login', () => {
        browser.timeouts('implicit', 10000);
        browser.click('#sign_in');
        browser.element('#username').setValue('testautomationuser');
        browser.element('#password').setValue('testautomation');
        browser.back();
        browser.click('#sign_in');
        expect(browser.isExisting('#engagement_title')).toEqual(true, 'No greeting message found');
    });

});