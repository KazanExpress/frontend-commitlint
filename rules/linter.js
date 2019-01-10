const { always, never } = require('./util')

module.exports = {
  'body-leading-blank': always.error(),
  'footer-leading-blank': always.warn(),
  'header-max-length': always.error(100),
  'subject-case': never.error([
    'sentence-case',
    'start-case',
    'pascal-case',
    'upper-case'
  ]),
  'subject-empty': never.error(),
  'subject-full-stop': never.error('.'),
  'type-empty': never.error(),
  'scope-case': always.error('lower-case'),
  'type-case': always.error('sentence-case'),

  'type-enum': always.error([
    'Fix',
    'Feature',
    'Add',
    'Update',
    'Remove'
  ])
}

