var result =0;

document.onkeydown = function(e){
	if(e.keyCode == '49' || e.keyCode == '97'){
		res.innerHTML +=1;
	}
	if(e.keyCode == '48' || e.keyCode == '96'){
		res.innerHTML +=0;
	}
	if(e.keyCode == '46' || e.keyCode == '8'){
		res.innerHTML ='';
	}
	if(e.keyCode == '107'){
		res.innerHTML +='+';
	}
	if(e.keyCode == '109'){
		res.innerHTML +='-';
	}
	if(e.keyCode == '106'){
		res.innerHTML +='*';
	}
	if(e.keyCode == '111'){
		res.innerHTML +='/';
	}
	if (e.keyCode == '13'){
		ans();
	}
}

btn0.onclick=function(){
    res.innerHTML +=0;
}

btn1.onclick=function(){
    res.innerHTML +=1;
}

btnClr.onclick=function(){
    res.innerHTML ='';
}

btnSum.onclick=function(){
    res.innerHTML +='+';
}

btnSub.onclick=function(){
    res.innerHTML +='-';
}

btnMul.onclick=function(){
    res.innerHTML +='*';
} 

btnDiv.onclick=function(){
    res.innerHTML +='/';
}

btnEql.onclick=ans;

function ans(){

    var res = document.getElementById("res");
    var operands = res.innerHTML.match(/\d+/g);
    var operator = res.innerHTML.match(/\D/g);

    if (operator.includes("+")){
        result = parseInt(parseInt(operands[0], 2).toString(10)) + parseInt(parseInt(operands[1], 2).toString(10));
    }
    else if (operator.includes("-")){
        result = parseInt(parseInt(operands[0], 2).toString(10)) - parseInt(parseInt(operands[1], 2).toString(10));
    }
    else if (operator.includes("*")){
        result = parseInt(parseInt(operands[0], 2).toString(10)) * parseInt(parseInt(operands[1], 2).toString(10));
    }
    else if (operator.includes("/")){
        result = parseInt(parseInt(operands[0], 2).toString(10)) / parseInt(parseInt(operands[1], 2).toString(10));
    }

     res.innerHTML = (result >>> 0).toString(2);
}
