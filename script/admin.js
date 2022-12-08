// let all = JSON.parse(localStorage.getItem('all'));

let tbody = document.getElementById('products');
// Table
let catalogue= JSON.parse(localStorage.catalogue)

    catalogue.forEach(item => {
        try {
            tbody.innerHTML += `
        <tr>
          <th scope="row"><img src="${item.image}" style="width: 40px;"></th>
          <td>${item.name}</td>
          <td> ${item.price}</td>
          <td> ${item.style}</td>
          <td> <button class="btn btn-secondary btn-lg" 
          style="background-color: rgb(181, 218, 181); 
          color: black;" id="Editbtn">Edit</button>
          <button id="dltbtn" class="btn btn-secondary btn-lg" 
          style="background-color: rgb(181, 218, 181); 
          color: black;">Delete</button>
          </td>
      </tr> `

        } catch (error) {
            console.log(error);
        }
     } );  
 


// Add button
let add = document.querySelector('#addBtn')
add.addEventListener('click', (e)=>{
    e.preventDefault();
    let name =  document.querySelector('#addName').value;
    let price = document.querySelector('#addPrice').value;
    let style = document.querySelector('#addStyle').value;

    catalogue.push({
        name,
        price,
        style
    })
    console.log(catalogue.at(-1))
    localStorage.setItem('products', JSON.stringify(catalogue));

})

// delete button

function remove(id){
    cart = JSON.parse(catalogue.getItem(""))
}

// // METHOD 1
// function remove(id){
//     localStorage.setItem('catalogue', JSON.stringify(catalogue));
//     document.querySelector('#dltbtn');
//     catalogue.splice(id-1, 1)
//     localStorage.setItem('catalogue', JSON.stringify(catalogue))
// }