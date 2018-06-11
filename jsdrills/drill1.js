
function yearOfBirth(age=30){
    if (age < 0){
        throw new Error ("Age can not be negative");
    }
    let yearOfBirth = 2018-age;
    return yearOfBirth;
}


function whoAmI(name='Donny',age=30){
    let yob = yearOfBirth(age);
    console.log(`Hi, my name is ${name} and I\'m ${age} years old`);
    console.log(`I was born in ${yob}`);
}

try{
    whoAmI('Chris',-5);
}
catch (e){
    console.log(e);
}




