
var Person = function(firstAndLast) {
  var name = firstAndLast, arr = firstAndLast.split(" ");
  
this.getFirstName = function(){
  return arr[0];
};
this.getLastName = function(){
  return arr[1];
};
this.getFullName = function(){
  return name;
};
this.setFirstName = function(first){
  arr[0] = first;
  name = arr.join(" ");
};
this.setLastName = function(last){
  arr[1] = last;
  name = arr.join(" ");
};
this.setFullName = function(firstAndLast){
    name =  firstAndLast;
    arr = name.split(" ");
  };  
};

var bob = new Person('Bob Ross');
bob.getFullName(); //test case