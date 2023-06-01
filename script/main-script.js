const characters = {
    low: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    caps: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    special: ['$', '%', '&', '-', '_', 'ñ', '?', '!']
  };

const form = document.getElementById('passwordForm');
const result = document.getElementById('result');

  
    form.addEventListener('submit', function(event) { 
        event.preventDefault();
        const long = form.elements.optionSelect.value;
        const uppercase = form.elements.switchCaps.checked;
        const numbers = form.elements.switchNumbers.checked;
        const specialChars = form.elements.switchSpecials.checked;
        
        generate(uppercase, numbers, specialChars,long);
    });
  
  function generate(caps, numbers, specials,length) {
    let password = [];
    const config = [];
    config.push('low');
    if (caps) {
      config.push('caps');
    }
    
    if (numbers) {
      config.push('numbers');
    }
    
    if (specials) {
      config.push('special');
    }
    
    for (let i = 0; i <= length; i++) {
      const randomConfig = config[Math.floor(Math.random() * config.length)];
      const randomChar = characters[randomConfig][Math.floor(Math.random() * characters[randomConfig].length)];
      password.push(randomChar);
    }
    const passwordInput = document.getElementById('result');
    passwordInput.type = 'password';
    result.value = password.join('');
  }

  function revealPassword() {
    const passwordInput = document.getElementById('result');
    if (passwordInput.type == 'password') {
        passwordInput.type = 'text';
    }else if (passwordInput.type == 'text') {
        passwordInput.type = 'password';
    }
  }
  
  function copyToClipboard() {
    
    navigator.clipboard.writeText(result.value)
    .then(()=>{
        alert('Contraseña copiada al portapapeles');
    }).catch(err => alert("Error al copiar la contraseña: ", err))
    
  }