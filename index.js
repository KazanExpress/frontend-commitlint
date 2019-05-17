const { readFileSync } = require('fs');

let gitMessage;

if ('HUSKY_GIT_PARAMS' in process.env) {
  gitMessage = process.env.HUSKY_GIT_PARAMS;
} else if ('GIT_PARAMS' in process.env) {
  gitMessage = process.env.GIT_PARAMS;
} else {
  gitMessage = './.git/COMMIT_EDITMSG';
}

console.log(readFileSync(gitMessage).toString());
