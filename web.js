let username=document.getElementById("txtusername");
let email=document.getElementById("txtemail");
let phoneno=document.getElementById("txtphoneno");
let Location=document.getElementById("txtlocation");
let form=document.querySelector("form");

function validateInput(){
    console.log("validate input")
}

function myFunction() {
    var txt;
    if (confirm("Press a button!")) {
      txt = "Data Saved successfully...!";
    } else {
      txt = "Retry.....!!";
    }
    
  }  

function validateInput(){
    if(username.ariaValueMax.trim()===""){
        let parent=username.parentElement;
        let messagrEle=parent.querySelector("small");
    }

}
alert("Data saved successfully.....!");