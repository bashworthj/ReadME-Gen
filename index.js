const { prompt } = require('inquirer');
const fs = require('fs');

const init = async () => {

    const data = await prompt([
        {
            type: 'input',
            message: 'What is your projects name?',
            name: 'project',
        },
        {
            type: 'input',
            message: 'Please give a brief description of your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please add any additional direction for installation of your project',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please add any additional direction for usage of your project',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'How can others contribute to your project?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'How can others test your project',
            name: 'testing',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email',
            name: 'email',
        },

    ])

    const filename = 'myread.md';

    fs.writeFile(filename, JSON.stringify(data, null, 2), (err) =>
        err ? console.log(err) : console.log('Success!')
    );


};

init();





