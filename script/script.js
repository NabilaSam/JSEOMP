// syntax for a conditional operator( conditional ? expression_when_true : expression_when_false;)
// Sample Data
// Using stringify to adjust the data in the ideal form for this js file. chrck local storage in browser

 catalogue = JSON.parse(localStorage.getItem('catalogue'))? 
JSON.parse(localStorage.getItem('catalogue')):
localStorage.setItem('catalogue', JSON.stringify([
    {
        id: 1,
        name: "Black lace corset",
        image: "../imgs/54279e55845716e115af9f45943ec0bc.jpg",
        price: 300,
        style: "ethereal"
    },
    {
        id: 2,
        name: "Floral lace corset",
        image: "../imgs/416d7a5f78ace1f15cae43d22f4c04fc.jpg",
        price: 420,
        style: "ethereal"
    },
    {
        id: 3,
        name: "Black steampunk corset",
        image: "../imgs/blksteampunk.webp",
        price: 500,
        style: "steampunk"
    },
    {
        id: 4,
        name: "Brown steampunk corset",
        image: "../imgs/brwnsteampunk.webp",
        price: 500,
        style: "steampunk"
    },
    {
        id: 5,
        name: "Crimson red classic corset",
        image: "../imgs/redcorset.webp",
        price: 450,
        style: "classic"
    },
    {
        id: 6,
        name: "Black and gold corset",
        image: "../imgs/black&goldcorset.webp",
        price: 380,
        style: "classic"

    },
    {
        id: 7,
        name: "White floral casual",
        image: "../imgs/lace-up-floral-corset-top-anotherchill-1_800x.webp",
        price: 320,
        style: "casual"

    },
    {
        id: 8,
        name: "cottagecore corset with sleeves",
        image: "../imgs/cottagecore.webp",
        price: 300,
        style: "casual"

    },
    {
        id: 9,
        name: "Black & blue corset with sleeves",
        image: "../imgs/black&bluecorsetwlacesleeves.webp",
        price: 250,
        style: "sleeves"

    },
    {
        id: 10,
        name: "White & gold corset",
        image: "../imgs/goldcorsetwlacesleeves.webp",
        price: 200,
        style: "sleeves"

    },
]));

// getItem = fetches data from local storage
// JSON.parse = convert the data to a JSON data in the local storage
 x = JSON.parse(localStorage.getItem('catalogue'));

console.log(x);



// product list in cards
let pCards = document.getElementById('cards');



function display(){
 
    try {
        x.forEach((item)=>{
        pCards.innerHTML += `
        <div class="card col-3" style="width: 17rem;">
                    <img src="${item.image}">
                <div class="card-body">
                    <h3 class="card-title"> ${item.name}</h3>
                    <p><b>Style: ${item.style}</b></p>
                    <h5>Price: R ${item.price}</h5>
                    <button class="btn btn-outline-dark" style="background-color: rgb(209, 143, 185);">Add to checkout</button>
                </div>
            </div>` })
    } catch (error) {
        console.log(error);
    }
}
display();


// Trying to filter

// start with assigning a value to that ID
let styleFilter = document.getElementById('filter');


styleFilter.addEventListener('change',(e)=>{
    console.log(e.target.value)
    let filteredCards = x.filter(item =>{
// return condition === (e.target.value means its targeting the options in the dropdown select)
        return item.style === e.target.value
    })

    pCards.innerHTML ="";   
    Object.keys(filteredCards).forEach((item)=>{
        console.log(filteredCards)
        pCards.innerHTML +=`
        <div class="card col-3" style="width: 17rem;">
                                <img src="${filteredCards[item].image}">
                            <div class="card-body">
                                <h3 class="card-title"> ${filteredCards[item].name}</h3>
                                <p><b>Style: ${filteredCards[item].style}</b></p>
                                <h5>Price: R ${filteredCards[item].price}</h5>
                                <button class="btn btn-outline-dark" style="background-color:  rgb(209, 143, 185);">Add to checkout</button>
                            </div>
                        </div>`

    })
    console.log(filteredCards);
})



