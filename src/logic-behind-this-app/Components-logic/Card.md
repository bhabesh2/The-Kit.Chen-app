Kit.Chen Card Component
The Card component is a reusable UI component used throughout the Kit.Chen app to display individual product details in a visually appealing format.

Props:

product: This prop represents the product object that contains information about the specific item to be displayed in the card. It includes properties such as img (image URL), category (product category), description (product description), and price (product price).

showButton: This prop is a boolean value that determines whether to show the "Add to Cart" button in the card. When set to true, the button will be displayed, allowing users to add the product to their cart. When set to false, the button will be hidden.

onAddToCart: This prop is a function that is called when the "Add to Cart" button is clicked. It handles the logic for adding the product to the cart.

Card Layout:

The Card component is designed using Tailwind CSS utility classes to create a clean and modern layout. It consists of the following elements:

Image: The product image is displayed at the top of the card using the img URL provided in the product prop. It is centered and resized to fit within the card using the w-full and my-2 classes.

Product Information: Below the image, the product information is displayed in a vertical layout. It includes the product category, description, and price. The category title is styled as a bold heading, the description as regular text, and the price as bold text prefixed with the Indian Rupee symbol (₹).

"Add to Cart" Button: If the showButton prop is true, the "Add to Cart" button is displayed at the bottom of the card. The button has a black background, white text, and a rounded appearance. When clicked, the onAddToCart function is invoked to handle the process of adding the product to the cart.

Reusability:

The Card component is designed with reusability in mind. It can be used in various parts of the app to display different products with their respective details. By passing different product objects and controlling the visibility of the "Add to Cart" button through props, the Card component offers flexibility and consistency in the overall app design.

Overall, the Card component serves as an integral part of the Kit.Chen app, providing an elegant and consistent way to showcase products and enabling users to add items to their cart with ease. Its reusability and customization options make it an essential building block for creating a delightful shopping experience.