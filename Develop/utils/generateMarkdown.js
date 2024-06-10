// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licensetype) {
  let license = ''

  if(licensetype != "None"){
    license = "![License Badge](https://img.shields.io/badge/license-" + licensetype + "-green.svg)"
  }
  return license;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let (licenselink);
  switch(license) {
  case "MIT":
    licenselink = "https://www.apache.org/licenses/LICENSE-2.0.html";
    break;
  case "Apache 2.0":
    licenselink = "https://www.apache.org/licenses/LICENSE-2.0.html";
    break;
  case "BSD 2":
    licenselink = "https://opensource.org/licenses/BSD-2-Clause";
    break;
  default:
    licenselink = "";
    break;
}
return licenselink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "None") {
    return `## License\n
    This project is licensed under the ${license} license.`
  }else {
    return " ";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
