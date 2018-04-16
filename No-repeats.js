//
function permAlone(str) {
  var arraySplit = str.split("");
  var n = str.length;
  if (n===1){
    return 1;
  }
  var a = new Array(n);
  for (var k=0;k<n;k++){
    a[k]=0;
  }
  var regExp = /(.)\1/;
  var count=0;
  
  function aHasNoDoubles(){
    var copy = [];
    for (var i=0;i<n;i++){
      copy[i]=a[i];
    }
    copy.sort();
    for (i=0;i<n-1;i++){
      if (copy[i]===copy[i+1]){
        return false;
      }
    }
    return true;
  }
  
  while (a[n-1]<n){
    a[0]++;
    for (var m=0;m<(n-1);m++){
      if (a[m]===n){
        a[m+1]++;
        if (a[n-1]===n){
          return count;
        }
        for (var j=0;j<(m+1);j++){
          a[j]=0;
        }
      }
    }
    if (aHasNoDoubles()){
      var result=[];
      for (var p=0;p<n;p++){
        result[p]=arraySplit[a[p]];
      }
      if (!regExp.test(result.join(""))){
        count++;
      }
    }
  }
  
  return count;
}

permAlone('abcdefa');
