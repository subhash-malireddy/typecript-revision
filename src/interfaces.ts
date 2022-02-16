// interfaces are objects with SPECIFIC properties. Resuable pusposes.



interface User {
    name: string;
    // `?` directly after the property name makes it an optional property
    age?: number;
    logFriend(friend:User):string;
}

const user: User = {
    name: 'Satti',
    age: parseInt("10"),
    logFriend: function (this: User, user) {
        return `${this.name}'s friend is ${user.name}`
    }
}

const user2:User = {
    name: "Subbi",
    logFriend: function (this:User, user) {
        return `${this.name}'s friend is ${user.name}`
    }
}

console.log(user.logFriend(user2))
console.log(user2.logFriend(user))
