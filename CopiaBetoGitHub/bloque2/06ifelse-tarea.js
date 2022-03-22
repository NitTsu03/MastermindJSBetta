function isMultiple(valor, mult){
    var resp = valor % mult;
    if (resp == 0)
        return '20 es multiplo de 2';
    else
        return '23 no es multiplo de 2'
}

console.log(isMultiple(20,2));