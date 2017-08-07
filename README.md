# maars
Restaurant POS system - school project

# Project Structure
[images]   - a folder of a picture of an empty table and an occupied table
index.html - default page, redirects to login page
login.html - employee login page username= maars, password= password
table.html - 10 tables with onclick occupied image and timer
menu.html  - a list of 20 items, with description, price, quanity selectors, sidebar, slideshow
checkout.html - lists items, prices, quantity, credit card or cash options

# Login
html-
Simple input fields for username and password inside a form tag.
js-
function checks the name attribute for the its specified value of username "maars" and password "password" if both statements are true then onclick of the login button it will direct you to the table page if not a window alert will open "Incorrect Password and Username"

# Table
html-
Used a <header> to style and display Maars Seating bar across screen. The <dl> (decriptive list) to place the link in the <dd> (decriptive data) one level down and place in right corner.
Placed tables in <li> list tags to appear side by side and used <div> to specify a class for styles, images and size.
The onclick attribute toggles the table image from empty table picture to occupied table image.

js- (let are local var in js)
function formatTimeXX(t) says if the time is less than 10 seconds display and extra 0 to look like 00:00 instead of 0:0

function updateTableTimerView 
 let min - declares time in seconds are 60 for one minute before restarting back at 0. Math.floor makes seconds into non integers not floating point numbers
 let sec - declares the time in seconds = the modulos of 60
 let timer - displays min with : then seconds
 if timeInSec = 0 the reset timer style to normal else if timeInSec = 3600 (1 hour) flash red
 
 -The rest have comments by the functions-
 
# Menu
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


 