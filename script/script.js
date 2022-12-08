// Product data
// stringify will convert the objects to a string in the localstorage

localStorage.setItem('catalogue', JSON.stringify([
    {
        "id": 1,
        "name": "Black lace corset",
        "image": "../imgs/54279e55845716e115af9f45943ec0bc.jpg",
        "price": "300",
        "style": "ethereal"
    },
    {
        "id": 2,
        "name": "Floral lace corset",
        "image": "../imgs/416d7a5f78ace1f15cae43d22f4c04fc.jpg",
        "price": "420",
        "style": "ethereal"
    },
    {
        "id": 3,
        "name": "Black steampunk corset",
        "image": "../imgs/blksteampunk.webp",
        "price": "500",
        "style": "steampunk"
    },
    {
        "id": 4,
        "name": "Brown steampunk corset",
        "image": "../imgs/brwnsteampunk.webp",
        "price": "500",
        "style": "steampunk"
    },
    {
        "id": 5,
        "name": "Crimson red classic corset",
        "image": "../imgs/redcorset.webp",
        "price": "450",
        "style": "classic"
    },
    {
        "id": 6,
        "name": "Black and gold corset",
        "image": "../imgs/black&goldcorset.webp",
        "price": "380",
        "style": "classic"

    },
    {
        "id": 7,
        "name": "White floral casual",
        "image": "../imgs/lace-up-floral-corset-top-anotherchill-1_800x.webp",
        "price": "320",
        "style": "casual"

    },
    {
        "id": 8,
        "name": "cottagecore corset with sleeves",
        "image": "../imgs/cottagecore.webp",
        "price": "300",
        "style": "casual"

    },
    {
        "id": 9,
        "name": "Black & blue corset with sleeves",
        "image": "../imgs/black&bluecorsetwlacesleeves.webp",
        "price": "250",
        "style": "sleeves"

    },
    {
        "id": 10,
        "name": "White & gold corset",
        "image": "../imgs/goldcorsetwlacesleeves.webp",
        "price": "200",
        "style": "sleeves"

    },
]));

// getItem = fetches data from local storage
// JSON.parse = convert the data to a JSON data in the local storage
let x = JSON.parse(localStorage.getItem('catalogue'));

console.log(x);

let products = JSON.parse(localStorage.getItem('catalogue'))? 
JSON.parse(localStorage.getItem('catalogue')):
JSON.parse(localStorage.setItem("catalogue", JSON.stringify(catalogue)));

// product list in cards
let pCards = document.getElementById('cards');

function display(){
    try {
        products.forEach((item)=>{
        pCards.innerHTML += `
        <div class="card col-3" style="width: 17rem;">
                    <img src="${item.image}">
                <div class="card-body">
                    <h3 class="card-title"> ${item.name}</h3>
                    <p><b>Style: ${item.style}</b></p>
                    <h5>Price: R ${item.price}</h5>
                    <button class="btn btn-outline-dark" style="background-color: rgb(222, 101, 178);">Add to checkout</button>
                </div>
            </div>` })
    } catch (error) {
        console.log(error);
    }
}
display();

// syntax for a conditional operator( conditional ? expression_when_true : expression_when_false;)
// Sample Data
// Using stringify to adjust the data in the ideal form for this js file. chrck local storage in browser
// let products = JSON.parse(localStorage.getItem('all')) ?
// JSON.parse(localStorage.getItem('all')):
// JSON.parse(localStorage.setItem("all", JSON.stringify(all)));




// ...
// fetch('./catalogue.json')
// .then((res)=>{
//     // use the .json method to convert the json data to a js object
//     return res.json();
// })
// // (function as argument) now fetch the products
// .then((catalogue)=>{
//     let tbody = document.querySelector('tbody');
//     // console.log(catalogue);
//     for (const data of catalogue) {
//         console.log(data);
//         tbody.innerHTML += 
//         ` <tr>
//         <td> <img src="${data.Image}" alt=""></td>
//         <td> ${data.id}></td>
//         <td> ${data.price}></td>
//         <td> ${data.Style}></td>
//           </tr>
//          `
//     })
// ...



        // if(catalogue.length){
        //     console.log(`${catalogue[item]}`);
        //     tbody.innerHTML +=
        //     `<tr>
        //     <td> <img src='${catalogue.Image}' </td>
        //     <td> ${catalogue.Style} </td>
        //     <td> ${catalogue.id} </td>
        //     <td> ${catalogue.price} </td>
        //  </tr>`
        // }
    
    // catalogue.forEach( (item)=>{
    //     console.log(catalogue);
    //     if(catalogue[item].length){
    //         console.log(`${item}: ${catalogue[item]}`);
    //         tbody.innerHTML +=
    //         `<tr>
    //         <td> <img src='${catalogue.Image}' </td>
    //         <td> ${catalogue.Style} </td>
    //         <td> ${catalogue.id} </td>
    //         <td> ${catalogue.price} </td>
    //      </tr>`
    //     }
    // })


    // let products = JSON.parse(localStorage.getItem(''))
    // use the id added to the table on admin page
    // let cat = document.querySelector("#catalogue");
    // set its value to an empty string
    // This will hold all the products from the catalogue
    // let displaycat = "";

    // for (let i=0; i < id.length; i++){
    //     displaycat += `
    //     <tr>
    //         <td> <img src='${catalogue.image}' </td>
    //         <td> ${catalogue.style} </td>
    //         <td> ${catalogue.image} </td>
    //         <td> ${catalogue.price} </td>
    //     </tr>`;
    // }
    // cat.innerHTML = displaycat;
    // // 'For loop' for displaying ALL content in array
    // // For loop = (executed before the code block{stuff between curly brakcets}; defines the condition for executing the code block; executed(every time) after code block has been executed(usually the i++))
    // function createHTML(arr){
    //     // declare const 
    //     const table = document.getElementById('catalogue');
    //     table.innerHTML =''; arr.array.forEach(element => {table.innerHTML += `
    //     <tr>
    //         <td> <img> ${cat.image} </img> </td>
    //         <td> ${catalogue.style} </td>
    //         <td> ${catalogue.image} </td>
    //     </tr>`
            
    //     });
    // for (let i=0; i < id.length; i++){
        
    // }}


/* Joel sent sample data example

let products = 
JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')):

*/
