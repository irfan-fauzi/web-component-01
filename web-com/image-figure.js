

class ImageFigure extends HTMLElement {

  constructor() {
    super();
    console.log("constructed")
  }

  connectedCallback() {
    console.log('connected callback')
  }

  disconnectedCallback() {
    console.log("disconnected callback")
  }

  adoptedCallback() {
    console.log('adopted...')
  }

  attributeChangeCallback(name, oldValue, newValue) {
    console.log(`attribute : ${name} telah diganti`)
  }
   // digunakan untuk mengamati perubahan nilai attribute caption
 /* kita bisa menetapkan lebih dari satu atribut yang diamati.
    dengan memisahkan nama atribut menggunakan koma. Contoh: */
 // return ["caption", "title", "src", ...]

  static get observedAttributes(){
    
  }

}

customElements.define("image-figure", ImageFigure);