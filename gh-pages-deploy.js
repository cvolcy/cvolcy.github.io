/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-extraneous-dependencies
import { execa } from 'execa';
import fs from 'fs';

(async () => {
  try {
    const currentBranch = (await execa('git', ['branch', '--show-current'])).stdout;
    await execa('git', ['checkout', '--orphan', 'gh-pages']);

    console.log('Building started...');
    await execa('bun', ['run', 'build']);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync('dist') ? 'dist' : 'build';
    await execa('git', ['--work-tree', folderName, 'add', '--all']);
    await execa('git', ['--work-tree', folderName, 'commit', '-m', 'gh-pages']);

    console.log('Pushing to gh-pages...');
    await execa('git', ['push', 'origin', 'HEAD:gh-pages', '--force']);
    await execa('rm', ['-r', folderName]);
    await execa('git', ['checkout', '-f', currentBranch]);
    await execa('git', ['branch', '-D', 'gh-pages']);

    console.log('Successfully deployed, check your settings');
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();
