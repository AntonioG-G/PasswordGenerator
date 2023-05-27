const characters = [
    low = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    caps = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    numbers = ['1','2','3','4','5','6','7','8','9','0'],
    special = ['$','%','&','-','_','ñ','?','!']
];
let config = [0];
let long = 0;

const form = document.getElementById('passwordForm');

form.addEventListener('submit', function(event) { 
    event.preventDefault();
    console.log('event');
});

const generate = () =>{
    let password = [];
    for (let i = 0; i <= long; i++) {
        let random = config[Math.floor(Math.random() * config.length)];
        let random2 = characters[random][Math.floor(Math.random() * characters[random].length)]
        password.push(random2);
    }
    console.log(`Tu contraseña es: ${password.join('')}`);
}