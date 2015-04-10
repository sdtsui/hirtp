var parse = function(input){
    console.log(input);
    console.log('typeof', typeof input);
    console.log('typeof', typeof parseInt(input));
    //run balancedparens
    //evaluate what is inside the parens:
    ////taking in a basic expression:
    //3+2=5
    //3+-2=1
    var inputType = Number(input);
    debugger;
    if((typeof (inputType+1)) === 'number'){
        return parseInt(input);
    }else{
        //do +
        return input.split("+").reduce(function(prev, current,index, array){
            console.log(index, array.length-1);
            if(index === array.length-1){
                return parseInt(parse(prev.toString()))+parseInt(parse(current));
            }
            return parse(prev.toString())+parse(current);
        })
    }
}
var x = parse("3+2+3+3+1"); 
console.log(x);