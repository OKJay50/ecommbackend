// Generate a random price between min and max (inclusive)
const generateRandomPrice = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(2);
  };

  // Generate a random stock quantity between min and max
  const generateRandomStock = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  module.exports = {
    generateRandomPrice,
    generateRandomStock,
  };
