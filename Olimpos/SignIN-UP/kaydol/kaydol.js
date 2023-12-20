const password = document.getElementById("sifre")
const email = document.getElementById("mail")
const buton = document.querySelector(".btn-success")
let kullanıcılar = []

buton.addEventListener('click', kaydol)




// if(kullanıcılar != []){
//     let veriler = localStorage.getItem(("ID/Pass"))
//     kullanıcılar.push(JSON.parse(veriler))
//     kaydol()
// }








function kaydol (e){
    let kullanici = {
        emailAdresi : email.value,
        sifre : password.value
    }
    kullanıcılar.push(kullanici)

    kullanıcılar.forEach(i => {
    
        localStorage.setItem("ID/Pass", JSON.stringify(kullanıcılar))
    })

    e.preventDefault()
    return;
}
