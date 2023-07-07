function compute() {
    var list1 = document.querySelector(".list1").value;
    var list2 = document.querySelector(".list2").value;
  
    var array1 = list1.split(/[, ]+/);
    var array2 = list2.split(/[, ]+/);
  
    var result = array1.filter(item => !array2.includes(item));
  
    var output = result.join(", ");
  
    document.querySelector(".list3").value = output;
  }
  
  function wooLayout() {
    var list3 = document.querySelector(".list3").value;
    var list4 = document.querySelector(".list4").value;
    var list5 = "";
  
    var array3 = list3.split(", ");
    var array4 = list4.split(", ");
  
    var result = array3.filter(function(item) {
      return array3.indexOf(item) !== array3.lastIndexOf(item) || array4.includes(item);
    });
  
    list5 = result.join("\n");
  
    document.querySelector(".list5").value = list5;
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

  function copyList6() {
    var list5 = document.querySelector(".output-list");
    list5.select();
    document.execCommand("copy");
  }
  
  function pasteList1() {
    var list1 = document.querySelector(".list1");
    navigator.clipboard.readText().then(function(text) {
      list1.value = text;
    });
  }
  
  function pasteList2() {
    var list2 = document.querySelector(".list2");
    navigator.clipboard.readText().then(function(text) {
      list2.value = text;
    });
  }
  
  function pasteList4() {
    var list4 = document.querySelector(".list4");
    navigator.clipboard.readText().then(function(text) {
      list4.value = text;
    });
  }

  function pasteList5() {
    var list1 = document.querySelector(".input-list");
    navigator.clipboard.readText().then(function(text) {
      list1.value = text;
    });
  }

  function removeDuplicates() {
    var inputList = document.querySelector(".input-list").value;
    var outputList = document.querySelector(".output-list");
    
    var array = inputList.split(", ");
    var uniqueArray = Array.from(new Set(array));
  
    outputList.value = uniqueArray.join("\n");
  }