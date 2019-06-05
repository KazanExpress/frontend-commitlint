const { always, never } = require('./util')

module.exports = {
  'body-leading-blank': always.error(),
  'footer-leading-blank': always.warn(),
  'header-max-length': always.error(100),
  'subject-case': never.error([]),
  'subject-empty': never.error(),
  'subject-full-stop': never.error('.'),
  'type-empty': never.error(),
  'scope-case': never.error([]),
  'type-case': always.error('sentence-case'),

  'type-enum': always.error([
    'Fix',
    'Feature',
    'Add',
    'Update',
    'Chore',
    'Refactor',
    'Content',
    'Revert',
    'Docs',
    'Remove'
  ])
}

