var array = [2, 3, 4];

function isMultiple (valor){
    var  multiplicar = 2;
    for (var i = 0; i < array.length; i += 1){
        var relt = multiplicar * array[i];
    }
    return relt;
}

/*
var multiplicar = 2;

for (var i = 0 < array.length; i += 1;){
    var relt = multiplicar * array[1];
}
*/


console.log(isMultiple());


