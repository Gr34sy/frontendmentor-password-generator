export default function passwordGenerator(uppercase, lowercase, numbers, symbols, length){

    const includesUppercase = uppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    const includesLowercase = lowercase ? "abcdefghijklmnopqrstuvwxyz" : "";
    const includesNumbers = numbers ? "0123456789" : "";
    const includesSymbols = symbols ? "!@#$%^&*" : "";
    const chars = includesNumbers + includesSymbols + includesLowercase + includesUppercase;

    if(chars.length === 0 || length <= 0){
        return false;
    }

    let password = "";
    for(let i = 0; i < length; i++){
        const char = chars[Math.floor(Math.random() * chars.length)];
        password += char;
    }

    return password;
}