const h2 = document.createElement("h2");
h2.textContent = "Software engineer";
document.querySelector("body").appendChild(h2);

const skills = {
    skill1:"problem solving",
    skill2:"collaboration",
    skill3:"creativity",
    skill4:"effective communication"
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

