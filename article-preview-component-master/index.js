const shareBtn = document.getElementsByClassName("share");
const profileCard = document.querySelector(".profile");
const bannerCard = document.querySelector(".banner")
console.log(shareBtn)
console.log(profileCard)
console.log(bannerCard)

for(i=0;i<shareBtn.length;i++){
    shareBtn[i].addEventListener("click", function(){
        if(profileCard.classList.contains("hide")){
            profileCard.classList.remove("hide");
            bannerCard.classList.add("hide");
        }
        else{
            profileCard.classList.add("hide");
            bannerCard.classList.remove("hide");
        }
    });
}