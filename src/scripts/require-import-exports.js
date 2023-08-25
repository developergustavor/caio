require('../dtos/models/User')
import '../dtos/models/User'

// exportação
const a = "tsakgmanm";
function b() {}
export { a, b };

// importação
import { a, b } from '......'



// exportação default
export default class User {}
const a = 'jkfajsf'
export default a;

// importação default
import User from '....'
import a from '.....'



// module.exports
module.exports = {
  a: 'jfkbakjsf',
  b: () => true
}
const a = 'ajsknbhgsakj'
function b() {}

module.exports = {
  a,
  b
}

const proto = {
  a: 'asfkjbas',
  b: () => {}
}

module.exports = proto

// importação
require('....')