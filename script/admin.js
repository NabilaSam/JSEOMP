// let all = JSON.parse(localStorage.getItem('all'));

let tbody = document.getElementById('tabulated');
// Table
let catalogue= JSON.parse(localStorage.getItem('catalogue'));

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
          style="background-color:  rgb(209, 143, 185); 
          color: black;" id="editBtn">Edit</button>
          <button onclick="del(${item.id})" 
          id="dltbtn" class="btn btn-secondary btn-lg" 
          style="background-color:rgb(203, 14, 61);
          color: black;">Delete</button>
          </td>
      </tr> `

        } catch (error) {
            console.log(error)
        }
     } );  
    
}

print()

// Add button

function addItem(){
        // append the data to ur local storage. and set the item, and then you need to getitem and then build the table row
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
        localStorage.setItem('catalogue', JSON.stringify(catalogue));
    
        // getitem and then display row
      
        tbody.innerHTML = ''
        print()
}


// edit button
function edit(name, price, style, image){
    // localStorage.setItem('catalogue',JSON.stringify(catalogue));
    this.name = name,
    this.price = price,
    this.style = style,
    this.style = image
}

let editBtn = document.getElementById('editBtn');

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
