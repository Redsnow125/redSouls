const form = document.querySelector('form')
const request = new XMLHttpRequest()
const bossBox = document.querySelector('main')
const randBtn = document.querySelector("#rand")
const clearBtn = document.querySelector("#Clear")
const allBtn = document.querySelector("#all")

//===========ds1===============
const sb1 = evt =>{
    evt.preventDefault()
    const bossInput = document.querySelector('#bossSearch')
    let input = bossInput.value

    // console.log(bossInput)
    console.log(input)
    

    axios.get(`/ds1/bosses/name/:${input}`)
        .then(res =>{
            const bossList = res.data
            console.log('in onload')
            console.log(bossList)
            let tempArr = bossList
            console.log(tempArr.length)
            bossBox.innerHTML = '';
            for(i = 0; i < tempArr.length; i++){
                let temp = tempArr[i]
                createBossCard(temp.name,temp.weak,temp.resist,temp.immune,temp.parry,temp.dmg,temp.health,temp.summs,temp.require,temp.image)
            }
    })
}

const rb1 = evt =>{
    let randNum = Math.floor(Math.random()*5)
    axios.get(`/ds1/randbosses`)
        .then ( response => {
        const bossList = response.data
        let tempArr = bossList
        bossBox.innerHTML = '';
        bossBox.innerHTML = '<h2 class = "gameName">Dark souls 1</h2>';
            let temp = tempArr[randNum]
            createBossCard(temp.name,temp.weak,temp.resist,temp.immune,temp.parry,temp.dmg,temp.health,temp.summs,temp.require,temp.image)
        
    })
    

}

const ab1 = evt =>{
    axios.get(`/ds1/randbosses`)
        .then ( response => {
            const bossList = response.data
            let tempArr = bossList
        bossBox.innerHTML = '';
        for(i = 0; i < tempArr.length; i++){
            let temp = tempArr[i]
            createBossCard(temp.name,temp.weak,temp.resist,temp.immune,temp.parry,temp.dmg,temp.health,temp.summs,temp.require,temp.image)
        }
    })
}
//===========ds2===============
const sb2 = evt =>{
    evt.preventDefault()
    const bossInput = document.querySelector('#bossSearch')
    let input = bossInput.value

    // console.log(bossInput)
    console.log(input)
    

    axios.get(`/ds2/bosses/name/:${input}`)
        .then(res =>{
            const bossList = res.data
            console.log('in onload')
            console.log(bossList)
            let tempArr = bossList
            console.log(tempArr.length)
            bossBox.innerHTML = '';
            for(i = 0; i < tempArr.length; i++){
                let temp = tempArr[i]
                createBossCard(temp.name,temp.weak,temp.resist,temp.immune,temp.parry,temp.dmg,temp.health,temp.summs,temp.require,temp.image)
            }
    })
}

const rb2 = evt =>{
    let randNum = Math.floor(Math.random()*5)
    axios.get(`/ds2/randbosses`)
        .then ( response => {
        const bossList = response.data
        let tempArr = bossList
        bossBox.innerHTML = '';
        bossBox.innerHTML = '<h2 class = "gameName">Dark souls 2</h2>';
            let temp = tempArr[randNum]
            createBossCard(temp.name,temp.weak,temp.resist,temp.immune,temp.parry,temp.dmg,temp.health,temp.summs,temp.require,temp.image)
        
    })
    

}

const ab2 = evt =>{
    axios.get(`/ds2/randbosses`)
        .then ( response => {
            const bossList = response.data
            let tempArr = bossList
        bossBox.innerHTML = '';
        for(i = 0; i < tempArr.length; i++){
            let temp = tempArr[i]
            createBossCard(temp.name,temp.weak,temp.resist,temp.immune,temp.parry,temp.dmg,temp.health,temp.summs,temp.require,temp.image)
        }
    })
}
//===========ds3===============

const sb3 = evt =>{
    evt.preventDefault()
    const bossInput = document.querySelector('#bossSearch')
    let input = bossInput.value

    // console.log(bossInput)
    console.log(input)
    

    axios.get(`/ds3/bosses/name/:${input}`)
        .then(res =>{
            const bossList = res.data
            console.log('in onload')
            console.log(bossList)
            let tempArr = bossList
            console.log(tempArr.length)
            bossBox.innerHTML = '';
            for(i = 0; i < tempArr.length; i++){
                let temp = tempArr[i]
                createBossCard(temp.name,temp.weak,temp.resist,temp.immune,temp.parry,temp.dmg,temp.health,temp.summs,temp.require,temp.image)
            }
    })
}

const rb3 = evt =>{
    let randNum = Math.floor(Math.random()*5)
    axios.get(`/ds3/randbosses`)
        .then ( response => {
        const bossList = response.data
        let tempArr = bossList
        bossBox.innerHTML = '';
        bossBox.innerHTML = '<h2 class = "gameName">Dark souls 3</h2>';
            let temp = tempArr[randNum]
            createBossCard(temp.name,temp.weak,temp.resist,temp.immune,temp.parry,temp.dmg,temp.health,temp.summs,temp.require,temp.image)
        
    })
    

}

const ab3 = evt =>{
    axios.get(`/ds3/randbosses`)
        .then ( response => {
            const bossList = response.data
            let tempArr = bossList
        bossBox.innerHTML = '';
        for(i = 0; i < tempArr.length; i++){
            let temp = tempArr[i]
            createBossCard(temp.name,temp.weak,temp.resist,temp.immune,temp.parry,temp.dmg,temp.health,temp.summs,temp.require,temp.image)
        }
    })
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
//======Elden=================

const searchBoss = evt =>{
    evt.preventDefault()
    const bossInput = document.querySelector('#bossSearch')
    let input = bossInput.value

    console.log(bossInput)
    console.log(input)

    request.open('GET',`https://eldenring.fanapis.com/api/bosses?name=${input}?limit=150`,true)
    request.onload = function () {
        const bossList = JSON.parse(this.response)
        console.log('in onload')
        console.log(bossList)
        let tempArr = bossList.data
        console.log(tempArr)
        console.log(tempArr.length)
        bossBox.innerHTML = '';
        for(i = 0; i < tempArr.length; i++){
            let temp = tempArr[i]
            createBossCardER(temp.name,temp.description,temp.location,temp.region,temp.healthPoints,temp.image)
        }
    }
    
      request.send()
    
}

const randBoss = evt =>{
    console.log('in rand')
    let randNum = Math.random()* 100
    randNum = randNum.toFixed(0)

    console.log(randNum)

    request.open('GET',`https://eldenring.fanapis.com/api/bosses?limit=150`,true)
    request.onload = function () {
        const bossList = JSON.parse(this.response)
        console.log('in onload')
        // console.log(bossList)
        let tempArr = bossList.data
        // console.log(tempArr)
        console.log(tempArr.length)
        bossBox.innerHTML = '';
        bossBox.innerHTML = '<h2 class = "gameName">Elden Ring</h2>';

            let temp = tempArr[randNum]
            createBossCardER(temp.name,temp.description,temp.location,temp.region,temp.healthPoints,temp.image)
        
    }
    
      request.send()
}

const allBoss = evt =>{
    request.open('GET',`https://eldenring.fanapis.com/api/bosses?limit=150`,true)
    request.onload = function () {
        const bossList = JSON.parse(this.response)
        console.log('in onload')
        console.log(bossList)
        let tempArr = bossList.data
        console.log(tempArr)
        console.log(tempArr.length)
        for(i = 0; i < tempArr.length; i++){
            let temp = tempArr[i]
            createBossCardER(temp.name,temp.description,temp.location,temp.region,temp.healthPoints,temp.image)
        }
    }
    
      request.send()
}

const createBossCardER = (name,desc,location,region,health,img) =>{


    let container = document.createElement('section')
    let bossCard = document.createElement('aside')
    let bossPic = document.createElement('aside')
    let bossList = document.createElement('ul')


    let  nameP = document.createElement('p');
    let  descP = document.createElement('p');
    let  locationP = document.createElement('p');
    let  regionP = document.createElement('p');
    let  healthP = document.createElement('p');
    // console.log(img)
    bossPic.innerHTML = `<img src="${img}" alt="Boss Picture" style="width: 100%; height: 100%;">`
    
    nameP.textContent = name;
    bossCard.appendChild(nameP)
    console.log(bossCard)

    descP.textContent = desc;
    bossCard.appendChild(descP)
    // console.log(info)

    locationP.textContent = location;
    bossCard.appendChild(locationP)
    // console.log(info)

    regionP.textContent = region;
    bossCard.appendChild(regionP)
    // console.log(info)

    healthP.textContent = health;
    bossCard.appendChild(healthP)

    bossList.appendChild(bossCard)

    container.appendChild(bossList)
    container.appendChild(bossPic)
    bossBox.appendChild(container)

}
//============================
const allrandBoss = evt =>{
    dsNum = Math.floor(Math.random()*3)
    cycleNum = Math.floor(Math.random()*2)
    console.log(cycleNum)
    console.log(dsNum)
if(cycleNum === 0){
    if(dsNum === 0){
            rb1()
        }
        else if(dsNum === 1){
            rb2()
        }
        else if(dsNum === 2){
            rb3()
        }
    }else if (cycleNum === 1){
        randBoss()
    }
    else{
        console.log('There is a big problem. ERROR')
    }
}
const allAllBoss = evt =>{
    bossBox.innerHTML = '';
    ab1()
    ab2()
    ab3()
    allBoss()
}

randBtn.addEventListener('click', allrandBoss)
clearBtn.addEventListener('click', clearFunc)
allBtn.addEventListener('click', allAllBoss)