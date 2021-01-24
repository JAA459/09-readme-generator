const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your Project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a description of your Project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your application?'

    },
    {
       type: 'input',
       name: 'usage',
       message: 'Please list any usage information for the product', 
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please list any contributors of this project', 
     },
     {
        type: 'input',
        name: 'test',
        message: 'Please enter any test instructions', 
     },
     {
        type: 'checkbox',
        name: 'License',
        message: 'Please select the license', 
        choices: ['Apache', 'Boost Software License 1.0', 'The MIT License', 'GNU GPL v3'],
     },
     {
        type: 'input',
        name: 'user',
        message: 'What is your GitHub username?',
     },
     {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?',
     },
  ])
  .then((data) => {
    const userChoices = [{
      name: "Apache 2.0 License",
      badge: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      info: "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
    },{
      name: "Boost Software License 1.0",
      badge: "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
      info: "A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
    }, {
      name: "The MIT License",
      badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      info: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
    },{
      name:"GNU GPL v3",
      badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      info: "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.",
    }];

    if (data.License.toString() === 'Apache') {
      var badge = userChoices[0].badge;
      var info = userChoices[0].info;
      var licenseName = userChoices[0].name;
    }else if (data.License.toString() === 'Boost Software License 1.0') {
      var badge = userChoices[1].badge;
      var info = userChoices[1].info;
      var licenseName = userChoices[1].name;
    }else if (data.License.toString() === 'The MIT License') {
      var badge = userChoices[2].badge;
      var info = userChoices[2].info;
      var licenseName = userChoices[2].name;
    }else {
      var badge = userChoices[3].badge;
      var info = userChoices[3].info;
      var licenseName = userChoices[3].name;
    };
      const readme =
  `${badge}
    
  # ${data.title} #


  ## Description ##
  ${data.description}
      
      
  #### Table of contents ####
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
      
      
  ### Installation ###
  ${data.installation}
      
      
  ### Usage ###
  ${data.usage}
      
      
  ### Credits ###
  ${data.contributors}
      
      
  ### Test ###
  ${data.test}

  ### Licenses ###
  ${licenseName}
  ${info}
  ### Questions ###
  For further questions you can contact me at:</br>
  GitHub: [${data.user}](https://github.com/${data.user}) </br>
  Email: [${data.Email}](${data.Email})
  
    `

		

    fs.writeFile('README.md', readme, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });