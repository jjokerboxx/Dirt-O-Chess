var cham_list = ['아리', '카사딘', '바루스', '가렌', '워윅', '다리우스', '니달리', '피오라', '렉사이', '베인', '이블린', '카직스'];

var class_list = ['기사', '메이지', '싸움꾼', '검사', '정찰대']

var species_list = ['야생', '공허', '악마', '귀족']


bench_list = []

var gold = 100;
const mana = 100;

class Champion
{
	champion_constructor(name, price, rank, hp, atk, atk_speed)
	{
		this.name = name;
		this.price = price;
		this.rank = rank;
	
		this.hp = hp;
		
		// this.mana-generation = m_g;
	
		// this.species = species;
		
		this.atk = atk;
		this.atk_speed = atk_speed; 
	}


	cham_upgrade()
	{
		this.hp = this.hp*3;
		this.atk = this.atk*3;
	}

	get upgrade_resell()
	{
		return this.price*2.5;
	}

	set upgraded_price(price)
	{
		this.price = price*2.5;
	}
}

var Garen = new Champion();
Garen.champion_constructor('가렌', 1, 'common', 1000, 5, 1);


//리롤 버튼
function reroll()
{
	
	if (gold >= 2)
	{
		gold -= 2;
		var doc0 = document.getElementsByClassName('buy_cham')[0].innerText = randomItem(cham_list);
		var doc1 = document.getElementsByClassName('buy_cham')[1].innerText = randomItem(cham_list);
		var doc2 = document.getElementsByClassName('buy_cham')[2].innerText = randomItem(cham_list);
		var doc3 = document.getElementsByClassName('buy_cham')[3].innerText = randomItem(cham_list);
		var doc4 = document.getElementsByClassName('buy_cham')[4].innerText = randomItem(cham_list);
		// 여기에 나중에 각 챔피언의 속성까지 표기
		//   + ' ' + randomItem(cham_list) + ' ' + randomItem(cham_list) + " " + randomItem(cham_list) + ' ' + randomItem(cham_list);

	}
	else
	{
		alert("not enough gold!");
	}
	show_gold();
  // maybe i should use Jquery to run this code in certain block of html
  
  // doc0.innerText = document.write(randomItem(cham_list), ' ');
  // doc1.innerText = document.write(randomItem(cham_list), ' ');
  // document.write(randomItem(cham_list), '&nbsp;');
//   document.write(randomItem(cham_list), '&nbsp;');
//   document.write(randomItem(cham_list), '&nbsp;');

}

// 가렌 연습
function show_cham()
{
		
	var asdasd = document.getElementById('asdasd');
  	asdasd.innerText = String(Garen.hp);
	
}

//경험치 구매
function Exp_Up()
{
	
	if (gold >= 4)
	{
		gold -= 4;
		console.log("clicked!");
  		var EXP = document.getElementById('Exp_Num');
		var exp_num = parseInt(EXP.innerText) + 4;
		console.log(exp_num);
 		EXP.innerText = String(exp_num);
	}
	else
	{
		alert("not enough gold!");
	}
	show_gold();
}

// 골드 변화 표시
function show_gold()
{
	var Gold = document.getElementById('gold');
	Gold.innerText = gold
	
}

//랜덤 챔피언 불러오기
function randomItem (a)
{
	return a[Math.floor(Math.random() * a.length)];
}

// 챔피언 구매시 버튼 삭제 액션
function button_pressed(event)
{
	gold -= 4;  //여기에 각 챔피언의 가격
	var btp = event.currentTarget;
	btp.innerText = " ";
	show_gold();
}

// 시작시 초기화할 것들
function when_load()
{
	show_gold();
	var doc0 = document.getElementsByClassName('buy_cham')[0].innerText = randomItem(cham_list);
	var doc1 = document.getElementsByClassName('buy_cham')[1].innerText = randomItem(cham_list);
	var doc2 = document.getElementsByClassName('buy_cham')[2].innerText = randomItem(cham_list);
	var doc3 = document.getElementsByClassName('buy_cham')[3].innerText = randomItem(cham_list);
	var doc4 = document.getElementsByClassName('buy_cham')[4].innerText = randomItem(cham_list);

	
}
// function Upgrade(cham)
// {
// 	cham.hp, atk, atk_speed *3;
// }

// function Purchase(cham)
// {
// 	bench.push(cham);
// 	gold -= cham.price;
// 	if (gold < 0)
// 	{
// 		undo the fuction;
// 	}
// }

// function Sell(cham)
// {
// 	bench.splice(bench.indexOf(cham), 1);
// 	gold += cham.price;
		
// }
