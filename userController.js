const {adduser,getUsers} = require('./repository')


const userController = (req, res) => {
  if (req.method === "POST") {
    adduser({ name: "Alex" });
    res.end()
  } else {
    res.write(JSON.stringify(getUsers));
    res.end() 
  }
};

exports.userController = userController;
