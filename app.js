// add to cart
let productsCountEl = document.querySelector(".products-count");
console.log(productsCountEl);

let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");
console.log(addToCartBtns);

addToCartBtns.forEach(item => (
    item.addEventListener("click", function() {
        // console.log("clicked");
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
));


// change like buttons state 
let likeBtns = document.querySelectorAll(".btn-like");
console.log(likeBtns);

likeBtns.forEach((btn) => 
    btn.addEventListener("click", function () {
        btn.classList.toggle("liked");
    })
);


// modal block appeared disappeared
let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

moreDetailsBtns.forEach(item => item.addEventListener("click", openModal ));
    
btnClose.addEventListener("click", closeModal);

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
} 

modal.addEventListener("click", function (e) {
   if(e.target === modal) {
    closeModal();
   }
});


// Show modal by scroll by 50% 
function showModalbyScroll () {
    if (window.pageYOffset >= document.body.scrollHeight / 2) {
        openModal();
        window.removeEventListener("scroll", showModalbyScroll);
    }   
}

window.addEventListener("scroll", showModalbyScroll);
// console.log(document.body.scrollHeight) 


// 1-var Change product quantity 

// let minCount = 1;
// let maxCount = 10;


// function toggleButtonsState(count, decrementBtn, incrementBtn) {
//     decrementBtn.disabled = count <= minCount;
//     incrementBtn.disabled = count >= maxCount;
// }

// quantityInput.forEach((item,i) =>  
//     toggleButtonsState(item.value, decrementBtns[i], incrementBtns[i])
// );

// // 
// incrementBtns.forEach((item, i) => 
//     item.addEventListener("click", function () {
//         let currentValue = +quantityInput[i].value;
//         let nextValue = currentValue + 1;
//         quantityInput[i].value = nextValue;
//         toggleButtonsState(nextValue, decrementBtns[i], item);
//     })
// );
  
// decrementBtns.forEach((item, i) => 
//     item.addEventListener("click", function () {
//        let currentValue = +quantityInput[i].value;
//        let nextValue = currentValue - 1;
//        quantityInput[i].value = nextValue;
//        toggleButtonsState(nextValue, item, incrementBtns[i]);
//     })   
// );

// ==== slider slick
$(".slider-block").slick({
    dots: true,
});

// 2-var Change product ====  Counter function constructor
// === this/L24
let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInput = document.querySelectorAll(".product-quantity input");

function Counter(
    incrementBtn, 
    decrementBtn, 
    inputField,
    minCount = 1,
    maxCount = 5
) {
    this.domRefs = {
      incrementBtn,
      decrementBtn,
      inputField,
    };

    this.toggleButtonsState = function () {
        let count = this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count <= minCount;
        this.domRefs.incrementBtn.disabled = count >= maxCount;
    };

    this.toggleButtonsState();

    this.increment = function () {
        console.log(this)
        let currentValue = +this.domRefs.inputField.value;
        let nextValue = currentValue + 1;
        this.domRefs.inputField.value = nextValue;
        this.toggleButtonsState();
    };

    this.decrement = function () {
        let currentValue = +this.domRefs.inputField.value;
        let nextValue = currentValue - 1;
        this.domRefs.inputField.value = nextValue;
        this.toggleButtonsState();
    };

    this.domRefs.incrementBtn.addEventListener("click",
        this.increment.bind(this)
    );
    this.domRefs.decrementBtn.addEventListener("click",
        this.decrement.bind(this)
    );
}
  
//   const counter = new Counter(incrementBtns, decrementBtns, quantityInput);
  
//   console.log(counter);

let counters = [];

quantityInput.forEach(
    (countItem, i) =>
    (counters[i] = new Counter(incrementBtns[i], decrementBtns[i], countItem))
  );


// exp =======> function constructor
// let audi = {
//     year:"2013",
//     model:"A4";
//     color:"black",
// }

// let bmw = {
//     year:"2011",
//     model:"328";
//     color:"grey",
// }

// function Car (year, model, color) {
//     this.year = year;
//     this.model = model;
//     this.color = color;
// }

// let audi = new Car("2014", "A4", "black");
// let audi = new Car("2014", "A5", "black");
// console.log(audi);
// console.log(audiA5);
// ================<


// exp =========> function constructor
// function Calculator (a, b) {
//     this.a = a;
//     this.b = b;
//     this.sum = function() {
//         return this.a + this.b;
//     };

//     this.mul = function() {
//         return this.a * this.b;
//     };
// }
// let calc1 = new Calculator(5, 15);

// console.log(calc1.sum());
// console.log(calc1.mul());
// =================<



// like dislike variant ==== #1
// likeBtns.forEach((btn) => btn.addEventListener("click", function () {
//     if(btn.classList.contains('liked')) {
//         btn.classList.remove("liked")
//     } else {
//         btn.classList.add("liked");
//     }
// }));



// likeBtns.forEach((btn) => 
//     btn.addEventListener("click", function (e) {
//         console.log(e.target);
//         e.target.style.background = "red";
        // console.log("liked");
        // console.log(this);
        // this.style.background = "red";
        // btn.style.background = "red";
//     })
// );
    
// btn-add-to-cart.addEventListener("click", function () {
//     e.preventDefault();
//     productsCountEl.textContent = +productsCountEl.textContent + 1;
//     })
// );   

