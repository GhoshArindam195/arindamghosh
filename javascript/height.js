let x = window.innerHeight-document.querySelector('header').offsetHeight;
document.querySelector('.hero').setAttribute('style', 'height:'+x+'px;');

location.replace("index.html#")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let speed = 150;

let arr = ["Java", "JDBC", "HTML", "CSS", "Javascript", "CSS Frameworks", "JS Frameworks", "Django"]
let arr2 = ["Google", "Facebook", "Amazon", "Infosys", "Cognizant", "Mindtree", "Qualtech", "Cloud Kaptan", "TCS"]
const type = async (text) => {
	for(let m = 0; m!=-2; m++){
		for(let l = 0; l<arr2.length; l++){
			text = arr2[l]
			for(let i = 0;i<=text.length; i++){
				await sleep(speed)
				document.querySelector('.text3').innerHTML += text.charAt(i);
			}
			await sleep(300);
			for(let j = text.length;j!=0; j--){
				await sleep(75)
				document.querySelector('.text3').innerHTML = text.slice(0, -1);
				text = text.slice(0, -1);
			}
		}
	}
	
}
const type2 = async (text) => {
	for(let m = 0; m!=-2; m++){
		for(let l = 0; l<arr.length; l++){
			text = arr[l]
			for(let i = 0;i<=text.length; i++){
				await sleep(speed)
				document.querySelector('.text2').innerHTML += text.charAt(i);
			}
			await sleep(300);
			for(let j = text.length;j!=0; j--){
				await sleep(75)
				document.querySelector('.text2').innerHTML = text.slice(0, -1);
				text = text.slice(0, -1);
			}
		}
	}
	
}
type("1");
type2("1");