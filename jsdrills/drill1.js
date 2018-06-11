
function yearOfBirth(age=30){
    let yearOfBirth = 2018-age;
    return yearOfBirth;
}


function whoAmI(name='Donny',age=30){
    let yob = yearOfBirth(age);
    console.log(`Hi, my name is ${name} and I\'m ${age} years old`);
    console.log(`I was born in ${yob}`);
}


whoAmI();


