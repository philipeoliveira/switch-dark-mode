const setLocalStorage = (keyName, keyValue) => {
   localStorage.setItem(keyName, JSON.stringify(keyValue));
};
const getLocalStorage = (keyName) => {
   return JSON.parse(localStorage.getItem(keyName)) ?? [];
};

/**
 * @desc Obtém valores de uma chave no localStorage
 * @param {string} keyName String com o nome da chave a consultar
 * @return {Array<object>} Array de Objetos
 */
const readData = (keyName) => {
   return getLocalStorage(keyName);
};

/**
 * @desc Cria chave com valores no localStorage
 * @param {string} keyName String que será o nome da chave
 * @param {object} newValue Object que será os valores da chave
 */
const createData = (keyName, newValue) => {
   const keyValue = readData(keyName);
   keyValue.push(newValue);
   setLocalStorage(keyName, keyValue);
};

/**
 * @desc Atualiza valores de uma chave no localStorage
 * @param {number} index Number da posição do Array que será atualizada
 * @param {string} keyName String com o nome da chave que será atualizada
 * @param {object} newValue Object que contém os valores que serão atualizados
 */
const updateData = (index, keyName, newValue) => {
   const keyValue = readData(keyName);
   if (keyValue[index]) {
      keyValue[index] = newValue;
      setLocalStorage(keyName, keyValue);
   }
};

/**
 * @desc Deleta valor de uma chave no localStorage
 * @param {number} index Number da posição do Array que será deletada
 * @param {string} keyName String com o nome da chave que contém o valor que será deletado
 */
const deleteData = (index, keyName) => {
   const keyValue = readData(keyName);
   if (keyValue[index]) {
      keyValue.splice(index, 1);
      setLocalStorage(keyName, keyValue);
   }
};
