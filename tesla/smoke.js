describe('Smoke monitoring on tesla.com', () => {

before(() => {
  if (process.env.PT_AUDIT == 'allow') {
    browser.enablePerformanceAudits({
      networkThrottling: 'online'
    })
  }
})

  describe('HomePage', () => {
    it('inject hero element measurement', function () {

      // configuration
      const configuration = {
        patterns: [{
          urlPattern: 'https://www.tesla.com*',
          resourceType: 'Document',
          requestStage: 'Response'
        }]
      }
    
      // rules
      const rules = [
        ['<head>', '<script>performance.mark(\'HE-start-head\')</script>\n<head>'],
        ['</head>', '<head>\n<script>performance.mark(\'HE-stop-head\')</script>'],
        ['<body', '<script>performance.mark(\'HE-start-body\')</script><body'],
        ['</body>', '</body>\n<script>performance.mark(\'HE-stop-body\')</script>'],
        ['<dialog id="locale-modal"', '<script>performance.mark(\'HE-start-dialog\')</script>\n<dialog id="locale-modal"'],
        ['</dialog>', '<script>performance.mark(\'HE-stop-dialog\')</script>\n</dialog>'],
      ]
    
      browser.InjectHeroElements(configuration, rules)
    
    });

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