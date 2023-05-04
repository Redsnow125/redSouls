const form = document.querySelector('form')
const request = new XMLHttpRequest()
let bossBox = document.querySelector('main')
const randBtn = document.querySelector("#rand")
const clearBtn = document.querySelector("#Clear")
const allBtn = document.querySelector("#all")





const searchBoss = evt =>{
    evt.preventDefault()
    const bossInput = document.querySelector('#bossSearch')
    let input = bossInput.value

    console.log(bossInput)
    console.log(input)

    request.open('GET',`https://eldenring.fanapis.com/api/bosses?name=${input}`,true)
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
            createBossCard(temp.name,temp.description,temp.location,temp.region,temp.healthPoints,temp.image)
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
            let temp = tempArr[randNum]
            createBossCard(temp.name,temp.description,temp.location,temp.region,temp.healthPoints,temp.image)
        
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
        bossBox.innerHTML = '';
        for(i = 0; i < tempArr.length; i++){
            let temp = tempArr[i]
            createBossCard(temp.name,temp.description,temp.location,temp.region,temp.healthPoints,temp.image)
        }
    }
    
      request.send()
}




















const createBossCard = (name,desc,location,region,health,img) =>{


    let container = document.createElement('section')
    let bossCard = document.createElement('aside')
    let bossPic = document.createElement('aside')
    let bossList = document.createElement('ul')


    let  nameP = document.createElement('p');
    let  descP = document.createElement('p');
    let  locationP = document.createElement('p');
    let  regionP = document.createElement('p');
    let  healthP = document.createElement('p');
    console.log(img)
    bossPic.innerHTML = `<img src="${img}" alt="Boss Picture" style="width: 800px; height: 500px;">`
    
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

const clearFunc = evt =>{
    bossBox.innerHTML = '<h2 id = "bossName">Please enter a boss name or select random </h2>';
}






allBtn.addEventListener('click', allBoss)
randBtn.addEventListener('click', randBoss)
clearBtn.addEventListener('click', clearFunc)
form.addEventListener('submit', searchBoss)