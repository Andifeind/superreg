const inspect = require('inspect.js')
const SuperReg = require('../')

describe('SuperReg', () => {
  describe('escape()', () => {
    it('escapes special chars in a string', () => {
      const pattern = SuperReg.escape('Hello ${name}')
      inspect(pattern).isEql('Hello \\$\\{name\\}')
    })

    it('escapes special chars in a string, (\\s)', () => {
      const pattern = SuperReg.escape('foo\\s')
      inspect(pattern).isEql('foo\\\\s')
    })
  })
})
