describe('Smoke monitoring on tesla.com', () => {

before(() => {
  if (process.env.PT_AUDIT == 'allow') {
    browser.enablePerformanceAudits({
      networkThrottling: 'online'
    })
  }
})

  describe('HomePage', () => {
      it('open', () => {
        browser.CoverageStart()
        browser.url('https://www.tesla.com/')
        const title = 'Electric Cars, Solar & Clean Energy | Tesla'
        const titleElm = $(`//title[contains(text(),"${title}")]`)
        browser.waitForloadEventEnd()
        browser.EvaluatePerformanceAudit()
        expect(titleElm.waitForExist({timeoutMsg: "Element title not found. The page couldn't be loaded in time."})).to.be.true
        browser.TakeCoverage('tesla')
      });
  });
})