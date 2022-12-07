// Product data
let all = [
    {
        "id": 1,
        "Image": "./imgs/54279e55845716e115af9f45943ec0bc.jpg",
        "price": "R300",
        "Style": "ethereal"

    },
    {
        "id": 2,
        "Image": "./imgs/416d7a5f78ace1f15cae43d22f4c04fc.jpg",
        "price": "R300",
        "Style": "ethereal"

    },
    {
        "id": 3,
        "Image": "./imgs/blksteampunk.webp",
        "price": "R400",
        "Style": "steampunk"

    },
    {
        "id": 4,
        "Image": "./imgs/brwnsteampunk.webp",
        "price": "R350",
        "Style": "steampunk"

    },
    {
        "id": 5,
        "Image": "./imgs/redcorset.webp",
        "price": "R420",
        "Style": "classic"

    },
    {
        "id": 6,
        "Image": "./imgs/black&goldcorset.webp",
        "price": "R300",
        "Style": "classic"

    },
    {
        "id": 7,
        "Image": "./imgs/lace-up-floral-corset-top-anotherchill-1_800x.webp",
        "price": "R300",
        "Style": "casual"

    },
    {
        "id": 8,
        "Image": "./imgs/cottagecore.webp",
        "price": "R300",
        "Style": "casual"

    },
    {
        "id": 9,
        "Image": "./imgs/blkcasual.webp",
        "price": "R300",
        "Style": "casual"

    },
    {
        "id": 10,
        "Image": "./imgs/black&bluecorsetwlacesleeves.webp",
        "price": "R300",
        "Style": "sleeves"

    },
    {
        "id": 11,
        "Image": "./imgs/goldcorsetwlacesleeves.webp",
        "price": "R300",
        "Style": "sleeves"

    },
    {
        "id": 12,
        "Image": "./imgs/black&bluecorsetwlacesleeves.webp",
        "price": "R500",
        "Style": "sleeves"

    }
]
// syntax for a conditional operator( conditional ? expression_when_true : expression_when_false;)
// Sample Data
// Using stringify to adjust the data in the ideal form for this js file
let products = JSON.parse(localStorage.getItem('all')) ?
JSON.parse(localStorage.getItem('all')):
JSON.parse(localStorage.setItem("all", JSON.stringify(all)));



// // Nav bar
// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarlinks = document.getElementsByClassName('navbar-links')[0]

// // In the event where the togglebutton is clicked, the navbar links will display
// toggleButton.addEventListener('click', ()=>{
//     navbarlinks.classList.toggle('active')
// })

// filter option
// function filterCard("all") {
    
// };




// Admin


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