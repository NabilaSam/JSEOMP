// let all = JSON.parse(localStorage.getItem('all'));

let tbody = document.getElementById('catalogue');


async function fetchData(){
    let res =await fetch('../catalogue.json');
    let data = await res.json();
    return data.all;
};
async function display(){
    let data = await fetchData();
    data.forEach(item => {
        tbody.innerHTML += `
        <tr>
          <td>${item.name}</td>
          <td> ${item.id}</td>
          <td> ${item.price}</td>
          <td> ${item.style}</td>
          <td> <button id="Editbtn">Edit</button>
          <button id="dltbtn">Delete</button></td>
      </tr> `
});
};

display();

// Table

// function display(){
    
//         console.log(all);
//         tbody.innerHTML ="";
//         all.forEach(item => {
//             tbody.innerHTML += `
//             <tr>
//               <td> <img src="${item.Image}" width="30px" alt="pics"></td>
//               <td> ${item.id}></td>
//               <td> ${item.price}></td>
//               <td> ${item.Style}></td>
//           </tr> `
//         });
    
// };
// display();