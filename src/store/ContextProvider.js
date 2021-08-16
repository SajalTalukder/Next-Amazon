import React from "react";
import { useReducer } from "react";
import Context from "./Context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  /////////////////////////////////////
  //       ADD Funtionality          //
  /////////////////////////////////////
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });
    const existingItem = state.items[existingItemIndex];
    let updatedItems;
    if (existingItem) {
      const updateItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updateItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  /////////////////////////////////////
  //       REMOVE Funtionality       //
  /////////////////////////////////////
  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    const existingItem = state.items[existingItemIndex];

    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  /////////////////////////////////////
  //      Default Functionality      //
  /////////////////////////////////////
  return defaultState;
};

const ContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };
  const clearItemFromCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,

    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearItemFromCartHandler,
  };

  return (
    <Context.Provider value={cartContext}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
