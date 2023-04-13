var num=prompt("Ededi daxil edin")
if(num>99 && num<1000){
    var teklik=num%10
    var onluq= ((num-teklik)/10)%10
    var yuzluk= (num-(num%100))/100
    if (onluq == teklik && teklik==yuzluk) {
        alert("reqemler eynidir")
    }
    else{
        alert("butun reqemler eyni deyil")
    }
}
else{
    alert("duzgun ededi qeyd edin")
}