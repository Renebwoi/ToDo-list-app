let itemBox = document.querySelector(".itemBox")
let addBtn =document.querySelector(".addItem")
let clearBtn = document.querySelector(".clearButton")
let textInpt = document.getElementById("searcher")
// let canceller = document.querySelectorAll(".cancelButton")
// addBtn.onclick = addit()
// console.log("ghe")

function addit() {
    // console.log(textInpt.value)
    itemBox.innerHTML += 
    `<article class="item">
    <div class="timeInfo">
        <div class="date">${formatDate(new Date())}</div>
        <div class="time">${formatAMPM(new Date())}</div>
        <div class="cancelButton" onclick="this.parentElement.parentNode.remove();">X</div>
    </div>
<hr>
    <div class="info">
        <p class="innerInfo">${textInpt.value}</p>
        <!-- <p class="message"  >two tea and 5 lemons</p> -->
    </div>
    
</article>`
}

// canceller.addEventListener('click', console.log("wheeee..."))

function cancel() {
    console.log("heyo")
    this.parentElement.style.display = 'none'
}

// canceller.addEventListener('click', function() {
//     this.closest('.item').style.display = 'none';
//   });

//   // Attach the event listener to each element
// canceller.forEach(function(element) {
//     element.addEventListener('click', myFunction);
//     console.log("jyu")
// });
// function myFunction() {
//     this.closest('.item').style.display = 'none';
//     console.log("omeuwe")
// }

function clearEverything() {
    itemBox.innerHTML = " "
}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

//   console.log(formatAMPM(new Date()));

  function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() +1;
    var year = date.getFullYear();
    
    var striTime = `${day}/${month}/${year}`;
    return striTime;
  }

  console.log("done")