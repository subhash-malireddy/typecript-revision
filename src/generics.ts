const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16)
    return{
        ...obj,
        id
    }
}

interface myGenericInterface<T> {
    version: number
    data: T
}

const user1:User = {
    name: "satti",
    logFriend: function (friend: User): string {
        throw new Error("Function not implemented.")
    }
}

const gType:myGenericInterface<User> = {
    version: 1,
    data: user1
}
const gType2:myGenericInterface<string> = {
    version: 1,
    data: "satti-data"
}

const result = addId<User>(user1)
console.log(result)