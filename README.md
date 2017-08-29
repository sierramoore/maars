# maars
Restaurant POS system - School project

# Project Structure
* [images]   - a folder of a picture of an empty table and an occupied table_
* index.html - default page, redirects to login page_
* login.html - employee login page username= maars, password= password_
* table.html - 10 tables with onclick occupied image and timer_
* menu.html  - a list of 20 items, with description, price, quantity selectors, sidebar, side cart, and slideshow_
* checkout.html - lists items, prices, quantity, credit card and cash options_

### **Login:**
Basic Idea - Create a login form with a specified username and password with a pop up window if username and/or password is incorrect.
and a background image.

HTML- Simple input fields for username and password inside a form tag.

JS- function checks the name attribute for the specified value of username "maars" and password "password" if both statements are true then on click of the login button it will direct you to the table page,
if not then a window alert will alert "Incorrect Password and Username".

### **Table:**
Basic Idea- Create 10 tables, 5 tables of 2 and 5 tables of 4.(currently undifferentiated) Wanted to show explicitly if a table was empty or taken so an image of a free table and an occupied table are toggled on click of "seat table".
 Also On click of the "Seat Table" button, the button text will turn into "Free Up Table" and a timer will start from 00:00 and once it hits 60:00 minutes it will begin flashing red to indicate it is the customers time for their table.
 Onclick of "Free Up table" the image will show an empty table and the timer will reset to 00:00.

HTML- Each table is in a list and div with a css styling class. A header for table. A paragraph for the timer with an id of timer to call the function to start and stop the time.
An input tag for the "Seat table" button with an onclick attribute that toggles the table image from empty table picture to occupied table image.

JS- Function formatTimeXX(t) says if the time is less than 10 seconds display and extra 0 to look like 00:00 instead of 0:0

function updateTableTimerView
* let min - declares time in seconds are 60 for one minute before restarting back at 0. Math.floor makes seconds into non integers not floating point numbers
* let sec - declares the time in seconds = the modulus of 60
* let timer - displays min with : then seconds
* if timeInSec = 0 the reset timer style to normal else if timeInSec = 3600 (1 hour) flash red
 
Toggle table functions are commented next to lines in code
 
### **Menu:**
Basic Idea- Have a slideshow, 20 menu items with an "add" to cart button, a header with restaurant name and links to go to seating and checkout. Added in side cart and navigation.

For each menu item there is a quantity selector that is automatically at 1 for convenience to quickly press add for that item. A a drop down arrow for qty 1-10.
* No limit to how much you can add of an item. On each click of "Add" next to food item, button will add 1 of that item to cart.
* Side navigation that follows your scroll for Appetizers, Main Course, Desserts, and Drinks to quickly navigate through the items.
  * Side cart that follows your scroll with any items you added to cart. Also Clear Cart and andCheckout buttons below to quickly clear the order, or do a fast checkout.
* If you keeping clicking add for the same item it will display in the side cart under the same item name, only the qty will go up by 1 on each click.
* Additional checkout button on the very bottom of the menu.

Menu items are in one JavaScript array with name, description, image, and price.

Used SessionStorage to save recent selection on menu.

Storage is only cleared on click of "Clear Cart", "Confirm Payment" credit card checkout, and "Confirm Payment" cash checkout.

Menu items and side navigation are dynamically populated when the page is loaded

*slideshow made automatic by Resham


### **Checkout:**
Basic Idea- On load of the checkout page, the function displayCart will use saved sessionStorage of items added to cart and list them in order.

updateSummary function used to calculate the subtotal, discount (if applicable), tax, tip, and total underneath the displayed cart items.

* Subtotal is all the items added together.
* Discount if order is $50 or more $5 off
* Tax rate of 8.875%
* Tip is calculated after subtotal, discount, and tax. Options of 0%, 15%, 18%, or 20%

On click of "Confirm Payment" in credit card section will clear Sessionstorage.

On click of "Confirm Payment" in cash section will clear Sessionstorage only if * Sufficent amount of cash is entered to pay for the order. Else a window alert will alert "Insufficient Funds".


*Max credit card and CVV numbers made by using pattern attribute done by annalise


# Authors
_Sierra Moore - Did login, table, and majority of menu and checkout page including javascript functions and Sessionstorage._

https://github.com/Amy7 Amy Quan - Helped with the layout of the menu and table for the checkout page.

https://github.com/waymackenzie Mackenzie Way - Did the first draft of credit card checkout fields.

https://github.com/Resham1458 Resham - Did the slideshow on the menu page, styling first draft for checkout page. 

https://github.com/annaliseh Annalise Hospedales - Did the credit card input number limits, and discount function, and helped with tip function.


 
