

function validate() {
    var url = document.getElementById("url").value;

    //Reqular Expression to check correct web address
   var regx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
   if(regx.test(url)){
       alert("Valid");
   }else{
    alert("Invalid");
   }
       
}