function compute()
{
    function highlight(text)
    {
        var inputText = document.getElementById("result");
        var innerHTML = inputText.innerHTML;
        var index = innerHTML.indexOf(text);
        if (index >= 0)
        {
            innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
            inputText.innerHTML = innerHTML;
          }
    }
    
    function last_highlight(text)
    {
        var lastinputText = document.getElementById("result");
        var lastinnerHTML = inputText.innerHTML;
        var lastindex = innerHTML.lastIndexOf(text);
        if (lastindex >= 0)
        {
            innerHTML = innerHTML.substring(0,lastindex) + "<span class='highlight'>" + innerHTML.substring(lastindex,lastindex+text.length) + "</span>" + innerHTML.substring(lastindex + text.length);
            inputText.innerHTML = innerHTML;
          }
    }

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    var pri = document.getElementById("principal");
    if (pri.value < 1){
        return false;
    } else {
    	document.getElementById("result").innerHTML = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + "If you deposit "+ principal +",\<br\>"+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+"at an interest rate of "+rate+"%,\<br\>"+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+"You will receive an amount of "+interest+",\<br\>"+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+"in the year "+year+"\<br\>";
    	highlight(principal.toString()+',');
    	highlight(rate.toString()+'%,');
    	highlight(interest.toString()+',\<br\>');
    	highlight(year.toString());
    }
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = String(rateval)+'%';
}

function validPrin(){
    var pri = document.getElementById("principal");
    if (pri.value < 1){
        alert('Enter a positive number')
        pri.focus();
        return false;
    } else {
    	return false;
    }
}


