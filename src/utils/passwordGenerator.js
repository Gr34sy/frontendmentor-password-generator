export default function passwordGenerator(){

    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const length = 12;

    let password = [];
    for(let i = 0; i < length; i++){
        const char = chars[Math.floor(Math.random() * chars.length)];
        password.push(char)
    }

    return password.join('');
}