let stock = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
  };
  
  let order = (callProduction) => {
    console.log("Order Placed.");
    callProduction();
  };
  
  let production = () => {
    console.log("Production has started.");
  };