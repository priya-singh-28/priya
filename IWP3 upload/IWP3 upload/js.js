var id_isbn
document.getElementsByClassName('form')[0].addEventListener("submit",(e) => {
	e.preventDefault();
	var id_title = document.getElementById('id_title').value;
	var id_auth = document.getElementsByClassName('id_auth');
	id_isbn = document.getElementById('id_isbn').value;
	var pub = document.getElementById('id_pub').value;
	var ed = document.getElementById('id_ed').value;
	var id_price = document.getElementById('id_price').value;
	var id_dop = document.getElementById('id_dop').value;
	var regex;

	if(id_title.length>75 || id_title.length==0) {
		alert("Max length of the title allowed is 75 characters and minimum is 1.");
		return;
	}

	var ctr=0;
	for(var i=0;i<id_auth.length;i++) {
		if(id_auth[i].value.length!=0) {
			ctr++;
		}
	}
	console.log(ctr);
	if(ctr==0 || ctr>5) {
		alert("Please enter a minimum of 1 and maximum of 5 authors.");
		return;
	}

	regex = /^[0-9]{3}-[0-9]{1}-[0-9]{2}-[0-9]{6}-[0-9]{1}$/;
	if(!id_isbn.match(regex)) {
		alert("Please match the ISBN format.");
		return;
	}

	if(pub.length>30 || pub.length==0) {
		alert("Max length of publisher allowed is 30 characters and minimum is 1.");
		return;
	}

	var id_ed = parseInt(ed)
	if(id_ed || ed.length==0) {
		alert("Edition value can only be a string and minimum length can be 1.")
		return;
	}
	var price = parseInt(id_price)
	if(!price) {
		alert("Price can only be a number and minimum length can be 1.")
		return;
	}


	if(!id_dop) {
		alert("Please enter date of purchase.");
		return;
	}

	document.getElementsByClassName('overlay')[0].style.display="block";

})

document.getElementsByClassName('submit2')[0].addEventListener('click',() => {
	document.getElementsByClassName('form')[0].style.display="none";
	document.getElementsByClassName('overlay')[0].style.display="none";
	document.getElementsByTagName('table')[0].style.display="block";

	function randomStr(len, arr) {
        var ans = '';
        for (var i = len; i > 0; i--) {
            ans +=  arr[Math.floor(Math.random() * arr.length)];
        }
        return ans;
    }

    function GFG_Fun() {
        return randomStr(8, '123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    var id = GFG_Fun();
    var now = new Date();
    console.log(now.getDate() + "-" +now.getMonth() + "-" +now.getFullYear());
    var return_d = new Date();
    return_d.setMonth(now.getMonth()+1);
    console.log(return_d.getDate() + "-" +return_d.getMonth() + "-" +return_d.getFullYear());
    document.getElementById('id').innerHTML=id;
    document.getElementById('isbn').innerHTML=id_isbn;
    document.getElementById('doi').innerHTML=now.getDate() + "-" +now.getMonth() + "-" +now.getFullYear();
	document.getElementById('dor').innerHTML=return_d.getDate() + "-" +return_d.getMonth() + "-" +return_d.getFullYear();
})
