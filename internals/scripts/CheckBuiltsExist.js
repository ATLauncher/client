import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

function CheckBuildsExist() {
    const mainPath = path.join(__dirname, '..', '..', 'src', 'main', 'main.prod.js');
    const rendererPath = path.join(__dirname, '..', '..', 'src', 'renderer', 'dist', 'renderer.prod.js');

    if (!fs.existsSync(mainPath)) {
        throw new Error(
            chalk.whiteBright.bgRed.bold('The main process is not built yet. Build it by running "yarn build:main"'),
        );
    }

    if (!fs.existsSync(rendererPath)) {
        throw new Error(
            chalk.whiteBright.bgRed.bold(
                'The renderer process is not built yet. Build it by running "yarn build:renderer"',
            ),
        );
    }
}

CheckBuildsExist();
