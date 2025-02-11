const mongoose = require('mongoose');
const Product = require('./models/Product');
const Purchase = require('./models/purchase');
const Sales = require('./models/sales');
const Store = require('./models/store');
const { addProduct } = require('../controller/productController');
const { addPurchase } = require('../controller/purchaseController');
const { addSales } = require('../controller/salesController');
const { addStore } = require('../controller/storeController');

// Connect to MongoDB locally
mongoose.connect("mongodb://localhost:27017/InventoryManagementApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");

    // Insert dummy data for Product
    const productData = [
      { name: 'Product 1', manufacturer: 'Manufacturer 1', description: 'Description for product 1' },
      { name: 'Product 2', manufacturer: 'Manufacturer 2', description: 'Description for product 2' },
      { name: 'Product 3', manufacturer: 'Manufacturer 3', description: 'Description for product 3' }
    ];

    productData.forEach(async (data) => {
      const addProductObj = new Product({
        userID: "user123",
        name: data.name,
        manufacturer: data.manufacturer,
        stock: 100,
        description: data.description
      });

      await addProductObj.save();
      console.log(`${data.name} added to Product Collection.`);
    });

    // Insert dummy data for Purchase
    const purchaseData = [
      { productID: "60b8f06d8f8c5f6f88b5f3ed", quantityPurchased: 50, purchaseDate: "2025-02-10", totalPurchaseAmount: 1000 },
      { productID: "60b8f06d8f8c5f6f88b5f3ee", quantityPurchased: 30, purchaseDate: "2025-02-11", totalPurchaseAmount: 600 },
    ];

    purchaseData.forEach(async (data) => {
      const addPurchaseObj = new Purchase({
        userID: "user123",
        ProductID: data.productID,
        QuantityPurchased: data.quantityPurchased,
        PurchaseDate: data.purchaseDate,
        TotalPurchaseAmount: data.totalPurchaseAmount,
      });

      await addPurchaseObj.save();
      console.log(`Purchase for product ID ${data.productID} added.`);
    });

    // Insert dummy data for Sales
    const salesData = [
      { productID: "60b8f06d8f8c5f6f88b5f3ed", stockSold: 20, saleDate: "2025-02-10", totalSaleAmount: 400 },
      { productID: "60b8f06d8f8c5f6f88b5f3ee", stockSold: 15, saleDate: "2025-02-11", totalSaleAmount: 300 },
    ];

    salesData.forEach(async (data) => {
      const addSalesObj = new Sales({
        userID: "user123",
        ProductID: data.productID,
        StockSold: data.stockSold,
        SaleDate: data.saleDate,
        TotalSaleAmount: data.totalSaleAmount,
      });

      await addSalesObj.save();
      console.log(`Sale for product ID ${data.productID} added.`);
    });

    // Insert dummy data for Store
    const storeData = [
      { name: 'Store 1', category: 'Supermarket', address: '123 Main St', city: 'Colombo', image: 'image1.jpg' },
      { name: 'Store 2', category: 'Electronics', address: '456 High St', city: 'Kandy', image: 'image2.jpg' }
    ];

    storeData.forEach(async (data) => {
      const addStoreObj = new Store({
        userID: "user123",
        name: data.name,
        category: data.category,
        address: data.address,
        city: data.city,
        image: data.image
      });

      await addStoreObj.save();
      console.log(`Store ${data.name} added.`);
    });

  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });
