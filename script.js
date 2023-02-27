const randomNumber1 = Math.floor(Math.random() * 6) + 1

const randomDiceImage = 'dice' + randomNumber1 + '.png' //dice2.png

const randomImageSource = 'img/' + randomDiceImage // img/dice2.png

const image1 = document.querySelectorAll('img')[0]

image1.setAttribute('src', randomImageSource)


const randomNumber2 = Math.floor(Math.random() * 6 ) + 1

const randomImageSource2 = 'img/dice' + randomNumber2 + '.png'

document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2)

if( randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = '🏆 player 1 wins'
} else if( randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = '🏆 player 2 wins'
} else {
    document.querySelector('h1').innerHTML = '❌Draw'
}

