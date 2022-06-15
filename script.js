function sum(){
    var first= parseInt(document.getElementById("first_number").value);
    var second= parseInt(document.getElementById("second_number").value);
    var result= first + second;
    var paragraph= document.getElementById("result");
    paragraph.innerHTML= "Your result is: " + result;
    console.log(result);
}
