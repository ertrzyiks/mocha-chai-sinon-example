const chai = require('chai')
const expect = chai.expect

describe('the expectations', function () {
  context('when expecting from numbers', function () {
    it('shows the equality', function () {
      expect(1).to.equal(1)
    })

    it('fails, numbers are not equal', function () {
      expect(1).to.equal(2)
    })

    it('shows the comparision', function () {
      expect(2).to.be.above(1)
    })

    it('shows the other comparision', function () {
      expect(1).to.be.below(2)
    })

    it('shows one more comparision', function () {
      expect(1).to.be.at.least(1)
    })
  })

  context('when expecting from objects', function () {
    it('fails, because equal compares object references', function () {
      expect({a: 1}).to.equal({a: 1})
    })

    it('passes, because deep equal compares equality of nested objects', function () {
      expect({a: 1}).to.deep.equal({a: 1})
    })

    it('checks just one property', function () {
      expect({a: 1}).to.have.property('a').equal(1)
    })

    it('checks just one property, but its missing', function () {
      expect({a: 1}).to.have.property('b').equal(1)
    })
  })
})
