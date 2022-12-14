// EJ 1
let yourArray = [true, 1, "Gonziflow", "aa", "oo"]; //

// EJ 2
let myArray = ["a", "b", "c", "d"];
myArray[1] = "GONZIFLOWOULORD";
console.log(myArray);


// EJ 3
function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('I', 2, "three")
    arr.push(7, "VIII", 9)
        // Only change code above this line
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));


// EJ 4
function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));


// EJ 5
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr);


// EJ 6
function htmlColorNames(arr) {
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
    return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


// EJ 7
function forecast(arr) {
    return arr.slice(2, 4);
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


// EJ 8
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr])
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));


// EJ 9
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment, "is", "fun"];
    return sentence;
}

console.log(spreadOut());


// EJ 10
function quickCheck(arr, elem) {
    if (arr.indexOf(elem) >= 0) {
        return true;
    }
    return false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


// EJ 11
function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(filteredArray([
    [3, 2, 3],
    [1, 6, 3],
    [3, 13, 26],
    [19, 3, 9]
], 3));


// EJ 12
let myNestedArray = [
    ["unshift", false, 1, 2, 3, "complex", "nested"],
    ["loop", "shift", 6, 7, 1000, "method"],
    ["concat", false, true, "spread", "array", ["deep"]],
    ["mutate", 1327.98, "splice", "slice", "push", [
        ["deeper"]
    ]],
    ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [
        [
            ["deepest"]
        ]
    ]]
];


// EJ 13
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
foods["bananas"] = 13;
foods["grapes"] = 35;
foods["strawberries"] = 27;
console.log(foods);


// EJ 14
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};
userActivity.data.online = 45
console.log(userActivity);


// EJ 15
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    return foods[scannedItem]
}

console.log(checkInventory("apples"));


// EJ 16
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
delete foods.oranges
delete foods.plums
delete foods.strawberries


console.log(foods);


// EJ 17
let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
}

function isEveryoneHere(userObj) {
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(nom =>
        userObj.hasOwnProperty(nom)
    );
}

console.log(isEveryoneHere(users));


// EJ 18
const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(usersObj) {
    let aux = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            aux++;
        }
    }
    return aux
}

console.log(countOnline(users));


// EJ 19
let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    return Object.keys(obj);
}
console.log(getArrayOfUsers(users));


// EJ 20
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
}

console.log(addFriend(user, 'Pete'));