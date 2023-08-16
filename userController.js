const userController = (req, res) => {
  if (req.method === POST) {
    users.push({ name: "Alex" });
    res.end()
  } else {
    res.write(JSON.stringify(getUsers));
    res.end() 
  }
};

exports.userController = userController;
