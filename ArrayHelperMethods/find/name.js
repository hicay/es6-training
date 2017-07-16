var users = [
  { name: 'John' },
  { name: 'Alex' },
  { name: 'Bill' }
];

var user;

user = users.find((user) => {
    return user.name === 'Alex'
});

console.log(user);