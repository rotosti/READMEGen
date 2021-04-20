const today = new Date();
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    switch (license) {
      case 'Apache License 2.0':
          return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'MIT License':
          return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Mozilla Public License 2.0':
          return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      default:
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    switch (license) {
      case 'Apache License 2.0':
          return '[Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)';
      case 'MIT License':
          return '[MIT License](https://www.mit.edu/~amini/LICENSE.md)';
      case 'Mozilla Public License 2.0':
          return '[Mozilla Public License 2.0](https://mozilla.org/MPL/2.0/)';
      default:
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 

  switch (license) {
    case 'Apache License 2.0':
        return `Copyright ${today.getFullYear()}

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
     
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.
        
        You may obtain a copy of the License at:`;
    case 'MIT License':
        return `Copyright ${today.getFullYear()}

        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        
        `;
    case 'Mozilla Public License 2.0':
        return `This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at:`;
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.licenseChoice)}

  ## Description

  ${data.projectDescription}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  Run the following command:

  \`\`\`bash
  ${data.installInstructions}
  \`\`\`

  ## Usage

  ${data.usageInformation}

  ## License

  ${renderLicenseSection(data.licenseChoice)}
  ${renderLicenseLink(data.licenseChoice)}

  ## Contributing

  ${data.contributingData}

  ## Tests

  \`\`\`bash
  ${data.testCommand}
  \`\`\`

  ## Questions

  If you have any questions, comments, concerns, or bug related discoveries,
  you can contact me directly at ${data.userEmail}.  You can also go to my
  [Github](https://github.com/${data.userName}) to view additional repositories.
`;
}

module.exports = {
  generateMarkdown
}
