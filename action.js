function myfun(){

    var fname = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var zipcode = document.getElementById("Zipcode").value;
    var phonenumber = document.getElementById("Phone number").value;
    
    // regular expressions
    var fnamereg = /^[a-zA-Z]{2,23}$/;
    var emailreg = /[a-z0-9A-Z]@[a-z0-9A-Z]{1,10}\.[a-z]{2,}$/gim;
    var zipcodereg = /^[10000-90000]/;
    var phonenumberreg = /^\d{10}$/;
    
    //start fuction
    
        if(fnamereg.test(fname)){
            document.getElementById("nameerror").innerHTML=""
        }
        else {
            document.getElementById("nameerror").innerHTML="Name must be between 2 and 23 characters";
        }
        //end
    
        //start
        if(emailreg.test(email)){
            document.getElementById("emailerror").innerHTML=""
        }
        else {
            document.getElementById("emailerror").innerHTML="Email is invalid";
        }
        //end
    
        //start
        if(zipcodereg.test(zipcode)){
            document.getElementById("zcodeerror").innerHTML=""
        }
        else{
            document.getElementById("zcodeerror").innerHTML="Zipcode is invalid";
        }
        //end
    
        //start
        if(phonenumberreg.test(phonenumber)){
            document.getElementById("pnumbererror").innerHTML="";
        }
        else{
            document.getElementById("pnumbererror").innerHTML="Phone number is invalid";
        }
        //end
        return false;
        }
