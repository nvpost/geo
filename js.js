function cl(e){
	console.log(e)
}
var qweNumber=parseInt(Math.random()*(geoBase.length-1));
var currentQwe=geoBase[qweNumber][1]
var currentAnsw=geoBase[qweNumber][2]
var currentfalseAnsw=[]
for(var i=2 ; i<geoBase[qweNumber].length; i++){
	if(geoBase[qweNumber][i]!==""){
		currentfalseAnsw.push(geoBase[qweNumber][i])
	}
	
}
cl(currentQwe)
function logic(){
	var qweLogic=parseInt(Math.random()*2)
	cl(qweLogic)
}
logic()
$('.theme').find('span').html(geoBase[qweNumber][0])
$('.qweText').find('span').html(geoBase[qweNumber][1])
$('.answer').find('span').html(geoBase[qweNumber][2])