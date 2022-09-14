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

            document.querySelector(".change-sec")
            .style.display = "block";
    });



    //fetch data
    const url = 'https://datausa.io/api/data?measures=Population';

fetch(url) 
.then(res => res.json())
.then((product) => {

    let test = document.querySelector('#test1')
    test.innerHTML = product.data[0].Year;

    let test2 = document.querySelector('#test2')
    test2.innerHTML = product.data[0].Population;

    let test3 = document.querySelector('#test3')
    test3.innerHTML = product.data[1].Year;

    let test4 = document.querySelector('#test4')
    test4.innerHTML = product.data[1].Population;

    let test5 = document.querySelector('#test5')
    test5.innerHTML = product.data[2].Year;

    let test6 = document.querySelector('#test6')
    test6.innerHTML = product.data[2].Population;

    let test7 = document.querySelector('#test7')
    test7.innerHTML = product.data[3].Year;

    let test8 = document.querySelector('#test8')
    test8.innerHTML = product.data[3].Population;

    let test9 = document.querySelector('#test9')
    test9.innerHTML = product.data[4].Year;

    let test10 = document.querySelector('#test10')
    test10.innerHTML = product.data[4].Population;

    let test11 = document.querySelector('#test11')
    test11.innerHTML = product.data[5].Year;

    let test12 = document.querySelector('#test12')
    test12.innerHTML = product.data[5].Population;

    let test13 = document.querySelector('#test13')
    test13.innerHTML = product.data[6].Year;

    let test14 = document.querySelector('#test14')
    test14.innerHTML = product.data[6].Population;

    let test15 = document.querySelector('#test15')
    test15.innerHTML = product.data[7].Year;

    let test16 = document.querySelector('#test16')
    test16.innerHTML = product.data[7].Population;
    


    });
})
