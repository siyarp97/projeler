const veri = localStorage.getItem("urunler") // Localden ürünleri çekiyor
let urunler = JSON.parse(veri) // Çekilen ürünleri urunler diye bir değişkene dizi olarak kaydediyor.

const wrapper = document.querySelector(".wrapper") // Sepet Alanını Seçiyor

let itemCount = document.querySelector(".item-count")  // Sepet logoyu seçiyor

sayfaBaslarken()
sepetKontrol()
urunGoster()
sayiArttir()

let sayi = (document.querySelectorAll('.sayi'));
let row = document.querySelectorAll('.row');
let kurus = document.querySelectorAll('.kurus')
let totalPrice = document.getElementById("total-fiyat")
let totalPricePoint = totalPrice.getElementsByClassName('totalPricePoint')
console.log(kurus)
fiyatlandir()




//* Azalt butonu için
let eksiButtons = document.querySelectorAll('.eksi');

eksiButtons.forEach((i, index) => {
    i.addEventListener("click", function azalt()
    {
        
        itemCount.innerHTML--
        sayi[index].textContent--
        urunler[index].adet--
        
        kurusDeger = ((sayi[index].textContent) * (urunler[index].fiyat))
        kurus[index].textContent = kurusDeger

        fiyatlandir()
        if(sayi[index].textContent <= 0 )
        {
            row[index].innerHTML = " "
            

        }
        localdenSil()
    })
})

//* Arttırma butonu için

let arti = document.querySelectorAll('.arti')

arti.forEach((i, index) => 
    {
        i.addEventListener('click', arttir => 
        {
            itemCount.innerHTML++
            sayi[index].textContent++
            urunler[index].adet++
            console.log(urunler)

            kurusDeger = ((sayi[index].textContent) * (urunler[index].fiyat))
            kurus[index].textContent = kurusDeger
            fiyatlandir()

            localdenSil()
        })
    })


//* Sil Butonu İçin

let sil = document.querySelectorAll('.sil')

sil.forEach((i, index) => 
    {
        i.addEventListener('click', sil => 
        { 
            row[index].innerHTML = " "
            sayi[index].innerHTML = 0
            urunler[index].adet = 0
            totalPricePoint[0].innerHTML = Number(totalPricePoint[0].innerHTML) - Number( kurus[index].innerHTML)
            console.log(kurus)
            
            localdenSil()
            sayiArttir()
           
        })
    })


//* Sepeti Temizlemek İçin

const sepetiTemizle = document.querySelector('.temizle')
sepetiTemizle.addEventListener('click', i => {
    wrapper.innerHTML=" "
    totalPricePoint[0].innerHTML = "0"

    localStorage.setItem('urunler', '[]')
})





//* Fonksiyonlar

function sayiArttir() {
    sepetSayisi = (JSON.parse(localStorage.getItem('urunler')))
    let counter = 0
    for(i of sepetSayisi){
        counter += i.adet
    }
    itemCount.innerHTML = counter
}
function urunGoster(){
    for(i of urunler){

        let div = document.createElement('div')
        div.classList.add("row")
        div.innerHTML = 
        `  
            <div class="inner-card  p-4 bg-light rounded border border-secondary g-2">
                            
                <ul class="d-flex justify-content-between align-items-center list-unstyled">
                    <li>
                        <div class="foto-cerceve">
                                <img src="../img/t1.avif">
                        </div>
                    </li>
    
                    <li>${i.baslik}</li>
    
                    <li class="d-flex justify-content-between align-items-center gap-3">
                    
                        <button class="btn btn-secondary btn-sm rounded-pill eksi"">
                            <span class=" text-white rounded-pill align-items-center d-flex justify-content-center align-items-center">-</span> 
                        </button>
                        
                    
                    <span class="text-warning fs-5"> x<span class="sayi">${i.adet}</span> </span> 
                    
                    <div class="btn btn-secondary btn-sm rounded-pill arti">
                        <span class=" text-white rounded-pill align-items-center d-flex justify-content-center align-items-center" >+</span> 
                    </div>
                    
                    </li>
    
                    <li><span class="kurus">${i.adet * i.fiyat}</span> TL</li>
    
                    <li class="btn btn-danger btn-md sil">Sil</li>
                </ul>
            </div> 
            </div>
    
        `
    
         wrapper.append(div)
    
    }
}
function localdenSil()
{
    const filtreDizi = urunler.filter(i => i.adet > 0)   
    localStorage.setItem("urunler", JSON.stringify(filtreDizi))
}

function sayfaBaslarken() 
{
    if (localStorage.getItem('urunler')) {
        urunler = JSON.parse(localStorage.getItem('urunler'))
        sayiArttir()
    }
    else {
        localStorage.setItem('urunler', [])
    }
}
function sepetKontrol()
{
    if(urunler.length <= 0){
        
        wrapper.classList.add('d-flex', 'justify-content-center', 'align-items-center')

        wrapper.innerHTML = 
        `
    
            <div class="kutu container rounded bg-black">
                <p class="text-center fs-5 text-light">
                Sepetin Boş! <br><span>Doldurmak İçin </span><a href="../Kategoriler/kategoriler.html" class="text-decoration-none">Kategorilere</a> <span>Bak</span>
                </p>
            </div>
    
       
        `
    }
}
function fiyatlandir ()
{
    let yenikurus = 0

    kurus.forEach((i)=> {
        yenikurus += Number(i.innerHTML)
    })
    totalPrice.innerHTML = 
    `
    <span id="total-fiyat">Toplam : <span class="totalPricePoint">${yenikurus}</span> TL</span>
    `
}