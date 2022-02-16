interface IUser {
    name : name;
    age: string | null // `|` character means union. Here the age can now be a string or null
}

// a type alias is a convinient way to make the code more readable. Hover over the names array to see the magic 😃
type name = string

const names : name[] = ['satti', 'subbi', 'samara', 'simha']