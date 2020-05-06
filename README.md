# [infinitylabs.dev](https://www.infinitylabs.dev)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Free to use template for creating a responsive static personal portfolio website. Built entirely using HTML, CSS and just one JavaScript function making it fast, lightweight and compatible across all browsers.


## Features
- **Easy to use**: Everything is given a descriptive name, CSS is split into separate files for modularity and maintainability, comments for added clarity and readability, and the entire landing page is written in less than 160 lines of HTML.
- **Responsive**: Automatically changes layout based on resolution and screen size, and dynamically switches between light and dark theme based on OS setting.
- **Dark theme**: Designed with aesthetics and readability in mind - the gray on gray color scheme is easier on the eyes and better combats black smearing on OLED displays compared to a pure black background.
- **Modern design**: Built with a flat, modern design with smooth opening transitions and animations when hovering over certain elements.
- **Modular**: The `static.css` file contains styling shared across multiple pages allowing all pages to be modified at once. This helps maintain consistency and scaling as the number of pages grows and design changes are made in the future.

## Usage
This repo contains all necessary files except for images which you provide. It is recommended to create a folder named `images` and store all your media there to maintain organization. Each sub-folder is a URL directory that opens to the `index.html` file. For example, the `about` folder would translate to `https://www.infinitylabs.dev/about`.

The CSS styling for the nav bar and footer are located in `static.css` which is used to style elements that are shared across all pages. Any styling that is shared by multiple pages should be done here for maintainability.

To add more images to the `gallery` page, simply open up the `index.html` file and copy and paste the `image_container` div. The CSS styling will automatically arrange all images into a grid.

The `404` page requires styling to be inlined in the .html file, otherwise accessing an invalid subdirectory will not fetch the .css files, only the .html file.

Different browsers will set different default values to HTML elements. The `reset.css` file is used to set all elements to the same value for consistency across browsers. 


## Preview
For a live preview, visit https://infinitylabs.dev

![Main page](https://github.com/arlenegrace/infinitylabs.dev/blob/master/images/site.jpg?raw=true)


## License
This project is open source and available under the [MIT License](LICENSE).
