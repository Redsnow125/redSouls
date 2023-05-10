const form = document.querySelector('form')
const request = new XMLHttpRequest()
const bossBox = document.querySelector('main')
const randBtn = document.querySelector("#rand")
const clearBtn = document.querySelector("#Clear")
const allBtn = document.querySelector("#all")





const searchBoss = evt =>{
    evt.preventDefault()
    const bossInput = document.querySelector('#bossSearch')
    let input = bossInput.value

    // console.log(bossInput)
    console.log(input)
    

    request.open('GET',`/ds3/bosses/name/:${input}`,true)
    request.onload = function () {
        const bossList = JSON.parse(this.response)
        console.log('in onload')
        console.log(bossList)
        let tempArr = bossList
        console.log(tempArr.length)
        bossBox.innerHTML = '';
        for(i = 0; i < tempArr.length; i++){
            let temp = tempArr[i]
            createBossCard(temp.name,temp.weak,temp.resist,temp.immune,temp.parry,temp.dmg,temp.health,temp.summs,temp.require,temp.image)
        }
    }
    
      request.send()
    
}

const randBoss = evt =>{
    let randNum = Math.floor(Math.random()*5)
    axios.get(`/ds3/randbosses`)
        .then (evt => {
        const bossList = JSON.parse(this.response)
        let tempArr = bossList
        bossBox.innerHTML = '';
            let temp = tempArr[randNum]
            createBossCard(temp.name,temp.weak,temp.resist,temp.immune,temp.parry,temp.dmg,temp.health,temp.summs,temp.require,temp.image)
        
    })
    

}

const allBoss = evt =>{
    request.open('GET',`/ds3/bosses`,true)
    request.onload = function () {
        const bossList = JSON.parse(this.response)
        let tempArr = bossList
        bossBox.innerHTML = '';
        for(i = 0; i < tempArr.length; i++){
            let temp = tempArr[i]
            createBossCard(temp.name,temp.weak,temp.resist,temp.immune,temp.parry,temp.dmg,temp.health,temp.summs,temp.require,temp.image)
        }
    }
    
      request.send()
}

const createBossCard = (name,weak,resist,immune,parry,dmg,health,sums,require,image) =>{

    let container = document.createElement('section')
    let bossCard = document.createElement('aside')
    let bossPic = document.createElement('aside')
    let bossList = document.createElement('ul')

    let  nameP = document.createElement('p');
    let  weakP = document.createElement('p');
    let  resistP = document.createElement('p');
    let  immuneP = document.createElement('p');
    let  parryP = document.createElement('p');
    let  dmgP = document.createElement('p');
    let  healthP = document.createElement('p');
    let  sumsP = document.createElement('p');
    let  requireP = document.createElement('p');

    bossPic.innerHTML = `<img src="${image}" alt="Boss Picture" style="width: 100%; height: 100%;">`
    
    nameP.textContent = name;
    bossCard.appendChild(nameP)

    weakP.textContent = weak;
    bossCard.appendChild(weakP)

    resistP.textContent = resist;
    bossCard.appendChild(resistP)

    immuneP.textContent = immune;
    bossCard.appendChild(immuneP)

    parryP.textContent = parry;
    bossCard.appendChild(parryP)
    
    dmgP.textContent = dmg;
    bossCard.appendChild(dmgP)
    
    healthP.textContent = health;
    bossCard.appendChild(healthP)
    
    sumsP.textContent = sums;
    bossCard.appendChild(sumsP)
    
    requireP.textContent = require;
    bossCard.appendChild(requireP)

    bossList.appendChild(bossCard)
    container.appendChild(bossList)
    container.appendChild(bossPic)
    bossBox.appendChild(container)

}

const clearFunc = evt =>{
    bossBox.innerHTML = '<h2 id = "bossName">Please enter a boss name or select random </h2>';
}






allBtn.addEventListener('click', allBoss)
randBtn.addEventListener('click', randBoss)
clearBtn.addEventListener('click', clearFunc)
form.addEventListener('submit', searchBoss)