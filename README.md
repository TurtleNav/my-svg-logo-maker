# My-SVG-Logo-Maker
by Luc Tourangeau

[svg-gen-demo.webm](https://github.com/TurtleNav/my-svg-logo-maker/assets/57142468/4e51df1a-189b-4976-b96b-3f6504915798)




![Badge of the GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)

# Table of Contents
1. [Installation Instructions](#Installation-Instructions)

# Installation Instructions
Download this repository in whatever method you desire.
`cd`  into the package and run the command `npm install` within the terminal
which will install the needed dependencies.

# Dependencies
The my-svg-logo-maker package requires version 8.2.4 of Inquirer.
If the user wishes to develop the package further then they should
install jest to run the testing suite.

# Usage Instructions
After installing the dependencies using `npm install`, the user
can run the main entry point file `index.js` with their prefered
version of Node.js: `node index.js`. Note: Node.js needs the full
path to the `index.js` file.

## The Prompts
Once the index.js file is running the user should see a series of
prompts.

### Logo Text
`
Enter the text you wish to place in your logo SVG (max 3 characters long) >>
`

The first prompt asks the user for the text they wish to place in their logo.
The string is validated by its length and any string (including ones with 
whitespace) are valid as long as they are 3 or less characters. The double
quote symbol (") is escaped with &quot since SVG is a form of XML and an
unchecked double quote can break the code.

### Text Color
`
Enter the color the text should be in your logo (hex color code or color name) >>
`

The second prompt asks the user for the color their logo text should be. The two
valid means for specifying color are to provide one of the special 140
(+7 grey/gray ambigiuous spellings) or a valid 6 character long hex color code.

#### Named HTML Colors
my-svg-logo-maker implements every single one of these special colors. Refer to
PUT LINK HERE for more information.

#### Hex Color Codes
If the user has a very specific color code in mind then they can enter any 6
character long hexademical code corresponding to that particular color.

















# Testing

# License
