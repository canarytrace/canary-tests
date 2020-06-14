const title = 'canarytrace-documentation/README.md at master · canarytrace/canarytrace-documentation'

describe('Canarytrace documentation smoke', () => {
  before(() => {
    if (process.env.PT_AUDIT == 'allow') {
      browser.enablePerformanceAudits()
    }
  })
  describe('HomePage', () => {
      it('open', () => {
        browser.CoverageStart()
        browser.url('/canarytrace/canarytrace-documentation/blob/master/README.md')
        const titleElm = $(`//title[contains(text(),"${title}")]`)
        browser.waitForloadEventEnd()
        expect(titleElm.waitForExist({timeoutMsg: "Element title not found. The page couldn't be loaded in time."})).to.be.true
        browser.TakeCoverage('github')
        browser.EvaluatePerformanceAudit()
      });
  });
})
