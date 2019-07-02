const temp = document.getElementById('tempInput');
const displayTemp = document.getElementById('displayConvertedTemp');
const convertBtn = document.getElementById('convertBtn');
const clearBtn = document.getElementById('clearBtn');
const radioBtn = document.getElementsByTagName('radio');
//const colored = document.getElementById("coloredBy").style.color = ("greenstyle");




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
        if(radioButtons[i].checked){
           return(radioButtons[i].value);
        }
        
    }
}

const tempStyle = (temp, unitType) => {
    console.log(temp);
    if ((temp > 32 && unitType === 'Celsius') || (temp > 90 && unitType === 'Fahrenheit')){
        displayTemp.classList = '';
        displayTemp.classList.add("hot");
    } else if ((temp < 0 && unitType === 'Celsius') || (temp < 32 && unitType === 'Fahrenheit')){
        displayTemp.classList = '';
        displayTemp.classList.add("cold");
    } else { 
        displayTemp.classList = '';
        displayTemp.classList.add("normal");
    }

}

convertBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    let tempType = selectedUnitType();
    let convertedTemp =convertTemp(tempType);
    tempStyle(convertedTemp, tempType);
    convertedTemp = `${convertedTemp.toFixed(1)}&deg; ${tempType}`;
    displayTemp.innerHTML =convertedTemp;

})

clearBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    displayTemp.innerHTML = '';
    temp.value = '';
    displayTemp.classList = '';
})


