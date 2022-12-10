let cart = JSON.parse(localStorage.getItem('checkout'))
console.log(cart);


tbody = document.querySelector('tbody');

Object.keys(cart).forEach((i) => {
    tbody.innerHTML +=
    `
    <tr>
        <td>${cart[i].name}</td>    
        <td>${cart[i].style}</td>    
        <td>R${cart[i].price}</td>    
        <td><button onclick="del(${cart[i].id})" 
        id="dltbtn" class="btn btn-secondary btn-lg" 
        style="background-color:rgb(203, 14, 61);
        color: black;">Delete</button></td>    
    </tr>
    `
})

// let g = [];

function del(id) {
    localStorage.setItem('catalogue', JSON.stringify(catalogue));

    catalogue.splice(catalogue.findIndex(item=>item.id==id),1)
    
    console.log(catalogue)
    console.log(id)
    localStorage.setItem('catalogue',JSON.stringify(catalogue))
    console.log(JSON.parse(localStorage.catalogue));
    location.reload()
}



