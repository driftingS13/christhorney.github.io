function compute() {
    // Get the input values
    var list1 = document.querySelector(".list1").value;
    var list2 = document.querySelector(".list2").value;
  
    // Convert the input lists to arrays
    var array1 = list1.split(/[, ]+/);
    var array2 = list2.split(/[, ]+/);
  
    // Remove duplicates from array1 that exist in array2
    var result = array1.filter(item => !array2.includes(item));
  
    // Convert the resulting array to the desired format
    //var output = result.join(", ");
  
    // Set the value of the output field
    document.querySelector(".list3").value = output;
  }