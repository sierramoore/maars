# maars
Restaurant POS system - school project

# Project Structure
[images]   - a folder of a picture of an empty table and an occupied table
index.html - default page, redirects to login page
login.html - employee login page username= maars, password= password
table.html - 10 tables with onclick occupied image and timer
menu.html  - a list of 20 items, with description, price, quanity selectors, sidebar, side cart, slideshow
checkout.html - lists items, prices, quantity, credit card and cash options

# Login
Basic Idea- Create a login form with a specified username and password with a pop up window if username and/or password is incorrect.
and a background image.
html-
Simple input fields for username and password inside a form tag.
js-
function checks the name attribute for the specified value of username "maars" and password "password" if both statements are true then on click of the login button it will direct you to the table page, if not then a window alert will say "Incorrect Password and Username"

# Table
Basic Idea- Create 10 tables, 5 tables of 2 and 5 tables of 4.(although can't tell which is which) Wanted to show explicitly if a table was empty or taken so i toggled a simple image of an empty table and a free table on click on the button. On click of the "Seat Table" button, the timer will start and once it hits 60:00 minutes it will begin flashing red to indicate the customers time for thier table is up. Also the "Seat Table" button becomes red and the text on the button becomes "Free Up Table" and on the second click of the button it will toggle back to the previous empty table image and silver "Seat Table" button, the timer will also be reset to 00:00. 

html- Used a <header> to style and display Maars Seating bar across screen. The <dl> (decriptive list) to place the link in the <dd> (decriptive data) one level down and place in right corner.
Placed tables in <li> list tags to appear side by side.
The inputs onclick attribute toggles the table image from empty table picture to occupied table image.

js- (let are local var in js)
function formatTimeXX(t) says if the time is less than 10 seconds display and extra 0 to look like 00:00 instead of 0:0

function updateTableTimerView 
 let min - declares time in seconds are 60 for one minute before restarting back at 0. Math.floor makes seconds into non integers not floating point numbers
 let sec - declares the time in seconds = the modulos of 60
 let timer - displays min with : then seconds
 if timeInSec = 0 the reset timer style to normal else if timeInSec = 3600 (1 hour) flash red
 
 -The rest have comments by the functions-
 
# Menu
Basic Idea- Have a slideshow, and a header with restaurant name and a link to go to seating and a checkout button to take user to the checkout page. There are 20 items each with a picture, title of food, description of food, price, a qty selector, and an "add" button.

The quantity is automatically at 1 for convenience to quickly press add for that item as it is often common to add only 1 of an item when buying food. There is a drop down arrow for qty 1-10, there is no limit to how much you can add of an item. On each click of the “Add” button next to the item it will add 1 to cart by default.
There is a side navigation that follows your scroll for Appetizers, Main Course, Desserts, and Drinks to quickly navigate through the items.
There is a side cart that follows your scroll with any items you added to cart. Also there are “Clear Cart” and “Checkout” buttons below it to quickly clear the order, or do a fast checkout. 
*If you keeping clicking “Add” for the same item it will display in the side cart under the same item and the qty will go up by 1 on each click.
There is also another big “Checkout” button on the very bottom of the menu.


Basic tables with table data.
*slideshow made automatic by Resham

js-
function extractTableData(table)

function checkout()

# Checkout 
Basic table to display Product, name, price, qty
Another table to display Totals etc..
*Max credit card and CVV numbers made by using pattern attribute done by annalise

Inside the body an onload attribute to utilize the displayCart function displays any items added to cart using sessionStorage.


 
