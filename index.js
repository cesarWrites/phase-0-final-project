/*const h2 = document.createElement("h2");
h2.textContent = "Software engineer";
document.querySelector("body").appendChild(h2);*/

const skills = {
    skill1:"problem solving",
    skill2:"collaboration",
    skill3:"creativity",
    skill4:"communication"
}

const interests = {
    int1:"Writing",
    int2:"public speaking",
    int3:"travelling",
    int4:"art"
}

//create constants for the ellements
const ht1 = document.getElementById('h2-1');
const ht2 = document.getElementById('h2-2');
const ht3 = document.getElementById('h2-3');
const ht4  = document.getElementById('h2-4');

const hd1 = document.getElementById('h4-1');
const hd2 = document.getElementById('h4-2');
const hd3 = document.getElementById('h4-3');
const hd4 = document.getElementById('h4-4');

ht1.innerHTML = skills.skill1;
ht2.innerHTML = skills.skill2;
ht3.innerHTML = skills.skill3;
ht4.innerHTML = skills.skill4;

hd1.innerHTML = interests.int1;
hd2.innerHTML = interests.int2;
hd3.innerHTML = interests.int3;
hd4.innerHTML = interests.int4;

const list1 = document.getElementById("ls1");
const list2 = document.getElementById("ls2");
const list3 = document.getElementById("ls3");
const list4 = document.getElementById('ls4');

let progLang = ["HTML,CSS, C++, JavaScript"];
let progLang1 = ["python", "R", "Hadoop"];
let progLang2 = ["oracle", "DBMS", "mySQL"];
let progLang3 = ["AWS", 'powerBI'];

list1.innerHTML = progLang;
list2.innerHTML = progLang1;
list3.innerHTML = progLang2;
list4.innerHTML = progLang3;


