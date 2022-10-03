let users = [
    {
        username: "Ibrahim",
        email: "ibra@gmail.com",
        password: "test123",
        subscriptionStatus: "VIP",
        discordId: "dizzy#001",
        lessonsCompleted: [0, 1],
    },
    {
        username: "Ardash",
        email: "ardas@gmail.com",
        password: "susardash",
        subscriptionStatus: "VIP",
        discordId: "dar#001",
        lessonsCompleted: [0, 1, 2, 3],
    },
    {
        username: "Zen",
        email: "zen@gmail.com",
        password: "zen123",
        subscriptionStatus: "VIP",
        discordId: "zen#001",
        lessonsCompleted: [0, 1, 2, 3, 4],
    },
];

// function login(email, password) {
//   for (let i = 0; i < users.length; ++i)
//     if (users[i].email === email) {
//       console.log(users[i]);
//       if (users[i].password === password) {
//         console.log(log the user in - the details are correct);
//       } else {
//         console.log(the password is incorrect - try again);
//       }
//       return;
//     }
//   console.log(could not find an email that matches);
// }

// login("ibr@gmail.com", "test123");

function register(user) {
    users.push(user)
}

register({
    username: "Zen",
    email: "zen@gmail.com",
    password: "zen123",
    subscriptionStatus: "VIP",
    discordId: "zen#001",
    lessonsCompleted: [0, 1, 2, 3, 4]
});

console.log(users);