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

const pattern = /^(\w+)(\s+\#\d+)?(\!)?\s+([\w.].*?): (.*)/i;

let finalMsg;

// If the message was not lightly-formatted - forward it to commitlint
if (!pattern.test(msg)) {
  finalMsg = msg;
} else {
  const matched = msg.match(pattern) || [];

  const type = matched[1] || '';
  const breaking = matched[2] || '';
  const issue = matched[3] || '';
  const scope = matched[4] || '';
  const subject = matched[5] || '';

  finalMsg = (type ? type[0].toUpperCase() + type.substr(1) : '') + `${issue.trim()} [${scope}]${breaking}: ${subject}`;

  writeFileSync(gitMessage, finalMsg)
}

console.log(finalMsg);
