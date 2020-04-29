# [infinitylabs.dev](https://www.infinitylabs.dev)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Free to use template for creating a responsive static personal portfolio website. Built entirely using HTML, CSS and just one JavaScript function, making it fast, lightweight and compatible across all browsers.


## Features
- **Easy to use**: Everything is given a descriptive name, CSS files are split into separate files for readability, and comments for added clarity.
- **Responsive**: Dynamically changes layout based on resolution and screen size.
- **Dark theme**: Automatically switches between light and dark theme based on OS setting.
- **Modern design**: Built with a flat, modern design with smooth animations when hovering over certain elements.


## Usage
This repo contains all necessary files except for images which you provide. It is recommended to create a folder called `images` and store all your media there for organization. Each sub-folder is a URL directory that opens to the `index.html` file. For example, the `about` folder would translate to `https://www.infinitylabs.dev/about`.

The CSS styling for the nav bar and footer are located in `static.css` which is used to style elements that are shared across all pages.

To add more images to the `gallery` page, simply open up the `index.html` file and copy and paste the `image_container` div.

The `404` page requires styling to be inlined in the .html file, otherwise accessing an invalid subdirectory will not fetch the .css files, only the .html file.

## To do

- Clean up duplicate CSS in `layouts.css`.
- Make Social/Contact page.
- Fix one way transitions.
- More themes (requires js).


## Preview
![Main page](https://github.com/arlenegrace/infinitylabs.dev/blob/master/images/site.jpg?raw=true)


## License
This project is open source and available under the [MIT License](LICENSE).
