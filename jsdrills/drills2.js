// function jediName (firstName='Beyonce',lastName='Knowles'){

// let sliceThree=lastName.slice(0,3);
// let sliceTwo=firstName.slice(0,2);
// return sliceThree+sliceTwo

// }

// console.log(jediName());

// function beyond(num){
//     if (num === Infinity || num === -Infinity){
//         console.log('And beyond');
//     }
//     else if (num > 0){
//         console.log('To infinity');
//     }
//     else if (num < 0){
//         console.log('To negative infinity');
//     }else{
//         console.log('Staying home');
//     }
// }

// beyond(0);

// function decode(word){

// let decodedLetter

//     if (word[0] === 'a'){
//     decodedLetter=word[1];
//     }
//     else if (word[0] === 'b'){
//         decodedLetter=word[2];
//     }
//     else if (word[0] === 'c'){
//         decodedLetter=word[3];
//     }
//     else if (word[0] === 'd'){
//         decodedLetter=word[4];
//     }
//     else{
//         decodedLetter=' ';
//     }

//     return decodedLetter;
// }


// function decodeSentence(sentence){

// let wordArray = sentence.split(' ');
// let decodedMessage=" ";
  
//     for (let i=0;i<wordArray.length;i++){
//         decodedMessage += decode(wordArray[i]); 
        
//     }
//     console.log(decodedMessage);

// }


// decodeSentence('craft block argon meter bells brown croon droop');

// //decode('apple');

function daysInMonth(month, leapYear){
    switch(month, leapYear){
        case 'Jan':
        case 'Mar':
        case 'May':
        case 'July':
        case 'Aug':
        case 'Oct':
        case 'Dec':
            result = month+` has 31 days`
            break;
        case 'April':
        case 'June':
        case 'Sept':
        case 'Nov':
            result = `${month} has 30 days`;
        case 'Feb':
            if(leapYear === true){
                return `${month} has 29 days`
            }else{
                return`${month} has 28 days`
            }
            break;
        default:
            throw 'Must provide a valid month.'
    console.log('month');        
    }   
}
daysInMonth('Jan', true);
