const userController = (req, res) => {
  if (req.method === POST) {
    users.push({ name: "Alex" });
  } else {
    res.write(JSON.stringify(getUsers));
  }
};

exports.userController = userController;
