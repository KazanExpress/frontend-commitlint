module.exports = {
  parserOpts: {
    headerPattern: /^(\w+)(?: (#\d+))?(!)? (?:\[(.*?)\] )?(?:([^\[\]]*?)(?: - (\X*)|:?))$/,
    headerCorrespondence: ['type', 'ticket', 'breaking', 'scope', 'subject', 'description'],
    issuePrefixes: ['#']
  }
};
