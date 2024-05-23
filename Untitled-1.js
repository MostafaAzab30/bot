
// let newX = 0, newY = 0, startX = 0, startY = 0;

// let card = document.querySelectorAll('.card')



// card.forEach((item) => {
    
//     item.addEventListener("mousedown" , (e) => {

//         startX = e.clientX
//         startY = e.clientY
        
//         document.addEventListener('mousemove' , mouseMove)
//         document.addEventListener('mouseup' , mouseUp)
        
        


// })

// });






// function mouseMove(e) {
    
// newX = startX - e.clientX
// newY = startY - e.clientY

// startX =  e.clientX
// startY =  e.clientY

// card.style.top = startY + 'px'
// card.style.left = startX + 'px'

// console.log({newX,newY})
// console.log({startX,startY})




// }

// function mouseUp(e) {
    
// document.removeEventListener('mousemove' , mouseMove)

    
// }



const elements = document.querySelectorAll(".element")

var chooseElement;

const move = function(element) {
    


elements.forEach(element => {

element.addEventListener("mousedown" , () => {

element.style.position = "absolute"
chooseElement = element

document.onmousemove = (e) => {

var x = e.pageX
var y = e.pageY

chooseElement.style.left = x + "px"
chooseElement.style.top = y + "px"

console.log(chooseElement)

}

})

})

document.onmouseup = function (e) {
    chooseElement = null


}


}
















const news = document.getElementById("news")

const anita = [
    `<div id="" class="rounded p-3 colored  col-2 element">


    <div class="bg-white px-3 py-2 aligno">
    <h4 class=""><i class="fa-solid fa-person-walking"></i> Start Bot Flow</h4>
    <br>
    <button class="btn btn-outline-success rounded w-100" type="submit">FFF</button>
    <br>
    <br>
    <p class="hevo">لمتابعة التسجيل اضغط</p>
    <p class="hevo">Edit Keyword Match</p>
    <p class="hevo">Add Product</p>
    <p class="hevo">Lorem, ipsum.</p>
    <p class="hevo">Lorem, ipsum.</p>
    <p class="hevo">Lorem, ipsum.</p>
    </div>
    
    <div class="lefts mt-2">
    <p id="news" class="">Compose Next Message <input id="" type="radio"></p>
    </div>
    
    
    </div>`
    ]

    news.addEventListener("click" , () => {

        elements.innerHTML += anita
        
        
        
    
    
    })












































