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
    var output = result.join(", ");
  
    // Set the value of the output field
    document.querySelector(".list3").value = output;
  }

  function wooLayout() {
    // Get the input value
    var list4 = document.querySelector(".list4").value;
  
    // Convert the input list to an array
    var array4 = list4.split(/[, ]+/);
  
    // Generate the desired output format
    var output2 = array4.join("\n");
  
    // Set the value of the output field
    document.querySelector(".list5").value = output2;
  }

  function copyList3() {
    var list3 = document.querySelector(".list3");
    list3.select();
    document.execCommand("copy");
  }
  
  function copyList5() {
    var list5 = document.querySelector(".list5");
    list5.select();
    document.execCommand("copy");
  }
  
  function pasteList1() {
    var list1 = document.querySelector(".list1");
    navigator.clipboard.readText().then(function (text) {
      list1.value = text;
    });
  }
  
  function pasteList2() {
    var list2 = document.querySelector(".list2");
    navigator.clipboard.readText().then(function (text) {
      list2.value = text;
    });
  }
  
  function pasteList4() {
    var list4 = document.querySelector(".list4");
    navigator.clipboard.readText().then(function (text) {
      list4.value = text;
    });
  }