const submitBtn = document.getElementsByClassName("btn-submit");
const page1 = document.querySelector(".container");
const page2 = document.querySelector(".thank-you");

console.log(submitBtn)

for(i=0;i<submitBtn.length;i++){
    submitBtn[i].addEventListener("click", function (){
        if(this.parentNode.className === 'container'){
            if(this.parentNode.classList.contains('hide')){
                this.parentNode.classList.add('hide');
            }else{
                console.log(2)
            }
        }else{
            this.parentNode.classList.remove('hide')
        }
    });
}