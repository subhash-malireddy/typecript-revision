// interfaces are objects with SPECIFIC properties. Resuable pusposes.
var user = {
    name: 'Satti',
    age: parseInt("10"),
    logFriend: function (user) {
        return this.name + "'s friend is " + user.name;
    }
};
var user2 = {
    name: "Subbi",
    logFriend: function (user) {
        return this.name + "'s friend is " + user.name;
    }
};
console.log(user.logFriend(user2));
console.log(user2.logFriend(user));
