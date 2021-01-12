$(document).ready(function() {

  const userInput = prompt("Hello! Please enter a sentance that does not have punctuation");

  function firstLast(input) {
    const first = input.charAt(0).toUpperCase();
    const last = input.charAt(input.length - 1).toUpperCase();
    return first + last;
  }

  function switchLetters(input) {
    const splitLetters= input.split("");
    const switchedArray = splitLetters.reverse();
    const switchedLetters = switchedArray.join("");
    return switchedLetters;
  }

  function sentanceLength(input) {
    const letter = parseInt(Math.floor(input.length / 2));
    const letterInFront = input.charAt(letter);
    return letterInFront;
  }

  function output(input) {
    const twoLetterResult = firstLast(input);
    const twoLetterReverse = switchLetters(twoLetterResult);
    const lettersInFront = sentanceLength(input)
    const concatLetters = lettersInFront + input + twoLetterReverse;
    const concatSwitched = concatLetters.split("");
    const concatArray = concatSwitched.reverse();
    const concatJoined = concatArray.join("");
    return concatJoined;
  }

  const results = output(userInput);
  alert(results);

  
  let img1 = $('<img />', {
    id: 'image1',
    src: 'img/cipher.jpg',
    alt: 'A circular wooden cipher'
  });
  img1.appendTo($('#first'))

  let img2 = $('<img />', {
    id: 'image2',
    src: 'img/cipher2.jpg',
    alt: 'A crossword with cipher notes'
  });
  img2.appendTo($('#second'));

  $('#first').click(function() {
    alert(userInput);
  })

  $('#second').click(function() {
    alert(results);
  })



}); 
