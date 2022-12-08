const app = require("./src/app");

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});

// //Database > MyStore
// //collection Products
//   //document
//     // key:value
//     {
//      productName: "sdfsdfs",
//      productPrice: 78,
//      dateAdded: "",
//     }
// //collection Users
//     //document
//     {
//       username: "",
//     }
