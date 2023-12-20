---
title: Embedding Widget into Your Website
description: Learn more about Embedding Widget into Your Website
---

## Introduction:
Welcome to ReputeBee! We appreciate your choice to showcase your reviews with us. This guide is designed to make embedding the widget into your HTML webpage a seamless experience.

## Prerequisites:
Before we begin, make sure you've completed the following:
- Set up review collection and importing options on reputebee.com.
- Followed the instructions in our "Creating a Widget with [Your Widget Name]" document.

## Step 1: Accessing Your Widget Code:
1. Log in to your reputebee.com account.
2. Navigate to the [Your Widget Name] section in the dashboard.

## Step 2: Selecting Your Widget:
1. Identify the widget you want to embed from the list.
2. Click on the embed button on the widget which you would like to embed into your website.
3. Note, if you have not published the widget then the button will be called publish instead of embed. So click on it to publish the widget first.
4.  If you haven't created the widget yet, follow our widget creation guide: [Create a new widget in ReputeBee](/docs/widgets/new-testimonials-widget/).

## Step 3: Generating the Embed Code:
1. In the dialog Embed in my Webpage settings, look for the "I can add the code snippet to my webpage" option.
2. Click on it to show the code for your selected widget.
3. A snippet of HTML code will be displayed – this is the code you'll need to embed on your website.

## Step 4: Copying the Code:
1. Highlight the entire code snippet.
2. Right-click and choose "Copy" or use the keyboard shortcut (Ctrl+C on Windows, Command+C on Mac).

## Step 5: Embedding the Widget into Your HTML Page:
Now, let's seamlessly integrate the code into your website, adding a new section for reviews/testimonials. Follow these steps:

1. Open the HTML file of the webpage where you want to embed the widget using your preferred text editor or website's content management system.

2. Locate the section of the HTML where you want the widget to appear – for example, after the "Features and Benefits" section.

3. Paste the copied code into the desired location within the HTML file, likely where \<\!-- Your widget code goes here --\> is in the div with id="reputebee-widget-container".

   Example:
   ```html
   <!-- Your existing HTML structure -->

   <!-- Hero Section -->
   <section id="hero">
      <!-- Your hero section content goes here -->
   </section>

   <!-- Features and Benefits Section -->
   <section id="features-and-benefits">
      <!-- Your features and benefits content goes here -->
   </section>

   <!-- Reviews/Testimonials Section -->
   <section id="reviews">
      <h2>What Our Customers Say</h2>
      <!-- Paste the [Your Widget Name] code here -->
      <div id="reputebee-widget-container">
         <!-- Your widget code goes here -->
      </div>
   </section>
   <!-- Other Sections... -->
   <!-- Footer Section -->
   <section id="footer">
      <!-- Your footer content goes here -->
   </section>


4. Save the changes to your HTML file.

## Step 6: Preview and Confirm:
1. Open your webpage in a browser to preview the changes.
2. Ensure that the widget is displaying correctly and that reviews are visible.

Congratulations! You've successfully embedded the [Your Widget Name] widget into your website. If you encounter any issues or have questions, refer to our support documentation or reach out to our customer support team.

Thank you for choosing Reputebee! 🌟
---