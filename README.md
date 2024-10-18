# LS Web World Site

Markdown driven Web Site Design

## Contents

This is the basic code for my website. It leverages Markdown files to generate the basic content used on the site. The site is primarily a Bootstrap shell that displays the given markdown page using JQuery.

## Adding Content

New content can be added by including a Markdown file in the __pages__ directory and then adding an entry to the __page-index.json__ file. The Index file is used to create the top level menu and link to the respective files.

## Deploying

To deploy the site, you run the __site-build.sh__ script which will convert the Markdown pages to HTML and place them in a __content__ directory. Next upload the following to the web server:

* content directory
* scripts directory
* css directory
* images directory
* index.html file
* page-index.json file

This will eventually be accomplished through a GitHub Action to deploy the changes automatically.
