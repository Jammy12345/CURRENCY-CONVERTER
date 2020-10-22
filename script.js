
    
    let json
    let Selector1
    let Selector2

    function Convert(){
      const httpRequest = new XMLHttpRequest();
      httpRequest.onload = function(){
        if (httpRequest.status === 200){
          json = JSON.parse(httpRequest.responseText);
        }else {
          alert('There is an error')}
          let amount = document.querySelector("input").value
          if(amount>0){
        document.querySelector(".box-2").innerHTML ="Updated on:"+json.date;
          let selector1 = document.querySelector(".money1").value
          let selector2 = document.querySelector(".money2").value
          var num = 0
          for(num in json.rates){
            if (selector1 === num){
              Selector1 = json.rates[num]
              break}
            else{
            Selector1 = 1;}
          }
          for(num in json.rates){
            if(selector2 === num){
              Selector2 = json.rates[num]
              break}
            else {
              Selector2 = 1;
            }
          }
          let selector = Selector2/Selector1;
          let result = amount*selector
          document.querySelector(".response").innerHTML = selector2 +" : "+result;
          document.querySelector(".response").style.color = "rgb(121, 5, 5)";
        }}
      httpRequest.open('GET','https://api.exchangeratesapi.io/latest')
      httpRequest.send()
    }
