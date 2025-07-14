// import React, { useState, useContext, createContext, useEffect } from "react";

// const CartContext = createContext();

// const LOCALSTORAGE_KEYS = {
//   cartItem: "cartItem",
//   allProducts: "allProducts",
//   quantities: "quantities",
//   formData: "formData",
//   user: "user"
// };

// export const CartProvider = ({ children }) => {
//   const [cartItem, setCartItem] = useState(() => {
//     const saved = localStorage.getItem(LOCALSTORAGE_KEYS.cartItem);
//     return saved ? JSON.parse(saved) : [];
//   });

//   const [allProducts, setAllProducts] = useState(() => {
//     const saved = localStorage.getItem(LOCALSTORAGE_KEYS.allProducts);
//     return saved ? JSON.parse(saved) : [];
//   });

//   const [quantities, setQuantities] = useState(() => {
//     const saved = localStorage.getItem(LOCALSTORAGE_KEYS.quantities);
//     return saved ? JSON.parse(saved) : {};
//   });

//   const [formData, setFormData] = useState(() => {
//     const saved = localStorage.getItem(LOCALSTORAGE_KEYS.formData);
//     return saved ? JSON.parse(saved) : {
//       fname: '',
//       lname: '',
//       email: '',
//       password: '',
//       phoneNumber: '',
//       address: '',
//       country: '',
//       city: ''
//     };
//   });

//   const [user, setUser] = useState(() => {
//     const saved = localStorage.getItem(LOCALSTORAGE_KEYS.user);
//     return saved ? JSON.parse(saved) : {};
//   });


//   useEffect(() => {
//     localStorage.setItem(LOCALSTORAGE_KEYS.cartItem, JSON.stringify(cartItem));
//   }, [cartItem]);

//   useEffect(() => {
//     localStorage.setItem(LOCALSTORAGE_KEYS.allProducts, JSON.stringify(allProducts));
//   }, [allProducts]);


//   useEffect(() => {
//     localStorage.setItem(LOCALSTORAGE_KEYS.quantities, JSON.stringify(quantities));
//   }, [quantities]);


//   useEffect(() => {
//     localStorage.setItem(LOCALSTORAGE_KEYS.formData, JSON.stringify(formData));
//   }, [formData]);

//   useEffect(() => {
//     localStorage.setItem(LOCALSTORAGE_KEYS.user, JSON.stringify(user));
//   }, [user]);


//   useEffect(() => {
//     fetch('http://localhost:3000/api/user/SearchUserByName', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ userName: formData.fname + ' ' + formData.lname })
//     })
//       .then((response) => response.json())
//       .then(data => setUser(data))
//       .catch(err => console.log(err))
//   }, [formData.fname, formData.lname]);

//   useEffect(() => {
//     fetch('http://localhost:3000/api/product/getMultipleElements')
//       .then((response) => response.json())
//       .then(data => setAllProducts(data))
//       .catch(err => console.log(err))
//   }, []);

//   const addToquantity = (productId, quantity) => {
//     setQuantities(prev => ({
//       ...prev,
//       [productId]: quantity
//     }));
//   };

//   const removeFromQuantity = (ProductId) => {
//     setQuantities(prev => {
//       const newQuantities = { ...prev };
//       delete newQuantities[ProductId];
//       return newQuantities;
//     });
//   };

//   const addToCart = (Product) => {
//     setCartItem(prev => prev.includes(Product) ? prev : [...prev, Product]);
//   };

//   const removeCartItem = (ProductId) => {
//     setCartItem(prev => prev.filter(id => id !== ProductId));
//   };

//   const clearCart = () => setCartItem([]);

//   const clearAllLocalData = () => {
//     Object.values(LOCALSTORAGE_KEYS).forEach(key => localStorage.removeItem(key));

//     setCartItem([]);
//     setAllProducts([]);
//     setQuantities({});
//     setFormData({
//       fname: '',
//       lname: '',
//       email: '',
//       password: '',
//       phoneNumber: '',
//       address: '',
//       country: '',
//       city: ''
//     });
//     setUser({});
//   };

//   const [userName, setUserName] = useState("")

//   useEffect(() => {
//     fetch('http://localhost:3000/api/user/GetUser', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ user })
//     })
//       .then((response) => response.json())
//       .then(data => setUserName(data[0].name))
//       .catch(err => console.log(err))
//   }, [user])


//   return (
//     <CartContext.Provider value={{
//       addToCart, removeCartItem, clearCart, cartItem, allProducts, clearAllLocalData,
//       quantities, setQuantities, removeFromQuantity, addToquantity, formData, setFormData, user, setUser
//     }}>
//       {children}
//     </CartContext.Provider>
//   )
// }

// export const useCart = () => useContext(CartContext);


import React, { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext();

const LOCALSTORAGE_KEYS = {
  cartItem: "cartItem",
  allProducts: "allProducts",
  quantities: "quantities",
  formData: "formData",
  user: "user"
};

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(() => {
    const saved = localStorage.getItem(LOCALSTORAGE_KEYS.cartItem);
    return saved ? JSON.parse(saved) : [];
  });

  const [allProducts, setAllProducts] = useState(() => {
    const saved = localStorage.getItem(LOCALSTORAGE_KEYS.allProducts);
    return saved ? JSON.parse(saved) : [];
  });

  const [quantities, setQuantities] = useState(() => {
    const saved = localStorage.getItem(LOCALSTORAGE_KEYS.quantities);
    return saved ? JSON.parse(saved) : {};
  });

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem(LOCALSTORAGE_KEYS.formData);
    return saved ? JSON.parse(saved) : {
      fname: '',
      lname: '',
      email: '',
      password: '',
      phoneNumber: '',
      address: '',
      country: '',
      city: ''
    };
  });

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem(LOCALSTORAGE_KEYS.user);
    return saved ? JSON.parse(saved) : {};
  });

  const [userName, setUserName] = useState(""); 

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEYS.cartItem, JSON.stringify(cartItem));
  }, [cartItem]);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEYS.allProducts, JSON.stringify(allProducts));
  }, [allProducts]);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEYS.quantities, JSON.stringify(quantities));
  }, [quantities]);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEYS.formData, JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEYS.user, JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    fetch('http://localhost:3000/api/user/SearchUserByName', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName: formData.fname + ' ' + formData.lname })
    })
      .then((response) => response.json())
      .then(data => setUser(data))
      .catch(err => console.log(err));
  }, [formData.fname, formData.lname]);

  useEffect(() => {
    fetch('http://localhost:3000/api/product/getMultipleElements')
      .then((response) => response.json())
      .then(data => setAllProducts(data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (user[0]?.userId) {
      fetch('http://localhost:3000/api/user/GetUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user[0])
      })
        .then((response) => response.json())
        .then(data => {
          if (data[0].name) {
            setUserName(data);
          }
        })
        .catch(err => console.log(err));
    }
  }, [user]);
  useEffect(() => {
    if (user?.userId) {
      fetch('http://localhost:3000/api/user/GetUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId : user.userId })
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched user name response:", data); // ✅ Add this for debugging
          if (data) {
            setUserName(data);
          }
        })
        .catch((err) => console.log("Error fetching user name:", err));
    }
  }, [user]);


  // Cart functions
  const addToquantity = (productId, quantity) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: quantity
    }));
  };

  const removeFromQuantity = (ProductId) => {
    setQuantities(prev => {
      const newQuantities = { ...prev };
      delete newQuantities[ProductId];
      return newQuantities;
    });
  };

  const addToCart = (Product) => {
    setCartItem(prev => prev.includes(Product) ? prev : [...prev, Product]);
  };

  const removeCartItem = (ProductId) => {
    setCartItem(prev => prev.filter(id => id !== ProductId));
  };

  const clearCart = () => setCartItem([]);

  const clearAllLocalData = () => {
    Object.values(LOCALSTORAGE_KEYS).forEach(key => localStorage.removeItem(key));

    setCartItem([]);
    setAllProducts([]);
    setQuantities({});
    setFormData({
      fname: '',
      lname: '',
      email: '',
      password: '',
      phoneNumber: '',
      address: '',
      country: '',
      city: ''
    });
    setUser({});
    setUserName('');
  };

  return (
    <CartContext.Provider value={{
      addToCart, removeCartItem, clearCart, cartItem, allProducts, clearAllLocalData,
      quantities, setQuantities, removeFromQuantity, addToquantity,
      formData, setFormData, user, setUser, userName
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

