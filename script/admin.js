// let all = JSON.parse(localStorage.getItem('all'));

let tbody = document.getElementById('tabulated');
// Table
let catalogue= JSON.parse(localStorage.catalogue);
let x = JSON.parse(localStorage.catalogue)

// 
function print(){
 
// 
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
          <button onclick="del(${item.id})" id="dltbtn" class="btn btn-secondary btn-lg" 
          style="background-color: red; 
          color: black;">Delete</button>
          </td>
      </tr> `

        } catch (error) {
console.trace(error)        }
     } );  
    
}
print();


// Add button
let add = document.querySelector('#addBtn')
add.addEventListener('click', (e)=>{
    // append the data to ur local storage. and set the item, and then you need to getitem and then build the table row
    e.preventDefault();
    let name =  document.querySelector('#addName').value;
    let price = document.querySelector('#addPrice').value;
    let style = document.querySelector('#addStyle').value;
    let image = document.querySelector('#addImage').value;

    catalogue.push({
        name,
        price,
        style,
        image
    })
    // console.log(catalogue.at(-1))
    location.reload()
    localStorage.setItem('tabulated', JSON.stringify(catalogue));

    // location.reload();
    // getitem and then display row
    // let addedItem = JSON.parse(localStorage.getItem('catalogue'))

})

// delete button
// not getElementById because it will only select the first delete button
// with query selector all, it'll target all the delete buttons

function del(id) {
    localStorage.setItem('catalogue', JSON.stringify(catalogue));

    catalogue.splice(catalogue.findIndex(item=>item.id==id),1)
    
    console.log(catalogue)
    console.log(id)
    localStorage.setItem('catalogue',JSON.stringify(catalogue))
    console.log(JSON.parse(localStorage.catalogue));
    location.reload()
    
}

// // Delete button using splice and concat
// function del(index) {
//     let newcatalogue = catalogue.slice(0, index).concat(product.slice(index + 1))
//     localStorage.setItem('catalogue', JSON.stringify(newcatalogue))
//     catalogue =JSON.parse(localStorage.getItem('catalogue'))
//     loadAdmincatalogueList()
// }

// let del = document.querySelectorAll('#dltbtn');
// Object.keys(del).forEach(item => {
//     del[item].addEventListener('click', (e)=>{
//         let index = obj

//         if (del[obj] == x[obj]) {
//             x.splice(index,1)
//             localStorage.setItem('products', JSON.stringify(catalogue));
//             x = JSON.parse(localStorage.getItem('products'))
//         } else {
//             return alert('Cannot Delete, please consult Nabila')
//         }
//     })
// })



// // METHOD 1
// function remove(id){
//     localStorage.setItem('catalogue', JSON.stringify(catalogue));
//     document.querySelector('#dltbtn');
//     catalogue.splice(id-1, 1)
//     localStorage.setItem('catalogue', JSON.stringify(catalogue))
// }