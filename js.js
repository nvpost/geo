function cl(e){
	console.log(e)
}
var qweNumber=parseInt(Math.random()*(geoBase.length-1));

var currentfalseAnsw=[]
for(var i=3 ; i<geoBase[qweNumber].length; i++){
	if(geoBase[qweNumber][i]!==""){
		currentfalseAnsw.push(geoBase[qweNumber][i])
	}
	
}
indexFalse=0;
function logic(){
	var qweLogic=parseInt(Math.random()*2)
	cl(qweLogic)
	if(qweLogic==0){
		$('.answer').find('span').html(geoBase[qweNumber][2])
	}else{
		cl('Вариант с неправильным')
		var indexFalse=parseInt(Math.random()*currentfalseAnsw.length-1)
		cl(currentfalseAnsw.length)
		cl(indexFalse)
		cl(currentfalseAnsw[indexFalse])
		$('.answer').find('span').html(currentfalseAnsw[indexFalse])
	}
}
logic()
$('.theme').find('span').html(geoBase[qweNumber][0])
$('.qweText').find('span').html(geoBase[qweNumber][1])

