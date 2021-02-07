import commander from 'commander';

import { addSendFtpCommand } from './ftpCommand';

let uploadSuccess: number = 0;

addSendFtpCommand((result) => {
  process.exit(result ? 0 : 1);
});

commander.parse(process.argv);
