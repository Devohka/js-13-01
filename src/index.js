// const nameInput = document.querySelector(".name");
// const sarnNameInput = document.querySelector(".surname");
// const btn = document.querySelector(".btn");

// function saveInfomation () {
//     const information = {
//         name: nameInput.value,
//         surname: sarnNameInput.value
//     };
//     console.log(information);
//     const jsonPlomba = JSON.stringify(information);
//     console.log(jsonPlomba);
//     console.log(JSON.stringify(jsonPlomba));
//     console.log(JSON.parse(jsonPlomba));

// };

// btn.addEventListener("click", saveInfomation);


// Напишіть функцію, яка відкриває файл з даними у форматі JSON та повертає об'єкт JavaScript.
//  Файл повинен містити інформацію про список студентів. Для кожного студента повинні бути такі поля:
// ім'я
// прізвище
// рік народження
// номер групи
// // оцінки з курсів


const nameIn = document.querySelector(".name");
const surnameIn = document.querySelector(".surname");
const yearBirthIn = document.querySelector(".year-birth");
const numGrupIn = document.querySelector(".num-grup");
const ratingIn = document.querySelector(".rating");
const btn = document.querySelector(".btn");



function saveUser () {
    const user = {
        name: nameIn.value,
        surname: surnameIn.value,
        yearBirth: yearBirthIn.value,
        numGrup: numGrupIn.value,
        rating: ratingIn.value,
    };
    const openJson = JSON.stringify(user);
    const json = JSON.parse(openJson);
    console.log(openJson, json);
};

btn.addEventListener("click", saveUser);




