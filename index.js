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
            type: 'rawlist',
            message: 'what license was this created with',
            choices:[
                "MPL",
                "GPL",
                "Apache",
                "MIT",
                "CC",
                "BSD",
            ],
            name: 'license',
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

    const filename = `${data.project}.md`;

    fs.writeFile(filename, readMeGen(data), (err) =>
        err ? console.log(err) : console.log('ReadMe Has Been Created!')
    );


};

init();

const colorLicense = (type) => {
    let color;
    if (type === "MPL") color = "red";
    if (type === "GPL") color = "gray";
    if (type === "Apache") color = "green";
    if (type === "MIT") color = "blue";
    if (type === "CC") color = "orange";
    if (type === "BSD") color = "goldenrod";
  
    return (
      `<img src="https://img.shields.io/badge/license-${type}-${color}" alt="badge-${type}" />`
    );
  };


const readMeGen = data => {
    return `# ${data.project}

   
${colorLicense(data.license)}

## Description 
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation 
${data.installation}

## Usage 
${data.usage}

## License 
This project is licensed under ${data.license}

## Contribution 
${data.contribution}

## Tests
${data.testing}

## Questions
For additional questions please email me at ${data.email}. To view more projects created by me, you can visit https://github.com/${data.github}.
  
    `;
  }








                               // T E S T I N G . . . 