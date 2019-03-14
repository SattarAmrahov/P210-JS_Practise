// let names = ["Heyder", "Pervin", "Elnur", "Ayaz", "Tamerlan"];
// console.log(names);
// console.log( names[0] );
// console.log( names[2] );
// console.log( names.length );
// console.log( names[names.length-1] );

// names[names.length-1] = "Rauf";
// console.log(names);


// let ages = [ 19, 19, 19, 18, 20, 26, 28 ];


// let persons = [
//     {
//         name:"Togrul",
//         surname: "Rzayev"
//     },
//     {
//         name: "Tamerlan",
//         surname: "Latifli"
//     },
//     {
//         city:"Baku"
//     }
// ];
// console.log(persons);

// let myArrays = [
//     [1,2,3,4,5],
//     ["sad", "qwe"]
// ];

let names = ["Heyder", "Pervin", "Elnur", "Ayaz", "Tamerlan"];
names.push("Rauf");
names.push("Arzu", "Murad");
console.log(names);

let wrapper = document.querySelector('#personList');
let unorderedList = "<ul>";
for (let i = 0; i < names.length; i++) {
    unorderedList += "<li>" + names[i] + "</li>";
}
unorderedList += "</ul>";
wrapper.innerHTML = unorderedList;
console.log(unorderedList);