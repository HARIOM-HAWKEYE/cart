

let incrBtn1 = document.querySelector(".incr1");
let qntty1 = document.querySelector(".QNT1");
let qntty2 = document.querySelector(".QNT2");
let qntty3 = document.querySelector(".QNT3");
let qntty4 = document.querySelector(".QNT4");
let dicrBtn1 = document.querySelector(".dicr1");
let incrBtn2 = document.querySelector(".incr2");
let incrBtn3 = document.querySelector(".incr3");
let incrBtn4 = document.querySelector(".incr4");
let dicrBtn2 = document.querySelector(".dicr2");
let dicrBtn3 = document.querySelector(".dicr3");
let dicrBtn4 = document.querySelector(".dicr4");



let count1 = 0;



incrBtn1.addEventListener("click", ()=> {
        count1++;
        qntty1.innerHTML = count1;
        cartContainerActive();
        cartProd1();
        cartProd5();
        price1();
  
});

dicrBtn1.addEventListener("click", ()=> {
    if(count1 >= 1) {
     count1--;
     qntty1.innerHTML = count1;
     price1();

 }
    if(count1 === 0) {
        cartProd1Hide();
    }
});



let count2 = 0;



incrBtn2.addEventListener("click", ()=> {
        count2++;
        qntty2.innerHTML = count2;
        cartContainerActive();
        cartProd2();
        cartProd5();
        price2();

});

dicrBtn2.addEventListener("click", ()=> {
    if(count2 >= 1) {
    count2--;
    qntty2.innerHTML = count2;
    price2();

 }
 if(count2 === 0) {
    cartProd2Hide();
}

});




let count3 = 0;



incrBtn3.addEventListener("click", ()=> {
        count3++;
        qntty3.innerHTML = count3;
        cartContainerActive();
        cartProd3();
        cartProd5();
        price3();
     
});

dicrBtn3.addEventListener("click", ()=> {
    if(count3 >= 1) {
    count3--;
    qntty3.innerHTML = count3;
    price3();

 }
 if(count3 === 0) {
    cartProd3Hide();
}

});



let count4 = 0;



incrBtn4.addEventListener("click", ()=> {
        count4++;
        qntty4.innerHTML = count4;
        cartContainerActive();
        cartProd4();
        cartProd5();
        price4();

});

dicrBtn4.addEventListener("click", ()=> {
    if(count4 >= 1) {
    count4--;
    qntty4.innerHTML = count4;
    price4();

 }
 if(count4 === 0) {
    cartProd4Hide();
}

});


let hide = document.querySelector(".hide");
let cProd = document.querySelectorAll(".cProd");
let cTxt = document.querySelector(".cTxt");


let cartContainerActive = ()=>{
    hide.style.display = "block";
    hide.style.paddingLeft = "40px"
    hide.style.paddingRight = "10px"
    cTxt.marginRight = "10px";
    cProd.forEach((div)=>{
        div.style.marginTop = "20px";
    })
}


let cartContainerUnActive = ()=>{
    hide.style.display = "none";
}




let cProd1 = document.querySelector(".cProd1");
let cProd2 = document.querySelector(".cProd2");
let cProd3 = document.querySelector(".cProd3");
let cProd4 = document.querySelector(".cProd4");
let cProd5 = document.querySelector(".cProd5");

let prodDetail1 = document.querySelector(".pDetail1");
let prodDetail2 = document.querySelector(".pDetai2");
let prodDetail3 = document.querySelector(".pDetail3");
let prodDetail4 = document.querySelector(".pDetail4");


let prodQnt1 = document.querySelector(".pQntDetail1");
let prodQnt2 = document.querySelector(".pQntDetai2");
let prodQnt3 = document.querySelector(".pQntDetail3");
let prodQnt4 = document.querySelector(".pQntDetail4");


let prodPrice1 = document.querySelector(".pPDetail1");
let prodPrice2 = document.querySelector(".pPDetail2");
let prodPrice3 = document.querySelector(".pPDetail3");
let prodPrice4 = document.querySelector(".pPDetail4");


let cartProd1 = ()=>{
    cProd1.style.display = "flex";
 
}

let cartProd2 = ()=>{
    cProd2.style.display = "flex";
}

let cartProd3 = ()=>{
    cProd3.style.display = "flex";
}

let cartProd4 = ()=>{
    cProd4.style.display = "flex";
}

let cartProd5 = ()=>{
    cProd5.style.display = "flex";
}




let cartProd1Hide = ()=>{
    cProd1.style.display = "none";
}

let cartProd2Hide = ()=>{
    cProd2.style.display = "none";
}

let cartProd3Hide = ()=>{
    cProd3.style.display = "none";
}

let cartProd4Hide = ()=>{
    cProd4.style.display = "none";
}


let item1 = document.querySelector(".prQnt1");
let item1Price = item1.getAttribute('data-price');

let item2 = document.querySelector(".prQnt2");
let item2Price = item2.getAttribute('data-price');

let item3 = document.querySelector(".prQnt3");
let item3Price = item3.getAttribute('data-price');

let item4 = document.querySelector(".prQnt4");
let item4Price = item4.getAttribute('data-price');




let price1 = ()=>{
    prodQnt1.innerText = count1 + " x " + item1Price;
    prodPrice1.innerHTML = count1 * item1Price;
    totalSumAndPrice();
}

let price2 = ()=>{
    prodQnt2.innerText = count2 + " x " + item2Price;
    prodPrice2.innerHTML = count2 * item2Price;
    totalSumAndPrice();
}

let price3 = ()=>{
    prodQnt3.innerText = count3 + " x " + item3Price;
    prodPrice3.innerHTML = count3 * item3Price;
    totalSumAndPrice();
}

let price4 = ()=>{
    prodQnt4.innerText = count4 + " x " + item4Price;
    prodPrice4.innerHTML = count4 * item4Price;
    totalSumAndPrice();
}


let hideCart = ()=>{
    hide.style.display = "none";
}




let totalProduct = document.querySelector(".pDetail");
let totalPrice = document.querySelector(".pPDetail");

let totalSumAndPrice = ()=> {
    let sumOfProd  = count1 + count2 + count3 + count4;
    let sumOfPrice = (count1 * item1Price) +  (count2 * item2Price) + (count3 * item3Price) + (count4 * item4Price);
    totalProduct.innerHTML = "Total Product : " + sumOfProd;
    totalPrice.innerHTML = "Total Price : " + sumOfPrice;
    if(sumOfPrice == 0 && sumOfProd == 0) {
        hideCart();
    }
    
}
