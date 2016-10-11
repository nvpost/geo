var geoBase=[
	["География", "1. Название науки «география» означает", "Описание Земли", "Описание галактики", "Наука о поверхности земли", "Наука о земных процессах"], 
	["География", "2. География как наука зародилась в Древнем(ей)", "Греции", "Риме", "Персии", "Узбегистане"], 
	["География", "3. Греческий ученый, назвавший свой труд, посвященный описанию Земли словом «География»", "Эратосфен", "Эпикур", "Геродот", "Пифагор"], 
	["География", "4. Путь вращения планеты вокруг Солнца называется", "Орбитой", "Осью вращения", "Путь вращения", ""], 
	["География", "5. Ближайшая к Солнцу планета", "Меркурий", "Юпитер", "Марс", "Земля"], 
	["География", "6. Земля находится между планетами", "Венера и Марс", "Юпитер и Венера", "", ""], 
	["География", "7. Наименьшую протяженность орбиты имеет ", "Меркурий", "Юпитер", "Венера", "Марс"], 
	["География", "8. Сутки - это следствие ", "Вращения Земли вокруг своей оси", "Восхода и захода солнца", "Движения планеты по орбите", ""], 
	["География", "9. Полный оборот Земли вокруг Солнца осуществляется за:", "365 дней и 6 часов.", "182 дня", "24 часа", "12 часов"], 
	["География", "10. Полный оборот Земли вокруг своей оси осуществляется за", "24 часа", "365 дней и 6 часов.", "182 дня", "12 часов"], 
	["География", "11. В «Високосном» году изменяется количество дней в", "Феврале", "Январе", "Марте", "Не меняется"], 
	["География", "12. Земная ось расположена к плоскости орбиты под углом:", "66,5&deg;", "182&deg;", "365,5&deg;", "18&deg;"], 
	["География", "13. Наибольший угол падения солнечных лучей два раза в год наблюдается в районе", "Экватора", "Полюса", "Средние широты", ""], 
	["География", "14. Определение своего местонахождения относительно сторон горизонта называется:", "Ориентированием", "Геопозиционированием", "Картографией", ""], 
	["География", "15. Угол между направлением на север, и на какой- нибудь предмет местности называется: ", "Азимутом", "Меридианом", "", ""], 
	["География", "16. Азимут 360&deg; направлен на", "Север", "Юг", "Запад", "Восток"], 
	["География", "17. Азимут 90&deg; направлен на", "Восток", "Север", "Юг", "Запад"], 
	["География", "18. Азимут 180&deg; направлен на", "Юг", "Восток", "Север", "Запад"], 
	["География", "19. Азимут 270&deg; направлен на", "Запад", "Юг", "Восток", "Север"], 
	["География", "20. Если ваш маршрут был направлен по азимуту 90&deg;, то возвращаться вам нужно по азимуту ", "270&deg;", "80&deg;", "345&deg;", "10&deg;"], 
	["География", "21. Азимут 315&deg; направлен на", "Северо – запад", "Юго – восток", "Юго – запад", ""], 
	["География", "22. Азимут 135&deg; направлен на", "Юго – восток", "Северо – запад", "Юго – запад", ""], 
	["География", "23. Азимут 225&deg; направлен на", "Юго – запад", "Юго – восток", "Северо – запад", ""], 
	["География", "24. Масштаб, записанный в виде дробных чисел, называется", "Численным", "Нумерическим", "Точным", ""], 
	["География", "25. Масштаб записанный с пояснением ( например в 1 см – 100 м) называется", "Именованным", "Марочным", "Линейным", ""], 
	["География", "26. Величина масштаба 1: 1000 на плане длина 10см. Определи длину объекта на местности:", "100м", "10м", "100км", "1000м"], 
	["География", "29. Прибор для измерения относительной высоты", "Нивелир", "Астролябия", "Высотомер", "Компас"], 
	["География", "30. Превышение одной точки земной поверхности  над другой называют", "Относительной высотой", "Абсолютной высотой", "Сдвигом", "Смещением"], 
	["География", "31. Горизонталями называют линии, соединяющие точки с одинаковыми показаниями", "Высот", "Широт", "", ""], 
	["География", "32. Съемка местности, проводимая из одной точки, называется", "Полярной", "радиальная", "Объектная", "плоскостная"], 
	["География", "34. Более достоверно передает форму Земли", "Глобус", "Карта", "Лоция", "фотография"], 
	["География", "35. Линия, условно проведенная от одного полюса Земли к другому, называется", "Меридианом", "Широтой", "Параллелями", ""], 
	["География", "36. Линии, условно проведенные параллельно экватору, называются", "Параллелями", "Меридианом", "Широтой", ""], 
	["География", "37. Длина экватора", "40000км.", "20000км.", "37658км.", "92000км."], 
	["География", "38. Длина 1&deg; дуги экватора и меридиана приблизительно равна", "111км.", "10м.", "32км.", "2471м."], 
	["География", "39. Между точками А и Б расположенных на экваторе - 7&deg;, какое расстояние в километрах их разделяет", "777км", "70м", "133км", "1330м"], 
	["География", "40. Между точками А и Б расположенных на одном из меридианов »333км. Сколько градусов их разделяют", "3&deg;", "9&deg;", "11&deg;", "92&deg;"], 
	["География", "41. Географическая широта полюсов равна", "90&deg;", "80&deg;", "79&deg;", "3&deg;"], 
	["География", "44. Наиболее протеженным будет путешествие по параллели", "0&deg;", "90&deg;", "60&deg;", ""], 
	["География", "45. Наименьшую длину окружности имеет параллель ", "80&deg;", "90&deg;", "0&deg;", ""], 
	["География", "47. Послойной окраской на физических картах изображают ", "Рельеф", "Океаны", "Моря", "Города"], 
	["География", "50. Меньше искажений содержит карта охватывающая", "Люксембург", "Восточную сибирь", "Тихий океан", "Алтайские горы"], 
	["География", "51. Земная кора и часть верхней мантии образуют", "Литосферу", "Атмосферу", "Ионосферу", ""], 
	["География", "52. Внешний слой строения Земли называется", "Земной корой", "Почвой", "Мантией", ""], 
	["География", "53. Земная кора под равнинами имеет толщину", "30-40 км.", "60-70 км.", "10-20 км.", ""], 
	["География", "54. Земная кора под горами имеет толщину", "70-80 км.", "100-110 км.", "10-20 км.", ""], 
	["География", "56. Литосферные плиты перемещаются относительно друг друга в течении года в среднем на", "2-5см.", "3-5м.", "1-3мм.", "20-25см."], 
	["География", "60. Самые высокие горы на Земле", "Гималаи", "Анды", "Памир", "Тянь-шань"], 
	["География", "61. Процесс изменения горных пород под воздействием внешних сил называется", "", "", "", ""], 
	["География", "62. Равнина с высотой до 200м относится к", "", "", "", ""], 
	["География", "63. Равнина с высотой от 200м до 500м – называется", "", "", "", ""], 
	["География", "64. Равнина с высотой выше 500м – называется", "Плоскогорьем", "Низкогорьем", "Равниной", ""], 
	["География", "72. Горы, разделяющие Европу и Азию", "Уральские ", "Кавказские", "Алтайские", ""], 
	["География", "74. В большей степени выветриванию подверглись горы", "Уральские", "Памир", "Алтайские", "Кавказские"], 
	["География", "76. Прибор для определения глубин", "Эхолот", "Невилир", "Глубокомент", ""], 
	["География", "77. Звук с корабля через 6 секунд возвратился в виде эха, значит глубина в данном месте океана, равна", "", "", "", ""], 
	["География", "78. Большую часть дна океана занимают", "Котловины", "Равнины", "Впадины", "Возвышенности"], 
	["География", "81. Воздушная оболочка Земли называется", "Атмосферой", "Ионосферой", "Земной корой", ""], 
	["География", "82. Вблизи земной поверхности располагается слой атмосферы, который называют", "Тропосфера.", "Ионосфера", "Стратосфера", ""], 
	["География", "83. За нормальное атмосферное давление принято считать на широте 45&deg;, высоте 0м над уровнем моря", "760мм рт.ст.", "820мм рт.ст.", "12мм рт.ст.", "755мм рт.ст."], 
	["География", "84. Самая высокая температура в течении суток наблюдается", "В 14 – 15 часов", "В 12 – 13 часов", "В 13 – 14 часов", "В 15 – 16 часов"], 
	["География", "87. Туман образуется ", "Перед восходом солнца", "После дождя", "Перед заходом солнца", ""], 
	["География", "88. Облака, состоящие из мелких кристалликов льда и образованные высоко над земной поверхностью, называются ", "Перистыми", "Кучевыми", "Вымеобразные", "Слоистые"], 
	["География", "89. Осадки характерные в летнее время для территории Казахстана ", "Роса", "Дожди", "Туманы", "Ливни"], 
	["География", "92. При неравномерном распределении атмосферного давления возникает", "Ветер", "Штиль", "Грозы", "Пниженное атмосферное давление"], 
	["География", "93. Легкий ветер, дующий на побережье и меняющий направление 2 раза в сутки", "Бриз", "Бора", "Сирроко", ""], 
	["География", "94. На тихоокеанском побережье Евразии, меняя 2 раза в год направление, дует ", "Муссон", "Бора", "Сирроко", ""], 
	["География", "96. В северном полушарии самый длинный день", "22 июня", "20 июня", "21 июля", ""], 
	["География", "98. Днем осеннего равноденствия в северном полушарии считается", "23 сентября", "12 октября", "3 ноября", ""], 
	["География", "102. Прибор для измерения атмосферного давления", "Барометр", "Термометр ", "Квадрант", ""], 
	["География", "105. Прибор, определяющий направление ветров ", "Флюгер", "Секстант", "Логлинь", "Лисица"], 
	["География", "106. Прибор, определяющий относительную влажность ", "Гигрометр", "Барометр", "Тонометр", "Секстант"], 
	["География", "113. Большую часть гидросферы составляет вода", "Океанов и морей", "Пустынь", "Суши", "Плоскогорий"], 
	["География", "114. Второе место по площади занимает материк", "Африка", "Америка", "Азия", "Европа"], 
	["География", "116. Второе место по площади занимает океан", "Атлантический", "Тихий", "Индийский", "Северный ледовитый"], 
	["География", "119. Самый большой и глубокий океан Земли ", "Тихий", "Индийский", "Северный ледовитый", "Атлантический"], 
	["География", "120. Океан, воды которого омывают только два материка - Северной Америку и Евразию", "Северный Ледовитый ", "Тихий", "Атлантический", ""], 
	["География", "121. Марианский желоб находится в океане", "Тихом", "Атлантический", "Северный ледовитый", ""], 
	["География", "122. Море Индийского океана", "Красное", "Адриатическое море", "море Беллинсгаузена", "море Ицуки"], 
	["География", "123. Внутреннее море", "море Дейвиса", "Кипрское море", "Красное море", "Норвежское море"], 
	["География", "126. Если соленость воды составляет 30 ‰, значит в одном литре воды, содержится растворенных солей", "30 г ", "3 г", "300 г", "0,3 г"], 
	["География", "128. Тайфуны возникают на побережье", "Тихого океана", "Индийского", "Атлантического", ""], 
	["География", "130. Место, где река берет свое начало, называют", "Истоком", "Устьем", "Началом", ""], 
	["География", "131. Место, где река завершает свое течение называется", "Устьем", "Истоком", "Устьем", "Морем"], 
	["География", "132. Широкое длинное понижение, по которому течет река, называют", "", "", "", ""], 
	["География", "133. Самая полноводная река планеты", "Амазонка", "Волга", "Нил", "Енисей"], 
	["География", "134. Самая длинная река на Земле", "Нил", "Амазонка", "Лена", "Енисей"], 
	["География", "135. Самое большое озеро на Земле", "Каспий", "Байкал", "озеро Виктории", ""], 
	["География", "136. Искусственный водоем", "Канал", "Протока", "Заводь", ""], 
	["География", "141. Реки, протекающие по территории с муссонным типом климата, разливаются", "Летом", "Весной", "Осенью", "Зимой"], 
	["География", "144. Органическая горная порода", "Торф", "Кремний", "Глина", "Углерод"], 
];