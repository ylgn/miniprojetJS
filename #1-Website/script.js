function Product(idProduct, decription, quantity, price, region) {
    this.typeProduct;
    this.idProduct = idProduct;
    this.decription = decription;
    this.quantity = quantity;
    this.price = price;
    this.region = region;
    this.picture = "content/cow.jpg";
    Product.prototype.getTypeProduct = function () {return this.typeProduct;} 
    Product.prototype.getID = function () { return this.idProduct; }
    Product.prototype.setID = function (id) { this.idProduct = id; }
    Product.prototype.getDescription = function () { return this.decription; }
    Product.prototype.setDescription = function (des) { this.decription = des; }
    Product.prototype.getQuantity = function () { return this.quantity; }
    Product.prototype.setQuantity = function (qty) { this.quantity = qty; }
    Product.prototype.getPrice = function () { return this.price; }
    Product.prototype.setPrice = function (price) { this.price = price; }
    Product.prototype.getRegion = function () { return this.region; }
    Product.prototype.setRegion = function (r) { this.region = r; }
    Product.prototype.getPicture = function () { return this.picture; }
    Product.prototype.setPicture = function (path) { this.picture = path;}
    Product.prototype.toString = function () {
        return "Product n° " + this.idProduct + ", Nom : " + this.decription + ", Quantité en stock : " + this.quantity + ", Prix par unité : " + this.price + ", Origine :" + this.region;
}
};

function Fruit(idFruit, decription, quantity, price, region) {
    Product.call(this,"FR"+idFruit, decription, quantity, price, region);
    this.typeProduct = "fruit";
}

function Vegetable(idVegetable, decription, quantity, price, region) {
    Product.call(this,"VG" + idVegetable, decription, quantity, price, region);
    this.typeProduct = "vegetable";
}
function DiverProduct(idOther, decription, quantity, price, region) {
    Product.call(this,"DIV" + idOther, decription, quantity, price, region);
    this.typeProduct = "diver";
}


Fruit.prototype = Object.create(Product.prototype);
Fruit.prototype.constructor = Fruit;
Vegetable.prototype = Object.create(Product.prototype);
Vegetable.prototype.constructor = Vegetable;
DiverProduct.prototype = Object.create(Product.prototype);
DiverProduct.prototype.constructor = DiverProduct;


test = new Product("00", "Test Covid", 0, 10, "Poissy");
bananas = new Fruit("01", "Banane", 110, 2, "La Réunion");
watermelons = new Fruit("02","Melon",1000,3,"Maroc");
milk = new DiverProduct("01","Lait",1000,1,"Allemagne");
honey = new DiverProduct("02","Miel",1000,4,"Angleterre");
beans = new Vegetable("01","Poids",4,12,"Finistère");
mushromms = new Vegetable("02","Champignons",4,12,"Finistère");

var Products =[test,bananas,watermelons,milk,honey,beans,mushromms];
var numProd = 2;
  function getListByType(typeP){
    var typeArray = [];
    for (let index = 0; index < Products.length; index++) {
        if (Products[index].getTypeProduct() == typeP && Products[index].getQuantity()>0) {
            typeArray.push(Products[index]);
        }
    }return typeArray; 
  }

  function displayTabByType(typeP){
    var typeArray = getListByType(typeP);
    let nbProducts = typeArray.length;
    for (let index = 0; index < nbProducts; index++) {
        const p = typeArray[index];
        document.write("<tr>");
        document.write('<td><img src="'+p.getPicture()+'"></td>');
        document.write("<td>"+p.getID()+"</td>");
        document.write("<td>"+p.getDescription()+"</td>");
        document.write("<td>"+p.getQuantity()+"</td>");
        document.write("<td>"+p.getPrice()+"€</td>");
        document.write("<td>"+p.getRegion()+"</td>");
        document.write("</tr>");
    }
  }

  function addProduct(typeProduct,decription,quantity,price,region){
        if (typeProduct == "fruit") {
            Products.push(new Fruit(numProd++,decription,quantity,price,region));
        }
        if (typeProduct == "vegetable") {
            Products.push(new Vegetable(numProd++,decription,quantity,price,region));
        } else {
            Products.push(new DiverProduct(numProd++,decription,quantity,price,region));
        }
  }

    function deleteProduct(idProduct){
  	for (let index = 0; index < Products.length; index++) {
        if (Products[index].getID() == idProduct) {
           Products[index].setQuantity(0);
        }   
    }
  }

   function modifyProduct(idProduct,decription,quantity,price,region){
  	for (let index = 0; index < Products.length; index++) {
        if (Products[index].getID() == idProduct) {
           Products[index].setDescription(description)
           Products[index].setQuantity(quantity)
           Products[index].setPrice(price)
           Products[index].setRegion(quantity)
        }   
    }
  }

   function displayTabByAll(){
    Products
    for (let index = 0; index < Products.length; index++) {
        const p = Products[index];
        document.write("<tr>");
        document.write('<td><img src="'+p.getPicture()+'"></td>');
        document.write("<td>"+p.getID()+"</td>");
        document.write("<td>"+p.getDescription()+"</td>");
        document.write("<td>"+p.getQuantity()+"</td>");
        document.write("<td>"+p.getPrice()+"€</td>");
        document.write("<td>"+p.getRegion()+"</td>");
        document.write("</tr>");
    }
  }


 function displayTabByQuantityZero(){
    var typeArray = getListByStock();
    let nbProducts = typeArray.length;
    for (let index = 0; index < nbProducts; index++) {
        const p = typeArray[index];
        document.write("<tr>");
        document.write('<td><img src="'+p.getPicture()+'"></td>');
        document.write("<td>"+p.getID()+"</td>");
        document.write("<td>"+p.getDescription()+"</td>");
        document.write("<td>"+p.getQuantity()+"</td>");
        document.write("<td>"+p.getPrice()+"€</td>");
        document.write("<td>"+p.getRegion()+"</td>");
        document.write("</tr>");
    }
  }

  function getListByStock(){
    var typeArray = [];
    for (let index = 0; index < Products.length; index++) {
        if (Products[index].getQuantity() <1) {
            typeArray.push(Products[index]);
        }
    }return typeArray; 
  }



