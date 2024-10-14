const button = document.createElement('button');
button.textContent = 'Caculate Percentage';
var firstIMG3 = document.querySelector('[aria-label="sample tile"]');

// Add an event listener to the button
button.addEventListener('click', () => {
var firstIMG = document.querySelector('[aria-label="All patients with condition"]').querySelector('span');
var val = firstIMG.innerText;
console.log(val);
var firstIMG2 = document.querySelector('[aria-label="Patients with sub-diagnosis"]').querySelector('span');
var val2 = firstIMG2.innerText;
console.log(val2);
var ratio = (val2/val)*100;
console.log(ratio);
alert(ratio);
});

// Append the button to the body of the document
firstIMG3.appendChild(button);