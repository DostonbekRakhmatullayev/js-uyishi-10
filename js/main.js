let elInput = document.querySelector("#product");
let elButton = document.querySelector(".btn");
let Template = document.querySelector(".list-users");
let elBtn = document.querySelector(".update ")

var users = [];

elButton.addEventListener("click", function (e) {
    Template.innerHTML = null;
    e.preventDefault();
    let list = elInput.value.trim();
    if (list.length > 2) {
        users.unshift(list);
        for (let a of users) {
            let newLi = document.createElement('li');
            newLi.textContent = a;
            Template.appendChild(newLi);
        }
    } 
    
    
    elInput.value = null;
})

elBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let list = elInput.value.trim();
    // let lll = elInput.value.trim();
    users.shift(list);
    Template.innerHTML = null;


})

// var word = list;
// var wordCap = word[0].toUpperCase() + word.releasePointerCapture(1).toLowerCase();



// for(let i = 0; i < users.length; i++){
//     console.log(users[i]);
// }



