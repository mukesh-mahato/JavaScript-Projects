const button = document.querySelector('#generateBtn');
button.addEventListener('click', generateNumbers);

function generateNumbers(){
  const form = document.querySelector('form');
  const numIntegers = form.elements.numRandomIntegers.value;
  const minValue = form.elements.minValue.value;
  const maxValue = form.elements.maxValue.value;
  const numberList = document.querySelector('#numberList');

  // Clear any previous number from the list 
  numberList.innerHTML = '';

  // Generate the specified number of random integer and add them to the list
  for(let i=0; i < numIntegers; i++){
    const randomNumber = generateRandomNumber(minValue, maxValue);
    const li = document.createElement('li');
    li.textContent = randomNumber;
    numberList.appendChild(li);
  }
}

function generateRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
