---
title: Embedding Widget  into Your Website
description: Learn more about my project in this docs site built with Starlight.
---

**Introduction:**
Thank you for choosing [Your Product Name] to showcase your reviews! This guide will walk you through the process of embedding the widget into your HTML webpage.

**Prerequisites:**
Before you begin, make sure you have:
- Set up review collection and importing options on reputebee.com.
- Followed the instructions in the "Creating a Widget with [Your Widget Name]" document.

**Step 1: Accessing Your Widget Code:**
1. Log in to your reputebee.com account.
2. Navigate to the [Your Widget Name] section in the dashboard.

**Step 2: Selecting Your Widget:**
1. Identify the widget you want to embed from the list.
2. Click on the widget name to access the settings.

**Step 3: Generating the Embed Code:**
1. In the widget settings, locate the "Embed Code" or "Get Code" option.
2. Click on it to generate the code for your selected widget.
3. A snippet of HTML code will be displayed. This is the code you'll need to embed on your website.

**Step 4: Copying the Code:**
1. Highlight the entire code snippet.
2. Right-click and choose "Copy" or use the keyboard shortcut (Ctrl+C on Windows, Command+C on Mac).

**Step 5: Embedding the Widget into Your HTML Page:**
Now, let's integrate the code into your website, adding a new section for reviews/testimonials. Follow these steps:

1. Open the HTML file of the webpage where you want to embed the widget using a text editor of your choice or your website's content management system.

2. Find the section of the HTML where you want the widget to appear. In this example, let's say you want to add it after the "Features and Benefits" section.

3. Paste the copied code into the desired location within the HTML file. Probably it will be in the place where \<\!-- Your widget code goes here --\> is in the div with id="reputebee-widget-container".

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
   ```

4. Save the changes to your HTML file.

**Step 6: Preview and Confirm:**
1. Open your webpage in a browser to preview the changes.
2. Ensure that the widget is displaying correctly and that reviews are visible.

Congratulations! You've successfully embedded the [Your Widget Name] widget into your website. If you encounter any issues or have questions, refer to our support documentation or reach out to our customer support team at [Your Support Email].

Thank you for choosing Reputebee!


Absolutely! Let's modify Step 5 to include a sample HTML structure where the user can integrate the widget code into an existing webpage with sections like hero, features, and benefits.

---