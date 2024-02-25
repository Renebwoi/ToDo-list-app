let itemBox = document.querySelector(".itemBox")
let addBtn =document.querySelector(".addItem")
let clearBtn = document.querySelector(".clearButton")
let textInpt = document.getElementById("searcher")

// addBtn.onclick = addit()
console.log("ghe")

function addit() {
    console.log(textInpt.value)
    itemBox.innerHTML += 
    `<article class="item">
    <div class="timeInfo">
        <div class="date">12/03/24</div>
        <div class="time">6:34</div>
        <div class="cancelButton">X</div>
    </div>
<hr>
    <div class="info">
        <p class="innerInfo">${textInpt.value}</p>
        <!-- <p class="message">two tea and 5 lemons</p> -->
    </div>
    
</article>`
}