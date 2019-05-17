module.exports = {
  parserOpts: {
    headerPattern: /^(\w+) (?:(#\d+) )?(?:(\[.*?\]) )?(?:(.*?)(?: - (.*)|:?))$/,
    headerCorrespondence: ['type', 'ticket', 'scope', 'subject', 'description'],
    issuePrefixes: ['#']
  }
};
