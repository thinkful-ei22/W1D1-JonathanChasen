
function yearOfBirth(age){
    if (age < 0){
        throw new Error ("Age can not be negative");
    }
    let yearOfBirth = 2018-age;
    return yearOfBirth;
}


function whoAmI(name,age){
   
    if( age === undefined || typeof age !== 'number'){
        console.error("Arguments not valid");
    } 

    else if (name === undefined || typeof name !== 'string'){
        console.error("Arguments not valid");
    }
    else {
    let yob = yearOfBirth(age);
    console.log(`Hi, my name is ${name} and I\'m ${age} years old`);
    console.log(`I was born in ${yob}`);
    }
}

try{
    whoAmI('Chris',-5);
}
catch (e){
    console.log(e);
}



whoAmI(2,29);
