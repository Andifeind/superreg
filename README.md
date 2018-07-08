SuperReg
========

Better RegExp support for Javascript

## Usage

SuperReg extends from `RegExp`. It adds a few extra methods.

```js
const reg = new SuperReg(/^[a-z](\d+)/)
const matches = reg.exec('a123')
// matches === [ 'a123', '123' ]
```


## Methods

### *static* escape (*str* pattern) *str*

Escapes all special chars in a string to make it usable as a RegExp.

```js
const pat = SuperReg.escape('Hello ${name}')
// pat === Hello \$\{name\}
```
