// // Nav bar
// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarlinks = document.getElementsByClassName('navbar-links')[0]

// // In the event where the togglebutton is clicked, the navbar links will display
// toggleButton.addEventListener('click', ()=>{
//     navbarlinks.classList.toggle('active')
// })

// filter option
function filterCard("all") {
    
};




// Admin
fetch('./catalogue.json')
.then((res)=>{
    // use the .json method to convert the json data to a js object
    return res.json();
})
// (function as argument) now fetch the products
.then((catalogue)=>{
    let products = JSON.parse(localStorage.getItem(''))
    // use the id added to the table on admin page
    let cat = document.querySelector("#catalogue");
    // set its value to an empty string
    // This will hold all the products from the catalogue
    let displaycat = "";

    for (let i=0; i < id.length; i++){
        displaycat += `
        <tr>
            <td> <img src='${catalogue.image}' </td>
            <td> ${catalogue.style} </td>
            <td> ${catalogue.image} </td>
            <td> ${catalogue.price} </td>
        </tr>`;
    }
    cat.innerHTML = displaycat;
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
})

{/* Joel sent sample data example

let products = 
JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')):

*/}