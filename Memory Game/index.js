document.addEventListener('DOMContentLoaded',()=>{
    const cardArray = [
    {
        name: '1',
        img: 'img/1.png'
    },
    {
        name: '2',
        img: 'img/2.png'
    },
    {
        name: '3',
        img: 'img/3.png'
    },
    {
        name: '4',
        img: 'img/4.png'
    },
    {
        name: '5',
        img: 'img/5.png'
    },
    {
        name: '6',
        img: 'img/6.png'
    },
    {
        name: '7',
        img: 'img/7.png'
    },
    {
        name: '8',
        img: 'img/8.png'
    },
    {
        name: '9',
        img: 'img/9.png'
    },
    {
        name: '10',
        img: 'img/10.png'
    },
    {
        name: '11',
        img: 'img/11.png'
    },
    {
        name: '12',
        img: 'img/12.png'
    },
    {
        name: '13',
        img: 'img/13.png'
    },
    {
        name: '14',
        img: 'img/14.png'
    },
    {
        name: '15',
        img: 'img/15.png'
    },
    {
        name: '16',
        img: 'img/16.png'
    },
    {
        name: '17',
        img: 'img/17.png'
    },
    {
        name: '18',
        img: 'img/18.png'
    },
    {
        name: '19',
        img: 'img/19.png'
    },
    {
        name: '20',
        img: 'img/20.png'
    },
    {
        name: '21',
        img: 'img/21.png'
    },
    {
        name: '22',
        img: 'img/22.png'
    },
    {
        name: '23',
        img: 'img/23.png'
    },
    {
        name: '24',
        img: 'img/24.png'
    },
    {
        name: '1',
        img: 'img/1.png'
    },
    {
        name: '2',
        img: 'img/2.png'
    },
    {
        name: '3',
        img: 'img/3.png'
    },
    {
        name: '4',
        img: 'img/4.png'
    },
    {
        name: '5',
        img: 'img/5.png'
    },
    {
        name: '6',
        img: 'img/6.png'
    },
    {
        name: '7',
        img: 'img/7.png'
    },
    {
        name: '8',
        img: 'img/8.png'
    },
    {
        name: '9',
        img: 'img/9.png'
    },
    {
        name: '10',
        img: 'img/10.png'
    },
    {
        name: '11',
        img: 'img/11.png'
    },
    {
        name: '12',
        img: 'img/12.png'
    },
    {
        name: '13',
        img: 'img/13.png'
    },
    {
        name: '14',
        img: 'img/14.png'
    },
    {
        name: '15',
        img: 'img/15.png'
    },
    {
        name: '16',
        img: 'img/16.png'
    },
    {
        name: '17',
        img: 'img/17.png'
    },
    {
        name: '18',
        img: 'img/18.png'
    },
    {
        name: '19',
        img: 'img/19.png'
    },
    {
        name: '20',
        img: 'img/20.png'
    },
    {
        name: '21',
        img: 'img/21.png'
    },
    {
        name: '22',
        img: 'img/22.png'
    },
    {
        name: '23',
        img: 'img/23.png'
    },
    {
        name: '24',
        img: 'img/24.png'
    }
    ]

    cardArray.sort(()=> 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')

    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function createBoard(){
        for(let i=0; i < cardArray.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src','img/cover.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch(){
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]


        if(optionOneId == optionTwoId){
            cards[optionOneId].setAttribute('src', 'img/cover.png')
            cards[optionTwoId],setAttribute('src','img/cover.png')
        }
        else if(cardsChosen[0] == cardsChosen[1]){
            cards[optionOneId].setAttribute('src','img/blank.png')
            cards[optionTwoId].setAttribute('src','img/blank.png')
            cards[optionOneId].removeEventListener('click',flipCard)
            cards[optionTwoId].removeEventListener('click',flipCard)
            cardsWon.push(cardsChosen)
        }
        else{
            cards[optionOneId].setAttribute('src','img/cover.png')
            cards[optionTwoId].setAttribute('src','img/cover.png')
        }

        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length == cardArray.length/2){
            resultDisplay.textContent = 'Congralutions!!! You Found Them All !'
        }
    }

    function flipCard(){
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        if(cardsChosen.length == 2){
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard()
})

//The Frontend isnt completed yet
