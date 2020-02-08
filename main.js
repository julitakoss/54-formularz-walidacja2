function walidacja2_2() {
    let phone = document.getElementById("f_phone").value;
    let new_1 = phone + "";

    if (phone == '') {
         alert('Wpisz swój numer telefonu');
    }

    if(new_1.length != 9){
        alert("Wprowadzono nieprawidłowy numer");
    }
}

