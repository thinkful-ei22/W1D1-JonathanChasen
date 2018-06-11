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


// function daysInMonth(month,leapYear=false){
//     let text;
//     switch (month) {
        
//         case 'January':
//         case 'March':
//         case 'May':
//         case 'July':
//         case 'August':
//         case 'October':
//         case 'December':
//           text=`${month} has 31 days`;  
//         break;
//         case 'April':
//         case 'June':
//         case 'September':
//         case 'November':
//           text=`${month} has 30 days'`;
//         break;
//         case 'February':
//             if(leapYear === true){
//                     text=`${month} has 29 days`;
//                   }else{
//                      text=`${month} has 28 days`;
//                   }
//             break;
//       default:
//         console.log('Must provide a valid month.');
//     }
//          return text;
//     }
    
//     console.log(daysInMonth('February',true));
  
  
function rockPaperSissors(num){
    const randomNo = Math.floor(Math.random() * 3) + 1;

    if(num<1 || num >3 ){
        throw 'error: number has to be between 1 and 3'
    }else if(num === randomNo){
        return 'tie';
    }else if(num === 1 && randomNo ===3 ){
        return 'You win! Rock beats Scissors';
    }else if(num === 3 && randomNo ===2 ){
        return 'You win! Scissors beats Paper';
    }else if(num === 2 && randomNo ===1){
        return 'You win! Paper beats Rock';
    }else{
        return 'Sorry, You Lose';
    }
}
console.log(rockPaperSissors(1));