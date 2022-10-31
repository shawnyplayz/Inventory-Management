const Item = require("../Models/Model");

const getAllItems = async (req, res, next) => {
  let items;

  try {
    debugger;
    items = await Item.find();
    res.json(items);
    // if (!items) {
    //   return res.status(404).json({ message: "No items found" });
    // } else {
    //   return res.status(200).json({ items });
    // }
  } catch (err) {
    console.log(err);
    res.send("Error" + err);
  }
};

const addItems = async (req, res, next) => {
  const { name1, name2, price, vendorName, date } = req.body;
  let items;
  try {
    items = new Item({
      name1,
      name2,
      price,
      vendorName,
      date,
    });

    await items.save();
  } catch (err) {
    console.log(err);
  }

  if (!items) {
    return res.status(500).json({ message: "Unable to add items" });
  } else {
    return res.status(200).json({ items });
  }
};
const sortByDate = async (req, res, next) => {
  const arr = req.body;
  let items;
  try {
    debugger;
    console.log("arr :>> ", arr);
    items = await arr.find().sort({ vendorName: -1 });
    // console.log(items);
    res.json(items);
    // if (!items) {
    //   return res.status(404).json({ message: "No items found" });
    // } else {
    //   return res.status(200).json({ items });
    // }
  } catch (err) {
    console.log(err);
    res.send("Error" + err);
  }
};

// const getUserById = async (req, res, next) => {

//   const id = req.params.id;
//   let users;

//   try {
//     users = await User.findById(id);
//   } catch (err) {
//     console.log(err);
//   }

//   if (!users) {
//     return res.status(404).json({ message: "No user found" })
//   } else {
//     return res.status(200).json({ users });
//   }

// }

// const updateUser = async (req, res, next) => {
//   const id = req.params.id;
//   const { name, dob, image, age, email, gender, phone, company, city } = req.body
//   let users;

//   try {
//     users = await User.findByIdAndUpdate(id, {
//       name,
//       dob,
//       image,
//       age,
//       gender,
//       email,
//       phone,
//       company,
//       city
//     })

//     users = await users.save();

//   } catch (err) {
//     console.log(err);
//   }

//   if (!users) {
//     return res.status(404).json({ message: "Unable to update the user by given ID" })
//   } else {
//     return res.status(200).json({ users });
//   }
// }

// const deleteUser = async (req, res, next) => {
//   const id = req.params.id;

//   let users;

//   try {
//     user = await User.findByIdAndRemove(id);
//   } catch (err) {
//     console.log(err);
//   }

//   if (!users) {
//     return res.status(404).json({ message: "Unable to delete the user by given ID" })
//   } else {
//     return res.status(200).json({ message: "User deleted successfully" });
//   }

// }

exports.getAllItems = getAllItems;
exports.addItems = addItems;
exports.sortByDate = sortByDate;
// exports.getUserById = getUserById;
// exports.updateUser = updateUser;
// exports.deleteUser = deleteUser;
