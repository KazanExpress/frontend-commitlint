module.exports = {
  parserOpts: {
    headerPattern: /^(\w+) (?:(#\d+)(!)? )?(?:(\[.*?\]) )?(?:([^\[\]]*?)(?: - (.*)|:?))$/,
    headerCorrespondence: ['type', 'ticket', 'breaking', 'scope', 'subject', 'description'],
    issuePrefixes: ['#']
  }
};
