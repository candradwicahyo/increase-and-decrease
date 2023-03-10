window.onload = () => {
  
  let number = 0;
  
  const text = document.querySelector('.text');
  const increaseButton = document.querySelector('.increase');
  increaseButton.addEventListener('click', () => {
    /*
      tambahkan 1 pada variabdl number jika tombol increase ditekan
      dan masukkan isi variabel number ke element text
    */
    text.textContent = ++number;
  });
  
  const decreaseButton = document.querySelector('.decrease');
  decreaseButton.addEventListener('click', () => {
    // jika isi variabel number lebih besar dari 0
    if (number >= 0) {
      // set isi variabel number ke element text
      text.textContent = number--;
    }
  });
  
}