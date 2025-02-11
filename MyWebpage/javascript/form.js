let total_amount = 0;
function myFunc()
{
    total_amount = 0;
    for(let i=1; i<=20; i++)
    {
        let x = document.getElementById(`item${i}`);
        let y = document.getElementById(`radioitems${i}`);
        let text = "";
        
        if(x.checked)
        {
            for(let j=0; j<y.length; j++)
            {
                if(y[j].checked)
                {
                    text = text+y[j].value;
                    let z = document.getElementById(`Units${i}`).value;

                    

                    document.getElementById(`cost${i}`).innerHTML =  text*z;
                    total_amount = total_amount+ text * z;
                }
            }
        }
    }
    
}

function totalcostFunction()
{
    if(total_amount>=1000)
    {
        total_amount= total_amount*0.15;
        document.getElementById("total_cost").innerHTML = "Total Cost is: " +total_amount;
    }
    else{
        document.getElementById("total_cost").innerHTML = "Total Cost is: " +total_amount;

    }
    
    if(total_amount==0){
        alert("Please select any item first Thank you");
    }
    else{
        
        response = confirm(`Total amount for your shopping is ${total_amount}. You want to proceed for the payment `);

    }

    if(response==true)
    {
        alert("Your payment is succefully done Thank you");
    }
    else {
        alert("your order is canceled");
    }

    

}