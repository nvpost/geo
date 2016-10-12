	function cl(e){
		console.log(e)
	}
var qweNumber=getRandom();
var currentfalseAnsw=[]
var qweCount=15;
var qweTimer=15000;
function getRandom(){
	return parseInt(Math.random()*(geoBase.length-1));
}


indexFalse=0;
function logic(g){
	var qweLogic=parseInt(Math.random()*2)
	cl('логика '+qweLogic)
	if(qweLogic==0){
		$('.answer').find('span').html(geoBase[g][2])
	}else{
		cl('тут вронг '+g)
		for(var i=3 ; i<geoBase[g].length; i++){
		if(geoBase[g][i]!==""){
			currentfalseAnsw.push(geoBase[g][i])
			}	
		}
		var indexFalse=parseInt(Math.random()*currentfalseAnsw.length-1)
		cl(currentfalseAnsw.length)
		cl(indexFalse)
		cl(currentfalseAnsw[indexFalse])
		$('.answer').find('span').html(currentfalseAnsw[indexFalse])
	}
}

var NumberQweList=[]

function qweBlock(qweCount){
	NumberQweList.push(getRandom())
	for (var i=1; i<qweCount; i++){
		if(getRandom()!==-1){
			NumberQweList.push(getRandom())
		}else{i--}	
	}
	game(NumberQweList)//Запускаем игру
}

function game(g){
	$('.theme').find('span').html(geoBase[g[0]][0])
	$('.qweText').find('span').html(geoBase[g[0]][1])
	cl("Отсюда должна идти логика")
	logic(g[0]) // Запускаем логику
}


	
//Блок функций

qweBlock(qweCount)

$('.btnMaster').on('click', function(){
	NumberQweList.shift()//удаляем один из блоков и запускаем игру
	game(NumberQweList)
})

//$('.theme').find('span').html(geoBase[qweNumber][0])
//$('.qweText').find('span').html(geoBase[qweNumber][1])

