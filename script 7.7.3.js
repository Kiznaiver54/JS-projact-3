// Исходный массив объектов пользователей
const users = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 18 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 15 },
    { name: 'Eve', age: 22 }
];

const adultUsers = users.filter(user => user.age >= 18);

const names = adultUsers.map(user => user.name);

console.log(adultUsers);
console.log(names);
