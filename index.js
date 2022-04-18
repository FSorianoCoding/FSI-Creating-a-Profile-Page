//Created h1-"dog-name" with Rizzo
let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class','dog-name')
header.append('Rizzo')
content.append(header)

//created div class='dog-content'
let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

//create class and src for IMG
let dogImg = document.createElement('img')
dogImg.setAttribute('class', 'dog-image')
dogImg.setAttribute('src', "./assets/rizzo.jpg")
dogContent.append(dogImg)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let dogContentHeader1 = document.createElement('h3')
let dogContentBody1 = document.createElement('p')
let dogContentHeader2 = document.createElement('h3')
let dogContentList = document.createElement ('ul')
dogContentHeader1.textContent = 'Description'
dogContentBody1.textContent = `
                        This gentle dog is aloof toward her owner, and never comes when called.
                        She always acts as though any stranger she meets will harm her,
                        and dislikes other animals.`
dogContentHeader2 = textContent = 'Feeding Times:'

dogDetails.append(dogContentHeader1)
dogDetails.append(dogContentBody1)
dogDetails.append(dogContentHeader2)
dogDetails.append(dogContentList)

let time1 = document.createElement('li')
let time2 = document.createElement('li')
let time3 = document.createElement('li')

time1.textContent = '9:00 am'
time2.textContent = '12:00 pm'
time3.textContent = '5:00 pm'

dogContentList.append(time1)
dogContentList.append(time2)
dogContentList.append(time3)