---
publishDate: 2023-08-28T00:00:00Z
title: Creating and distributing embedable components in Javascript
excerpt: Learn how to create a component and distribute it. Understand the problems you need to consider when creating a component.
image: /src/assets/images/blog/embedding_review_blog.jpg
category: Tutorials
draft: true
tags:
  - web component
  - shadow DOM
  - embeddable component
  - web development
  - JavaScript
  - HTML
  - CSS
  - Svelte
metadata:
  canonical: https://astrowind.vercel.app/get-started-website-with-astro-tailwind-css
---

## Embedding JavaScript code into no-code platforms

### What are web components?

In Webflow, you can add custom code to your site in several ways. One way is to add the code directly to the page using an Embed element. Here's how:

1. Open the page where you want to add the code in the Designer.
2. Drag an Embed element onto the canvas.
3. Click on the element to open its settings.
4. Paste your JavaScript code into the Code field.
5. Click Save and Close.

You can also add custom code to your site's head or body tag by going to your Project Settings, then the Custom Code tab. Paste your code into the Head Code or Body Code field, then click Save Changes.

### What is the Shadow DOM?

In Netlify, you can add custom JavaScript code to your site by including it in your site's source files. Here's how:

1. Open your site's source files in your code editor.
2. Create a new `.js` file and paste your JavaScript code into it.
3. Save the file and include it in your site's build process.
4. Deploy your site to Netlify.

You can also use Netlify's snippet injection feature to add custom code to your site's head or body tag. Go to your Site Settings, then the Build & Deploy tab, then the Post Processing section. Click Add Snippet and paste your code into the Snippet field. Choose where you want the code to be injected (head or body), then click Save.

### Building your web components

#### Prerequisites

#### Getting started
In WordPress, you can add custom JavaScript code to your site using a plugin or by editing your theme's functions.php file. Here's how:

#### Converting a custom component to a universal component

1. Install and activate a plugin that allows you to add custom code to your site, such as Insert Headers and Footers or Simple Custom CSS and JS.
2. Go to the plugin's settings page and paste your JavaScript code into the appropriate field.
3. Save your changes.

#### script vs Iframe
* https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
* https://stackoverflow.com/questions/73131013/will-my-website-fetch-api-without-cors-error-when-it-is-hosted-on-my-web-server
* https://blog.bitsrc.io/using-iframes-vs-scripts-for-embedding-components-e30eb569cb46
* Iframe 
  * No responsiveness
  * Doesn’t block rendering
  * Relatively less loading time & better SEO support

1. Open your theme's functions.php file in a code editor.
2. Add a new function that outputs your JavaScript code using the `wp_enqueue_script` function.
3. Save your changes.

```html
    <iframe src="/embed.html" 
    height="300" width="300" width="600" height="400" frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in picture" 
    style="padding: 20px;"
    allowfullscreen sandbox="allow-scripts allow-same-origin"></iframe>
```

Make sure to replace `my-custom-js` with the handle for your script, `/js/my-custom.js` with the path to your script file, and `1.0` with the version number of your script.

### General web developers

For general web developers, you can add custom JavaScript code to a website by including it in a `<script>` tag in the HTML file or by linking to an external `.js` file. Here's how:

#### Inline script

1. Open the HTML file where you want to add the code in a code editor.
2. Add a `<script>` tag to the `<head>` or `<body>` section of the file.
3. Paste your JavaScript code between the opening and closing `<script>` tags.
4. Save your changes.

```html
<script>
  // Your JavaScript code here
</script>
```

#### External script

1. Create a new `.js` file and paste your JavaScript code into it.
2. Save the file in the same directory as your HTML file or in a subdirectory.
3. Open the HTML file where you want to add the code in a code editor.
4. Add a `<script>` tag with a `src` attribute that points to the `.js` file to the `<head>` or `<body>` section of the file.
5. Save your changes.

```html
<script src="path/to/your/script.js"></script>
```

Make sure to replace `path/to/your/script.js` with the actual path to your `.js` file.
