// Task 1


function checkAge(age) {
     (age > 18) ? 'true': (age <=18)? 'false': '';
    return confirm('Родители разрешили?');
    
}

// Task 2

// pow(3, 2) = 3*3 = 9
// pow(3, 3) = 3*3*3 = 27
// pow(1, 100) = 1*1 * ...* 1 = 1

function pow(x, n) {
    let result = x;
    for (let i=0; i<n; i++){
        result *= x;
    }
    return result;   
}

// Task 3
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение."),
  );

// Task 4

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr ); // 8, 5, 2, 1, -10

// Task 5
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// alert( names ); // Вася, Петя, Маша

// Task 6
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//     fullName: '${user.name} ${user.surname}',
//     id: user.id
// }));

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин

// Task 7
function getAverageAge(users) {
    return users.reduce((prev, user)=> prev + user.age, 0) / users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let array = [ vasya, petya, masha ];


alert( getAverageAge(array) ); // (25 + 30 + 29) / 3 = 28