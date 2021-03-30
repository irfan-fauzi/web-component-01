let imageFigure = document.querySelector('image-figure')

// jika tidak tersedia pada DOM maka dibuat secara sintaksis
if (!imageFigure) {
  // buat elemen imageFigure
  imageFigure = document.createElement("image-figure");
  // letakan di body
  document.body.appendChild(imageFigure)
}

// mengubah/menambah value attribut caption
// contoh : masukan dalam siteTimeout
setTimeout(() => {
  // tambahkan attribut : setAttribute(namaAtribut, isiAtribut)
  // kita bisa buat atribut sendiri
  imageFigure.setAttribute("caption", "gambar-1")
}, 3000);


// mengapus imageFigure dari DOM

setTimeout(() => {
  imageFigure.remove()
}, 5000)