var c=prompt('donnee une chaine ')
var l=0
var e=0
for(let i=1;i<=c.length;i++){
    if (c[i]!="." && c[i]!=" "){
        l++
    }else if (c[i]=" "){e++}
}
console.log(l)
console.log(e)