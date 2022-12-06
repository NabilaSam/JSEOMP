// // Nav bar
// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarlinks = document.getElementsByClassName('navbar-links')[0]

// // In the event where the togglebutton is clicked, the navbar links will display
// toggleButton.addEventListener('click', ()=>{
//     navbarlinks.classList.toggle('active')
// })

// filter option
filterCard("all") function filterCard...filterCard



// Admin page
fetch('./catalogue.json')
.then((res)=>{
    // use the .json method to convert the json data to a js object
    return res.json();
})
// (function as argument) now fetch the products
.then((catalogue)=>{
    // use the id added to the table on admin page
    let cat = document.querySelector("#catalogue");
    // set its value to an empty string
    let displaycat = "";
})