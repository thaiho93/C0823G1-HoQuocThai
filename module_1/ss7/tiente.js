function ChangeMoney() {
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;


    if (FromC == "USD" && To == "VND") {
        Result = "Result: " + (Amount * 23500) + "đ";
    }
    else if (FromC == "VND"&& To =="USD"){
        Result = "Result: "+ (Amount / 23500) + "$";
    }
    else if (FromC == "VND") {
        Result = "Result: " + Amount + "đ"
    } else {
        Result = "Result: " + Amount + "$"
    }

    document.getElementById("Result").innerHTML = Result;
}
