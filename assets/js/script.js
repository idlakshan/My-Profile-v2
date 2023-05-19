const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    navTotal = navList.length;

for (let i=0;i<navTotal;i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click",function (){
        for (let j=0; j<navTotal;j++){
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
    })
}
