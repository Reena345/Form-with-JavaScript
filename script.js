const bgImg = document.querySelector(".bg-img");
document.body.style.backgroundImage = "url('./Space-Background-Image-8.jpg')";
bgImg.style.marginLeft='35%';
bgImg.style.marginTop='10%';

console.log(bgImg.style);

const userDetails =document.getElementById('user-details');

const bgColor=document.querySelector('.bgColor');

bgColor.addEventListener("submit", function (e) {
    e.preventDefault();
const inputName = document.getElementsByClassName("inPut")[0].value;
const inputEmail = document.getElementsByClassName("inPut1")[0].value;
const inputAge = document.getElementsByClassName("inPut2")[0].value;
const inputGender = document.getElementsByClassName("inPut3")[0].value;
const inputHobbies = document.getElementsByClassName("inPut4")[0].value;

userDetails.innerHTML= `
${inputName} 
${inputEmail} 
${inputAge}
 ${inputGender} 
${inputHobbies} `;


});

bgColor.style.backgroundColor='rgb(1, 15, 53)'
bgColor.style.width='500px';
bgColor.style.height='500px';
bgColor.style.borderRadius='20px';
bgColor.style.padding='40px';


console.log(bgColor.style);


const headIng=document.querySelector('.headIng')
headIng.style.fontSize='25px';
headIng.style.color='white';
headIng.style.marginTop='20px';

console.log(headIng.style);

const headIng1=document.querySelector('.headIng1')
headIng1.style.fontSize='25px';
headIng1.style.color='white';

console.log(headIng1.style);

const headIng2=document.querySelector('.headIng2')
headIng2.style.fontSize='25px';
headIng2.style.color='white';

console.log(headIng2.style);


const headIng3=document.querySelector('.headIng3')
headIng3.style.fontSize='25px';
headIng3.style.color='white';

console.log(headIng3.style);

const headIng4=document.querySelector('.headIng4')
headIng4.style.fontSize='25px';
headIng4.style.color='white';

console.log(headIng4.style);


const headIng5=document.querySelector('.headIng5')
headIng5.style.fontSize='20px';
headIng5.style.color='white';
headIng5.style.backgroundColor='rgb(65, 84, 142)'
headIng5.style.borderRadius='10px';
headIng5.style.border='none';
headIng5.style.padding='10px';

console.log(headIng5.style);

const inPut=document.querySelector('.inPut')
inPut.style.width='400px';
inPut.style.fontSize='16px';
inPut.style.padding='8px';

console.log(inPut.style);



const inPut1=document.querySelector('.inPut1')
inPut1.style.width='400px';
inPut1.style.fontSize='16px';
inPut1.style.padding='8px';
inPut1.style.focus='none';

console.log(inPut1.style);

const inPut2=document.querySelector('.inPut2')
inPut2.style.width='400px';
inPut2.style.fontSize='16px';
inPut2.style.padding='8px';

console.log(inPut2.style);



const newDiv=document.querySelector('.newDiv')
newDiv.style.paddingTop='8px';

console.log(newDiv.style);

const newDiv1=document.querySelector('.newDiv1')
newDiv1.style.marginTop='8px';

console.log(newDiv1.style);




const newLine=document.querySelector('.newLine')
newLine.style.color='white';
console.log(newLine.style);


const newLine1=document.querySelector('.newLine1')
newLine1.style.color='white';
console.log(newLine1.style);

const newLine2=document.querySelector('.newLine2')
newLine2.style.color='white';
console.log(newLine2.style);



const readLine=document.querySelector('.readLine')
readLine.style.color='white';
console.log(readLine.style);

const readLine1=document.querySelector('.readLine1')
readLine1.style.color='white';
console.log(readLine1.style);

const readLine2=document.querySelector('.readLine2')
readLine2.style.color='white';
console.log(readLine2.style);

const readLine3=document.querySelector('.readLine3')
readLine3.style.color='white';
console.log(readLine3.style);





