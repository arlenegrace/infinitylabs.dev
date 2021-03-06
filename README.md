# [infinitylabs.dev](https://www.infinitylabs.dev)

[![Netlify Status](https://api.netlify.com/api/v1/badges/73fd9ee6-96b3-4e11-b456-dd51b582f9d2/deploy-status)](https://www.infinitylabs.dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![Repo size](https://img.shields.io/github/repo-size/arlenegrace/infinitylabs.dev)](https://github.com/arlenegrace/infinitylabs.dev)

Source code for https://infinitylabs.dev. Free to use for creating responsive static personal portfolio websites. Built entirely using HTML, CSS and just two JavaScript functions, making it fast, lightweight and compatible across nearly all browsers.


## Features
- **Easy to use**: Everything is given a descriptive name, CSS is split into separate files for maintainability and reusability, comments for added clarity and readability, and the entire landing page is written in less than 160 lines of HTML.
- **Responsive**: Automatically changes layout based on resolution and screen size, and dynamically switches between light and dark theme based on OS setting.
- **Dark theme**: Designed with aesthetics and readability in mind - the gray on gray color scheme is easier on the eyes and better combats black smearing on OLED displays compared to a pure black background.
- **Modular**: The `static.css` file contains styling shared across multiple pages (header and footer) allowing all pages to be modified at once. This helps maintain consistency and scaling as the number of pages grows and design changes are made in the future.
- **UI/UX**: Featuring a modern design with smooth opening transitions and animations when hovering over certain elements, without compromising the user experience. The header logo collapses into a horizontal flexbox to reduce vertical space usage, especially important on phones with limited screen real estate. Links and buttons are also positioned for better one handed usability on mobile layouts, and titles and images are interactable when relevant.


## Usage
This repo contains all necessary files except for images which you provide. It is recommended to create a folder named `images` and store all your media there to maintain organization. Each sub-folder is a URL directory that opens to the `index.html` file. For example, the `about` folder would translate to `https://www.infinitylabs.dev/about/`.

The CSS styling for the header and footer are located in `static.css` which is used to style elements that are shared across all pages. Any styling that is shared by multiple pages should be done here for maintainability.

To add more images to the `gallery` page, simply open up the `index.html` file and add more `img` elements. The CSS styling will automatically arrange all images into a grid.

The `404` page requires styling to be inlined in the head of the .html file because accessing an invalid subdirectory will not fetch the required .css files, only the .html file.

Different browsers will set different default values to HTML elements. The `reset.css` file is used to set all elements to the same value for consistency across browsers. Be sure to include it in new .html files.

Browsers that do not support the `@media and (prefers-color-scheme)` query (e.g. pre-iOS 13's Safari browser) will not pick the light theme by default, resulting in no theming for your webpage. To resolve this issue, the `prefers-color-scheme` query for dark theme has been removed, setting it as the default theme. If the browser does support the `prefers-color-scheme` query and the user is using light theme, it will override the default dark theme as long as the light theme is below the dark theme. HTML prioritizes CSS rules in order of declaration which makes it important that you include your CSS files in the correct order in the head of your HTML files.

It is recommended that you merge all the external CSS files into one single file before deploying to your web server to reduce the number of HTTP requests to speed up page load times. Some hosts will do this automatically, giving you the benefit of modularity and maintainability without any of the performance drawbacks. Additionally, you may want to run all your CSS files through Autoprefixer to add vendor prefixes to relevant CSS properties and media queries to support older browsers. They are generally omitted from the code base to maintain readability as you can automate this process.


## Preview
For a live preview, visit https://infinitylabs.dev. Be sure to change your system theme to switch between light and dark mode.


## License
This project is open source and available under the [MIT License](LICENSE).
