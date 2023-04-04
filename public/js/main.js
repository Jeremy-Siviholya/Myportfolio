// import  competencesJson from "../../data/competences.json" assert {type:"json"};

// const competences=competencesJson;

// console.log(competences);
// const competencesDiv=document.querySelector(".data-competence");

// for(let i=0;i<competences.length; i++){
//     console.log(competences[i].title);
//     const div=document.createElement("div");
//     div.classList.add("box")
//     div.innerHTML=`<div><img src="${competences[i].icon}"></div>"
//     `;
//     competencesDiv.appendChild(div);
// }

function darkMode()
{
    
const sections=document.querySelector('body');
const sunIcon=document.querySelector('.toggle .bxs-sun');
const moonIcon=document.querySelector('.toggle .bx-moon');
const toggle=document.querySelector('#toggle') 

toggle.addEventListener('change',()=>{
    sections.classList.toggle('dark')
    sunIcon.className=sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className=moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
})
}

darkMode();