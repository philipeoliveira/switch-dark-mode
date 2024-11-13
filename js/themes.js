const themeFormLabel = document.querySelector('#form-theme label');
const themeCheckbox = document.querySelector('#theme-checkbox');
const themeBall = document.querySelector('.theme-ball');

/**
 * Define estilos e atributos para o tema Dark
 */
const selectedDarkTheme = () => {
   themeBall.style.transform = 'translate(24px)';
   themeFormLabel.setAttribute('title', 'Trocar para tema claro');

   document.body.classList.toggle('dark-theme');
};

/**
 * Define estilos e atributos para o tema Light
 */
const selectedLightTheme = () => {
   themeBall.style.transform = 'translate(0)';
   themeFormLabel.setAttribute('title', 'Trocar para tema escuro');

   document.body.classList.toggle('dark-theme');
};

/**
 * Define como o tema será iniciado
 */
let getTheme = getLocalStorage('darkTheme');

if (getTheme === 1) {
   themeCheckbox.checked = true;
   selectedDarkTheme();
}

/**
 * Modifica o tema
 */
themeCheckbox.addEventListener('change', () => {
   // checked modifica para o tema escuro
   if (themeCheckbox.checked) {
      setLocalStorage('darkTheme', 1);
      selectedDarkTheme();
   } else {
      setLocalStorage('darkTheme', 0);
      selectedLightTheme();
   }
});
