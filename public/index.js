//===========ds1===============
export const sb1 = evt =>{
    evt.preventDefault()
    const bossInput = document.querySelector('#bossSearch')
    let input = bossInput.value

    // console.log(bossInput)
    console.log(input)
    

    request.open('GET',`/ds1/bosses/name/:${input}`,true)
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

export const rb1 = evt =>{
    let randNum = Math.floor(Math.random()*5)
    request.open('GET',`/ds1/randbosses`,true)
    request.onload = function () {
        const bossList = JSON.parse(this.response)
        let tempArr = bossList
        bossBox.innerHTML = '';
            let temp = tempArr[randNum]
            createBossCard(temp.name,temp.weak,temp.resist,temp.immune,temp.parry,temp.dmg,temp.health,temp.summs,temp.require,temp.image)
        
    }
    
      request.send()
}

export const ab1 = evt =>{
    request.open('GET',`/ds1/bosses`,true)
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
//===========ds2===============
export const sb2 = evt =>{
    evt.preventDefault()
    const bossInput = document.querySelector('#bossSearch')
    let input = bossInput.value

    // console.log(bossInput)
    console.log(input)
    

    request.open('GET',`/ds2/bosses/name/:${input}`,true)
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

export const rb2 = evt =>{
    let randNum = Math.floor(Math.random()*5)
    request.open('GET',`/ds2/randbosses`,true)
    request.onload = function () {
        const bossList = JSON.parse(this.response)
        let tempArr = bossList
        bossBox.innerHTML = '';
            let temp = tempArr[randNum]
            createBossCard(temp.name,temp.weak,temp.resist,temp.immune,temp.parry,temp.dmg,temp.health,temp.summs,temp.require,temp.image)
        
    }
    
      request.send()
}

export const ab2 = evt =>{
    request.open('GET',`/ds2/bosses`,true)
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
//===========ds3===============

export const sb3 = evt =>{
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

export const rb3 = evt =>{
    let randNum = Math.floor(Math.random()*5)
    request.open('GET',`/ds3/randbosses`,true)
    request.onload = function () {
        const bossList = JSON.parse(this.response)
        let tempArr = bossList
        bossBox.innerHTML = '';
            let temp = tempArr[randNum]
            createBossCard(temp.name,temp.weak,temp.resist,temp.immune,temp.parry,temp.dmg,temp.health,temp.summs,temp.require,temp.image)
        
    }
    
      request.send()
}

export const ab3 = evt =>{
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
//=====Universal==============
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

    bossPic.innerHTML = `<img src="${image}" alt="Boss Picture" style="width: 800px; height: 500px;">`
    
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

export const clearFunc = evt =>{
    bossBox.innerHTML = '<h2 id = "bossName">Please enter a boss name or select random </h2>';
}