export const products = [
  {
    title: "Water Bottle",
    description: "A 500ml reusable water bottle.",
    price: 10.99,
    quantity: 3,
    image: "/images/waterbottle.jpg",
  },
  {
    title: "Toothbrush",
    description: "A standard toothbrush with soft bristles.",
    price: 2.49,
    quantity: 2,
    image: "/images/toothbrush.jpg",
  },
  {
    title: "White T-shirt",
    description: "A plain white tee made from cotton.",
    price: 14.5,
    quantity: 5,
    image: "/images/tshirt.jpg",
  },
  {
    title: "Leather Wallet",
    description: "A classic wallet made from genuine leather.",
    price: 20.0,
    quantity: 4,
    image: "/images/wallet.jpg",
  },
  {
    title: "Soap Bar",
    description: "A fragrant soap bar for daily use.",
    price: 3.75,
    quantity: 1,
    image: "/images/soap.jpg",
  },
  {
    title: "Notebook",
    description: "A standard notebook for writing and note-taking.",
    price: 6.99,
    quantity: 3,
    image: "/images/notebook.jpg",
  },
  {
    title: "Lantern",
    description: "A portable lantern suitable for indoor and outdoor use.",
    price: 18.49,
    quantity: 2,
    image: "/images/lantern.jpg",
  },
  {
    title: "Shopping Bag",
    description: "A reusable shopping bag in a neutral color.",
    price: 2.5,
    quantity: 5,
    image: "/images/shopping-bag.jpg",
  },
  {
    title: "Straw Set",
    description: "A set of 4 drinking straws with a cleaning brush.",
    price: 7.99,
    quantity: 4,
    image: "/images/straws.jpg",
  },
  {
    title: "Yerba Maté ",
    description: "A 1kg bag of Yerba Maté.",
    price: 12.25,
    quantity: 2,
    image: "/images/yerba.jpg",
  },
];
export const CurrentProducts =[...products]; 

export const CartItems = [];
export function GetProducts() {
  return CurrentProducts;
}
export function GetCart() {
  return CartItems;
}
export function AddObject(title) {
  CurrentProducts.forEach((element) => {
    const productInCart = CartItems.find(item => item.title === element.title);
    if (title === element.title && !productInCart && element.quantity>0) {
      CartItems.push({...element,quantity:1});
      element.quantity-=1;
      return;
    }
    if (title === element.title && element.quantity>0) {
      const item = CartItems.find((item) => item.title === title); 
      item.quantity += 1;
      element.quantity-=1;
      return;
    }
  });
}
export function RemoveObject(title) {
  const stock = CurrentProducts.find(item => item.title === title);
  const origin = products.find(item => item.title === title);
  
  for (let i = 0; i < CartItems.length; i++) {
    if (CartItems[i].title === title) {
      stock.quantity+=CartItems[i].quantity;
      CartItems.splice(i, 1);
      break; 
    }
  }
}
