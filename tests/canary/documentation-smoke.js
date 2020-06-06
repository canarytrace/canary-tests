const title = 'canarytrace-documentation/README.md at master · canarytrace/canarytrace-documentation'

describe('Canarytrace documentation smoke', () => {
  describe('HomePage', () => {
      it('open', () => {
        browser.url('/canarytrace/canarytrace-documentation/blob/master/README.md')
        const titleElm = $(`//title[contains(text(),"${title}")]`)
        browser.waitForloadEventEnd()
        expect(titleElm.waitForExist(undefined, false, "Element title not found. The page couldn't be loaded in time.")).to.be.true
      });
  });
})
