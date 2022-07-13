//initialize the game board on page load 
initCatRow()
initboard()

function initCatRow() {
    let catRow = document.getElementById('category-row')

    for (let j=0; j<6; j++){
        let box= document.createElement('div')
        box.className = 'clue-box category-box'
        catRow.appendChild(box)
    }

}

function initboard() {
    let board = document.getElementById('clue-board')
    
    //generate 5 rows, then place 6 boxes in each row
    for (let i=0; i < 5; i++){
        let row = document.createElement('div')
        let boxValue = 200 * (i + 1)
        row.className = 'clue-row'

        for (let j=0; j<6; j++){
            let box= document.createElement('div')
            box.className = 'clue-box'
            box.textContent = '$' + boxValue
            box.addEventListener('click', getClue, false)
            row.appendChild(box)
        }

        board.appendChild(row)
    }
}

function getClue(){
    console.log('have a nice day')
}

// CALL API

//random function
function randInt(){
    return Math.floor(Math.random() * (18418) + 1)
}

//change scope of array of category API
let catArray = []

function buildCategories() {

    const fetchReq1 = fetch(`https://jservice.io/api/category?&id=${randInt()}`
    ).then((res) => res.json());

    const fetchReq2 = fetch(`https://jservice.io/api/category?&id=${randInt()}`
    ).then((res) => res.json());

    const fetchReq3 = fetch(`https://jservice.io/api/category?&id=${randInt()}`
    ).then((res) => res.json());

    const fetchReq4 = fetch(`https://jservice.io/api/category?&id=${randInt()}`
    ).then((res) => res.json());

    const fetchReq5 = fetch(`https://jservice.io/api/category?&id=${randInt()}`
    ).then((res) => res.json());

    const fetchReq6 = fetch(`https://jservice.io/api/category?&id=${randInt()}`
    ).then((res) => res.json());

    const allData = Promise.all([fetchReq1, fetchReq2, fetchReq3, fetchReq4, fetchReq5, fetchReq6])

    allData.then((res)=> {
        console.log(res)
        catArray = res
    })
}

function setCategories(catArray) {
    let element
}