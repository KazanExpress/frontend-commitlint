const { readFileSync, writeFileSync } = require('fs');

let gitMessage;

if ('HUSKY_GIT_PARAMS' in process.env) {
  gitMessage = process.env.HUSKY_GIT_PARAMS;
} else if ('GIT_PARAMS' in process.env) {
  gitMessage = process.env.GIT_PARAMS;
} else {
  gitMessage = './.git/COMMIT_EDITMSG';
}

const msg = readFileSync(gitMessage).toString();

const pattern = /^(\w+)(\s+\#\d+)?(\!*)\s*([\w.].*?)?: (.*)/i;

let finalMsg;

// If the message was not lightly-formatted - forward it to commitlint
if (!pattern.test(msg)) {
  finalMsg = msg;
} else {
  const matched = msg.match(pattern) || [];

  const type = matched[1] ? matched[1].trim() : '';
  const issue = matched[2] ? ' ' + matched[2].trim() + ' ' : '';
  const breaking = matched[3] ? matched[3].trim() : '';
  const scope = matched[4] ? `[${matched[4].trim()}]` : '';
  const subject = matched[5] || '';

  finalMsg = (type ? type[0].toUpperCase() + type.substr(1) : '') + issue + scope + `${breaking}: ${subject}`;

  writeFileSync(gitMessage, finalMsg)
}

console.log(finalMsg);
