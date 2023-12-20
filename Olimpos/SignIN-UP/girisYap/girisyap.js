const password = document.getElementById("sifre")
const email = document.getElementById("mail")
const buton = document.querySelector(".btn-success")

let bilgiler = JSON.parse(localStorage.getItem("ID/Pass"))



function kontrol(e){
    let sayac=0
    bilgiler.forEach(i => {
        if((email.value == i.emailAdresi && password.value==i.sifre)){
            console.log("ok")
        }
        else {
            sayac++
            if(sayac==bilgiler.length){
                console.log("Kullanıcı adı veya şifre hatalı")
            }
        }
    });
    e.preventDefault()
}

buton.addEventListener('click', kontrol)


