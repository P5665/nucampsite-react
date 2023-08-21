/*
    For only this code gets used as a copy paste job and nowhere else
    1.  Create index.js in directory you want to create export statement
    2.  cd into directory
    3.  Copy and paste this code.  Will have to remove any existing exports or copy out locally in a temp file anything you want to leave unchanged
    4.  node index.js    terminal command

*/

const fs = require('fs');

const files = fs.readdirSync(__dirname).filter((file) => file !== 'index.js');

const exportStatements = files.map((file) => {
	const componentName = file.split('.')[0];
	return `export { default as ${componentName} } from './${componentName}';`;
});

const indexContent = exportStatements.join('\n') + '\n';

fs.writeFileSync('index.js', indexContent);

console.log('index.js file generated successfully.');
