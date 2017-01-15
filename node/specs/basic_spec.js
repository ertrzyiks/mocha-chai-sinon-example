
describe('synchronous', function () {
  it('passes', function () {

  })

  it('fails', function () {
    throw new Error('I dont like this test')
  })
})

describe('asynchronous', function () {
  it('passes, but later', function (done) {
    setTimeout(function () {
      done()
    }, 100)
  })

  it('passes by the promise', function () {
    return new Promise(function (resolve) {
      resolve(1)
    })
  })

  it('fails, but later', function (done) {
    setTimeout(function () {
      throw new Error('I dont like this test')
      done()
    }, 100)
  })

  it('fails, but later and by passing an error object to the callback', function (done) {
    setTimeout(function () {
      done(new Error('I dont like this test'))
    }, 100)
  })

  it('passes by the promise', function () {
    return new Promise(function (resolve) {
      resolve(1)
    })
  })

  it('fails by the promise', function () {
    return new Promise(function (resolve, reject) {
      reject(new Error('I dont like this test'))
    })
  })
})
