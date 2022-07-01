function bai3 (a){
    var output=[]
    for(i=0;i<10;i++){
      var b = a.replace('*',i)
      if(b%6===0){
        output.push(b)
      }
    }
    return output;
  }

console.log(bai3('1243*'));