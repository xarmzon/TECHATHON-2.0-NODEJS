const data = {
  name: "RastaXXXXX",
  track: "NodeJs",
  today: new Date().toISOString(),
};

const printName = (name) => {
  console.log(`This name is ${name || data.name}`);
};

exports.y = 5;

exports.getName = (name = "Rasta") => {
  data.name = name;
};

//todo named and default export

//todo: default
// module.exports = data;

//todo: object
// module.exports = {
//   data,
//   printName,
// };

module.exports.x = data;
module.exports.print = printName;
module.exports.y = 5;
