let cartCount = 0;

document.querySelectorAll(".product button").forEach(function(button, index){

  
    cartCount++;

    document.querySelector(".cart span").innerText = cartCount;

    
  });

});


document.querySelector(".cart").addEventListener("click", function(){

  alert("Cart में " + cartCount + " product है।");

});


document.querySelector(".search input").addEventListener("input", function(){

  let searchText = this.value.toLowerCase();

  document.querySelectorAll(".product").forEach(function(product){

    let productName =
      product.querySelector("h3").innerText.toLowerCase();

    if(productName.includes(searchText)){

      product.style.display = "";

    }else{

      product.style.display = "none";

    }

  });

});
