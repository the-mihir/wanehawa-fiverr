function validateForm() {

    document.getElementById("myDiv").style.display = "block";


    var x = document.forms["myForm"]["email"].value;
    var y = document.forms["myForm"]["confirmEmail"].value;
    if (x != y) {
        alert("Email addresses do not match");
        return false;
    }


    document.getElementById('zipcode').innerHTML = document.forms["myForm"]["postalCode"].value;
    document.getElementById('userEmail').innerHTML = document.forms["myForm"]["email"].value;
    document.getElementById('userName').innerHTML = document.forms["myForm"]["fullName"].value;

    const select = document.querySelector("select[name='options']");
    const selectedOption = select.options[select.selectedIndex];
    const product = selectedOption.getAttribute("name");


    document.getElementById('productName').innerHTML = product;
    document.getElementById('price').innerHTML = document.forms["myForm"]["options"].value;


    return false;


}


