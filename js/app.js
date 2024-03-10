const encriptar = () => {
  const texto = document.getElementsByClassName("text")[0].value.toLowerCase();
  const resultado = document.getElementById("resultado-texto");
  const btnCopy = document.getElementsByClassName("btn-copy");

  let regex = /^[a-z]+(\s*[a-z]*)*[a-z]+$/;

  if (regex.exec(texto) != null) {
    let textoEncriptado = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    resultado.innerHTML = textoEncriptado;
    btnCopy[0].style.display = "block";
  } else {
    console.log("no se admite caracteres especiales");
  }
};

const desencriptar = () => {
  const texto = document.getElementsByClassName("text")[0].value.toLowerCase();
  const resultado = document.getElementById("resultado-texto");
  const btnCopy = document.getElementsByClassName("btn-copy");

  let regex = /^[a-z]+(\s*[a-z]*)*[a-z]+$/;

  if (regex.exec(texto) != null) {
    let textoDesencriptado = texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    resultado.innerHTML = textoDesencriptado;
    btnCopy[0].style.display = "block";
  } else {
    console.log("no se admite caracteres especiales");
  }
};

const copiarTexto = () => {
  let texto = document.getElementById("resultado-texto").innerHTML;
  navigator.clipboard.writeText(texto);
  Swal.fire({
    icon: "success",
    title: "Copiado!",
    timer: 700,
    showConfirmButton: false,
    backdrop: "rgba(0,0,0,0)",
    width: "300"
  })
};
