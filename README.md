# Netizen

This is an HTML webpage with some CSS and JavaScript. The webpage consists of a navigation menu with links to different sections of the webpage such as Home, Projects, About, and Contact. It also includes a brand icon and a title with the my name and role. The webpage features some CSS animation using animate.css library. The "Projects" section includes buttons that lead to external websites and projects created by me, and the "About Me" section includes some text and an image. Lastly, there is a "Contact" section that includes a form for users to fill out and submit to contact the developer.

The CSS code starts with defining some colors using hexadecimal notation for skin, peach, orange, and heavy oj. It then defines a font-face for a font called "pixelfont" using a font file.

The next section defines some styles for the html and body elements. The html element has a font-size of 16 pixels, scroll-behavior set to smooth, and overflow-x set to hidden. The body element has a background that is a linear-gradient with a slightly transparent skin color, followed by a background image of a tiled grid. The margin and padding are set to 0, and the container element has a height of 97% of the viewport height and a width of 98.5% of the viewport width.

The next set of styles defines a title and intro text for the webpage using the "pixelfont" font. The title has a white color and is centered with a peach-colored underline. The intro text has a slightly transparent white color and is centered. There is also a brand icon defined as a circle with an orange background, positioned fixed in the bottom right corner of the webpage. When hovered over, the icon changes to have a peach background.

The following section defines a main menu with a "hamburger" icon consisting of three horizontal bars. When clicked, the icon changes to have one bar slanted to form an "X" and a dropdown menu appears below it with clickable links. The dropdown menu has a circular shape with a background color of orange. The links are black and have a font size of 2.5rem and are centered.

The next section defines styles for project buttons, which are circular buttons with a background color of skin, a border color of orange, and a font size of 4rem. There is also a hover effect defined that changes the background color to orange and increases the border width. There is also a hidden text element that appears when hovering over the Github button.

Finally, there is a section for an About Me text with a title and centered text. The title is similar to the title in the previous section.


The PHP file handle the form submission. It first checks if the form has been submitted with an 'Email' variable using the isset() function. It then sets up the recipient email address and subject for the email.

A function named problem() is defined that displays an error message if there are any errors with the form submission. The expected data such as 'Name', 'Email', and 'Message' are checked to see if they are set. If any of them are not set, the problem() function is called.

The values of 'Name', 'Email', and 'Message' are assigned to variables. Then the variables are checked for any errors using regular expressions. If there are any errors, they are added to an error message string. If the length of the error message string is greater than zero, the problem() function is called.

The clean_string() function is defined that replaces any bad strings with empty strings. The form data is then concatenated to create the email message body.

Finally, the email headers are set up and the email is sent using the mail() function. If the email is sent successfully, a success message is displayed.
