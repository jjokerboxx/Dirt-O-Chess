var cham_list = ['아리', '카사딘', '바루스', '가렌', '워윅', '다리우스', '니달리', '피오라', '렉사이', '베인', '이블린', '카직스'];

// var class_list = ['기사', '메이지', '싸움꾼', '검사', '정찰대']

// var species_list = ['야생', '공허', '악마', '귀족']


// bench_list = []

// var gold = 0;
// const mana = 100;

// class Chmpion
// {
	// champion_constructor(name, price, rank, hp, m_g, atk, 	atk_speed)
	// {
		// this.name = name;
		// this.price = price;
		// this.rank = rank;
	
		// this.hp = hp;
		
		// this.mana-generation = m_g;
	
		//this.species = species;
		
		// this.atk = atk;
		// this.atk_speed = atk_speed; 
	// }


	// cham_upgrade()
	// {
		// this.hp = this.hp*3;
		// this.atk = this.atk*3;
	// }

//	get upgrade_resell()
// 	{
// 		return this.price*2.5;
// 	}

// 	set upgraded_price(price)
// 	{
// 		this.price = price*2.5;
// 	}
// }


// const Garen = new Champion('가렌', 1, 'common', 1000, 1, 5, 1);


function reroll()
{
  // maybe i should use Jquery to run this code in certain block of html
  var doc0 = document.getElementById('doc0');

  doc0.innerText = randomItem(cham_list) + ' ' + randomItem(cham_list) + ' ' + randomItem(cham_list) + " " + randomItem(cham_list) + ' ' + randomItem(cham_list);

  // doc0.innerText = document.write(randomItem(cham_list), ' ');
  // doc1.innerText = document.write(randomItem(cham_list), ' ');
  // document.write(randomItem(cham_list), '&nbsp;');
//   document.write(randomItem(cham_list), '&nbsp;');
//   document.write(randomItem(cham_list), '&nbsp;');

}


function show_cham()
{
  var asdasd = document.getElementById('asdasd');
  asdasd.innerText = Garen.hp;
}

function Exp_Up()
{
  var EXP = document.getElementById('Exp_Num');
  var exp_num = parseInt(EXP) + 4;
  EXP.innerText = exp_num;
}



function randomItem (a)
{
	return a[Math.floor(Math.random() * a.length)];
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
