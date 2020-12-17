//объект
const man = {
    firstName: "James",
    lastName: "Bond",
    age: 15
};
//возвращает массив значений объекта
function getValues(obj) {
    let newArr = [];
    for (let i in obj) {
        newArr.push( obj[i] );
    }
    return newArr;
}
//возвращает массив ключей объекта
function getKeys(obj) {
    let newArr = [];
    for (let i in obj) {
        newArr.push(i);
    }
    return newArr;
}
//возвращает массив массивов (0 элемент - ключ, 1 элемент - значение)
function getEntries(obj) {
    let newArr = [];
    for (let i in obj) {
        newArr.push( [ i, obj[i] ] );
    }
    return newArr;
}
//проверка
console.log( getValues(man) );
console.log( getKeys(man) );
console.log( getEntries(man) );