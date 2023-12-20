let cer1 = document.getElementsByClassName("cer-1")
let cer2 = document.getElementsByClassName("cer-2")
let cer3 = document.getElementsByClassName("cer-3")

console.log(cer1, cer2,cer3)
fetch('https://fakestoreapi.com/products?limit=3')
            .then(res=>res.json())
            .then(json=>json.forEach(item => {
                urunGorsel.push(item)
            }))

let urunGorsel = []
urunGorsel.forEach(i => {
    cer1.innerHtml= 
    cer1.append(i[0].image)
})