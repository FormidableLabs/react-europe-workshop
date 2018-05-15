const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');

const session_subdirs = [
  'solution',
  'exercise',
  'exercise-solution',
];

const EXERCISES_ROOT = path.join(__dirname, 'exercises');
const exercises = fs.readdirSync(EXERCISES_ROOT);
shell.cd(EXERCISES_ROOT);

exercises.forEach(dir => {
  session_subdirs.forEach(subdir => {
    const target = path.join(EXERCISES_ROOT, dir, subdir);
    if (fs.existsSync(target)) {
      console.log(
        chalk.yellow(`Installing ${dir}/${subdir}...`),
      );
      shell.cd(target);
      shell.exec('yarn');
      console.log(
        chalk.green(`Finished ${dir}/${subdir}...`),
      );
    }
  });
});
