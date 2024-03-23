const submitBtn = document.getElementById("btn");
const img = document.getElementById("img");

submitBtn.addEventListener("click", function(){
    if(img.style.display === "none"){
        img.style.display = "inline-flex";
    }else{
        img.style.display = "none";
    }
})