	function cl(e){
		console.log(e)
	}
var qweNumber=getRandom();
var currentfalseAnsw=[]
var NumberQweList=[]
var qweCount=15;
var t=15000;
var score=0;
function getRandom(){
	return parseInt(Math.random()*(geoBase.length-1));
}


indexFalse=0;
var qweLogic=0;
function logic(g){
	qweLogic=parseInt(Math.random()*2)
	cl('логика '+qweLogic)
	if(qweLogic==0){
		$('.answer').find('span').html(geoBase[g][2])
	}else{
		//cl('тут вронг '+g)
		for(var i=3 ; i<geoBase[g].length; i++){
			if(geoBase[g][i]!==""){
				currentfalseAnsw.push(geoBase[g][i])
				}	
		}
		var indexFalse=parseInt(Math.random()*currentfalseAnsw.length-1)
		$('.answer').find('span').html(currentfalseAnsw[indexFalse])
	}
}


//Собираем массив вопросов, 1 раз за игру
function qweBlock(qweCount){
	NumberQweList.push(getRandom())
	for (var i=1; i<qweCount; i++){
		if(getRandom()!==-1){
			NumberQweList.push(getRandom())
		}else{i--}	
	}
	game(NumberQweList)//Запускаем игру
	
}
//пишем вопрос
function game(g){
	if(g.length>0){
			$('.theme').find('span').html(geoBase[g[0]][0])
			$('.qweText').find('span').html(geoBase[g[0]][1])
			logic(g[0]) // Запускаем логику (пишем или правильный или не правильный)
			t=15000
			qweTimer()
		}else{
			cl("Игра окончена, сюда функцию блокировки кнопкок")
		}

}
//таймер
var st=100;
function qweTimer(){
	$('.timer').find('span').html(parseFloat(t/1000))
	if(t>0){
		t=t-100
		setTimeout(qweTimer, st);
	}
}




$('.btnMaster').on('click', function(){
	if(($(this).data('qwe')=='y'&&qweLogic==0)||($(this).data('qwe')=='n'&&qweLogic==1)){
		score=score+t/100
		cl('Правильно с заведомо верным score='+score)
		$('.score').find('span').html(score)
		$('.score').find('span').html(score)
		t=0;
	}else{
		cl('не правильно score='+t/100)
		t=0;
	}
	NumberQweList.shift()//удаляем один из блоков и запускаем игру
	game(NumberQweList)	
})

if(confirm('Старт')){	
	qweBlock(qweCount)
}
//Блок функций

//$('.theme').find('span').html(geoBase[qweNumber][0])
//$('.qweText').find('span').html(geoBase[qweNumber][1])

