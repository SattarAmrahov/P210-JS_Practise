"use strict";

function Person(ad, soyad, yas) {
    this.name = ad;
    this.surname = soyad;
    this.age = yas;
}


let personArray = [];
let wrapper = document.querySelector("#personList");

function addPerson() {
    let name = document.querySelector('#inputName').value;
    let surname = document.querySelector('#inputSurname').value;
    let age = document.querySelector('#inputAge').value;

    let newPerson = new Person(name, surname, age);

    personArray.push(newPerson);
    displayTable();
    console.log(namesArray);
}



function displayNames() {
    let list = "<ul class='list-group'>";
    for (let i = 0; i < personArray.length; i++) {
        list += "<li class='list-group-item animated lightSpeedIn'>" +
            personArray[i].name + " " +
            personArray[i].surname + " - " + personArray[i].age + "</li>";
    }
    list += "</ul>";
    wrapper.innerHTML = list;
    console.log(list);
}

function displayTable() {
    let list = "<table class='table table-dark'> <thead> " +
    '<tr>' +
      '<th scope="col">#</th>' +
      '<th scope="col">First</th>' +
      '<th scope="col">Last</th>' +
      '<th scope="col">Handle</th>' +
    '</tr>' +
  '</thead> <tbody>';
    for (let i = 0; i < personArray.length; i++) {
        list += "<tr><th scope='row'>"+ (i+1) +"</th><td>" + personArray[i].name+ "</td><td>" + personArray[i].surname + "</td><td>" + personArray[i].age + "</td></tr>";
    }
    list += "</tbody></table>";
    wrapper.innerHTML = list;
    console.log(list);
}