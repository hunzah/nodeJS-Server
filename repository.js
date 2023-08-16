const users = [
  { id: 1, banned: true, name: "Oleg" },
  { id: 2, banned: false, name: "Ali" },
];

const getUsers = () => {

  return new Promise((res, rej) => {
    fs.readFile("users.json", function (err, buf) {
        res(buf.toString());
      });
  });
};

const setUsers = (name) => {
  users.push({ name: name, banned: false });
};

exports.getUsers = getUsers;
exports.setUsers = setUsers;
