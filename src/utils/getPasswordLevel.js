export default function getPasswordLevel(password){

    const symbols = /[!@#$%^&*]/;
    const letters = /[A-Za-z]/;
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const numbers = /[0-9]/;

    if(password.split('').length > 8 && 
    symbols.test(password) && 
    uppercase.test(password) && 
    lowercase.test(password) && 
    numbers.test(password)){
        return "strong";
    }else if(password.split('').length > 6 && 
    symbols.test(password) && 
    letters.test(password) && 
    numbers.test(password)){
        return "medium";
    }else if(password.split('').length > 4 && 
        (
            (letters.test(password) && numbers.test(password))
            || (letters.test(password) && symbols.test(password))
            || (numbers.test(password) && symbols.test(password))
        )
    ){
        return "weak";
    }else{
        return "too-weak";
    } 
}