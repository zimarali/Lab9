var item1 = {name: "Apples", price: 2.99};
var item2 = {name: "Oranges", price: 3.49};
var item3 = {name: "Milk", price: 2.49};
var item4 = {name: "Cereal", price: 3.99};

var list = [item1, item2, item3, item4];

var total = 0;
//for(i=0; i<list.length;i++){
//list[i].name+" "+"$"+list[i].price

function displayList(){
  for(i=0; i<list.length;i++){
    document.getElementById("list").innerHTML += list[i].name+" "+"$"+list[i].price+"<br />";
}
};

function displayTotal(){
  console.log(list);
  for(i=0; i<list.length;i++){
      total = total + list[i].price;
    }
    document.getElementById("array").innerHTML = "Total "+"$"+ total;
};

//Function to add Name and Price to the exisiting array, does not work yet.
function addItem(){
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value*1;
  var newItems = {name: a, price: b};
  if (a !=''){
  list.push(newItems)}
};

/*function addPrice(){
  var b = document.getElementById('b');
  if (b.value !=''){
  list.price.push(b)};
};*/
