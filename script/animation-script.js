const rain = () =>{
    let amount = 75;
    let field = document.getElementById('backeffect');
    let i = 0;

    while (i < amount) {
        let item = document.createElement('div');
        item.classList.add('effectObject');
        
        let size = Math.random() * (12 - 2) + 2;
        let posX = Math.floor(Math.random() * ((field.offsetWidth*1.25) - (field.offsetWidth*-0.75)) + (field.offsetWidth*-0.75));
        let posY = -76;
        let delay = Math.random()*(15-1)+1;
        let duration = Math.random()*(12-1)+1;

        item.style.width = size + 'px';
        item.style.left = posX + 'px';
        item.style.top = posY + 'vh';
        item.style.animationDelay = delay + 's';
        item.style.animationDuration = duration + 's';

        field.appendChild(item);

        i++;
    }
}

rain();