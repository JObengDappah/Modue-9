// Function to render the license badge
function renderLicenseBadge(license) {
    if (license) {
      // You can create an object that maps the license names to their respective badge URLs.
      const licenseBadges = {
        MIT: 'https://img.shields.io/badge/License-MIT-yellow.svg',
        'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
        // Add badges for other licenses here
      };
      return `[![License](${licenseBadges[license]})](${renderLicenseLink(license)})`;
    }
    return '';
  }
  
  // Function to render the license link
  function renderLicenseLink(license) {
    if (license) {
      // You can provide the URL where the full license text can be found.
      const licenseLinks = {
        MIT: 'https://opensource.org/licenses/MIT',
        'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
        // Add links for other licenses here
      };
      return licenseLinks[license];
    }
    return '';
  }
  
  // Function to render the license section of README
  function renderLicenseSection(license) {
    if (license) {
      return `## License
  This application is covered under the [${license} license](${renderLicenseLink(license)}).
  `;
    }
    return '';
  }
  
  // Function to generate markdown for README
  function generateMarkdown(data) {
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseSection = renderLicenseSection(data.license);
  
    return `# ${data.title}
  
  ${licenseBadge}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  ${licenseSection}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${licenseSection}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For additional questions, please contact [${data.name}](https://github.com/${data.name}) at ${data.email}.
  `;
  }
  
  module.exports = generateMarkdown;
  