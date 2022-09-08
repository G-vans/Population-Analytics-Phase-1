window.addEventListener('DOMContentLoaded', () => {
    
// Get the modal
var modal = document.getElementById('id01');


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//click event listener
let btn_element = document.getElementById("btn-analys1");
  
  
        btn_element.addEventListener("click", () => {
            document.getElementById("main-table")
                .style.display = "block";
        });

//fetch data
let url = "http://localhost:3000/Sheet1"

fetch(url)
.then(res => res.json())
    .then(function (products) {
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let product of products) {
            out += `
         <tr>
            <td>${product.Name}</td>
            <td>${product.Location}</td>
            <td>${product.Type}</td>
            <td>${product.Size}</td>
            <td>${product.Land}</td>
            <td>${product.Price}</td>
            <td>${product.Size}</td>
            <td>${product.Rent}</td>
            <td>${product.SC}</td>
            <td>${product.NetRent}</td>
            <td>${product.Yield}</td>

      `;
        }

        placeholder.innerHTML = out;
    });
})
