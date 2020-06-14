const title = 'Ifortuna.cz | Fortuna Game'

describe('Fortuna Prematch', () => {
  before(() => {
    if (process.env.PT_AUDIT == 'allow') {
      browser.enablePerformanceAudits()
    }
  })

  describe('HomePage', () => {
      it('open', () => {
        browser.CoverageStart()
        browser.url('/')
        const titleElm = $(`//title[contains(text(),"${title}")]`)
        browser.waitForloadEventEnd()
        expect(titleElm.waitForExist({timeoutMsg: "Element title not found. The page couldn't be loaded in time."})).to.be.true
        browser.TakeCoverage('fortuna')
        browser.EvaluatePerformanceAudit()
      });
  });

  describe('Premach', () => {
      it('open', () => {
        const elmPrematch = $('//a[@href="/sazeni"][contains(string(),"Sporty")]')
        elmPrematch.click()

        const prematchTitleElm = $('//title[contains(text(),"Kurzové sázení online | Fortuna")]')
        browser.waitForloadEventEnd()
        expect(prematchTitleElm.waitForExist({timeoutMsg: "Element title not found. The page couldn't be loaded in time."})).to.be.true
        browser.EvaluatePerformanceAudit()
      });
  });

  after(() => {
    if (process.env.PT_AUDIT == 'allow') {
      browser.disablePerformanceAudits()
    }
  })
})
