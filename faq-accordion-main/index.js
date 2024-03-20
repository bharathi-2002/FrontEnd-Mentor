const questionBlock = document.querySelectorAll(".question");

// const img = document.createElement("img")
// img.setAttribute('src', './assets/images/icon-minus.svg')
// console.log(img)

for(i=0;i<questionBlock.length;i++){
    questionBlock[i].addEventListener("click", function(){
        if(this.parentNode.childNodes[3].classList.contains("hide")){
            this.parentNode.childNodes[3].classList.remove("hide")
            this.parentNode.childNodes[1].childNodes[3].setAttribute('src', './assets/images/icon-minus.svg')
        }
        else{
            this.parentNode.childNodes[3].classList.add("hide")
            this.parentNode.childNodes[1].childNodes[3].setAttribute('src','./assets/images/icon-plus.svg')
        }
    })
}