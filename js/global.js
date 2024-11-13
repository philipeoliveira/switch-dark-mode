/**
 * Adiciona ícone aos links com target _blank
 */
const targetBlank = document.querySelectorAll("a[target='_blank']");

for (let i = 0; i < targetBlank.length; i++) {
   targetBlank[i].innerHTML += '<i class="fa-solid fa-arrow-up-right-from-square"></i>';
}
