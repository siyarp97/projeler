const card = document.getElementsByClassName("card")
const button = document.getElementsByClassName("btn-success")


let itemCount = document.querySelector(".item-count")
let sepettekiUrunler = []
sayfaBaslarken()

for (let i = 0; i < card.length; i++) {
    button[i].addEventListener("click", function (e) {
        
        e.preventDefault()
   
        let title = card[i].getElementsByClassName("card-title")[0].textContent
        let price = card[i].getElementsByClassName("fs-5")[0].textContent
        let image = card[i].getElementsByTagName("img")[0].src

        let urun = {
            baslik: title,
            fiyat: Number(price),
            resim: image,
            adet: 1,
        }
        
        
//CHAT GPT'DEN BİR DESTEK!
        let existingProduct = sepettekiUrunler.find(item => item.baslik === urun.baslik);

        if (existingProduct) {
            existingProduct.adet++; // Eğer ürün sepette varsa, sadece adetini artır
        } else {
            sepettekiUrunler.push(urun); // Eğer ürün sepette yoksa, yeni ürün olarak ekle
        }
//-------------------------------------
        // let eslesen = sepettekiUrunler.filter(item => item.baslik === urun.baslik)
          
        // if(eslesen){
        //     eslesen.adet++
        // }
        // else{
        //     sepettekiUrunler.push(urun)
        // }

        console.log(sepettekiUrunler)
        localStorageGonder()
        sayiArttir()

    })
}


// console.log(sepettekiUrunler)



function sayfaBaslarken() {
    if (localStorage.getItem('urunler')) {
        sepettekiUrunler = JSON.parse(localStorage.getItem('urunler'))
        sayiArttir()
    }
    else {
        localStorage.setItem('urunler', [])
    }
}

function sayiArttir() {
    sepetSayisi = (JSON.parse(localStorage.getItem('urunler')))
    let counter = 0
    for(i of sepetSayisi){
        counter += i.adet
    }
    itemCount.innerHTML = counter
}

function localStorageGonder() {
    localStorage.setItem("urunler", JSON.stringify(sepettekiUrunler))
    return;
}

