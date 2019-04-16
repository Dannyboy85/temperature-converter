const temp = document.getElementById('tempInput');
const displayTemp = document.getElementById('displayConvertedTemp');
const convertBtn = document.getElementById('convertBtn');
const clearBtn = document.getElementById('clearBtn');
const radioBtn = document.getElementsByTagName('radio');

const convertTemp = (unit) => {
    if (unit === 'Celsius') {
        convertedTemp = (temp.value - 32) / 1.8;
    } else if(unit === 'Fahrenheit') {
        convertedTemp = temp.value * 1.8 + 32
    }
    
    return convertedTemp;
}

const selectedUnitType = () =>{
    const radioButtons = document.getElementsByName('unit');
    for (let i = 0; i < radioButtons.length; i++){
        if(radioButtons[i].checked && radioButtons[i].value === 'Celsius'){
            return convertTemp('Celsius');
        } else {
           return convertTemp('Fahrenheit');
        }
        break
    }
}

convertBtn.addEventListener('click', (e)=>{
    e.preventDefault();
   const convertedTemp = selectedUnitType();
    displayTemp.innerHTML = convertedTemp;
})

clearBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    displayTemp.innerHTML = '';
    temp.value = '';
})

