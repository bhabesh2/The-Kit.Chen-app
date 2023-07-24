The Cart component is a simple and elegant cart icon that displays the number of items currently added to the cart. It allows users to easily access their cart and proceed to the order summary page.
``````
Functionality

Cart Icon: The Cart component uses the BsFillCartFill icon from the 'react-icons/bs' package to render a cart icon.

Cart Count: The component utilizes the useSelector hook from react-redux to access the cartItems state from the Redux store. It then calculates the number of items in the cart by getting the length of the cartItems array.

Link to Order Summary: The cart icon is wrapped in a Link component from react-router-dom, which allows users to click on the cart icon to navigate to the order summary page (/your-order).

Styling
The cart icon and item count are displayed inside a circular container with a white background using Tailwind CSS utility classes.

The cart icon itself is rendered in black, providing a visually recognizable symbol for the cart.

The number of items in the cart is displayed in parentheses next to the cart icon, making it easy for users to see the count at a glance.

Overall, the Cart component serves as an efficient and unobtrusive way to inform users about the number of items in their cart and allows them to access their order summary with a single click. It seamlessly integrates with the app's design and enhances the user experience when shopping for food items.
``````