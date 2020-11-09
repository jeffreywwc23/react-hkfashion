export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};


// export const increaseSize = (cartItems, cartItemToIncreaseSize) => {
//   console.log(cartItems);
//   console.log(cartItemToIncreaseSize);

//   const existingCartItem = cartItems.find(
//     cartItem => cartItem.id === cartItemToIncreaseSize.id
//   );

//   console.log(existingCartItem);

  // if (existingCartItem) {
  //   return cartItems.map(cartItem =>
  //     cartItem.id === cartItemToIncreaseSize.id
  //       ? { ...cartItem, size: cartItem.size }
  //       : cartItem
  //   );
  // }

  // if (existingCartItem) {
  //   for (let i = 0; i < cartItemToIncreaseSize.size.length; i++) {
  //     var newSize = cartItemToIncreaseSize.size[i]
  //     return newSize;
  //   }

  //   return cartItems.map(cartItem =>
  //     cartItem.id === cartItemToIncreaseSize.id
  //       ?
  //       { ...cartItem, size: newSize }
  //       : cartItem
  //   );
  // }


//   return [...cartItems, { ...cartItemToIncreaseSize }];
// };

