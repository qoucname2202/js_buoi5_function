// Change open and close exercises
const buttons = document.querySelectorAll('.nav button');
buttons[0].children[0].innerHTML = '📖';
buttons.forEach((item, idx) => {
	item.addEventListener('click', e => {
		item.children[0].innerHTML = '📖';
		buttons.forEach((res, index) => {
			if (idx !== index) {
				res.children[0].innerHTML = '📒';
			}
		});
	});
});
// Event onchange enable input feild
function enableSelected() {
	const value = document.getElementById('formSelectedCustomer').value;
	if (value === 'product') {
		document.getElementById('channels').innerHTML = `
    <div class="form-group">
      <div class="text-field">
        <label for="connectNumb">Số kết nối</label>
        <input
          autocomplete="off"
          type="number"
          id="connectNumb"
          placeholder="Nhập số kết nối"
        />
      </div>
    </div>
  `;
	}
}
// Exercises 1:
function totalScore(score1, score2, score3) {
	if (score1 > 10 || score2 > 10 || score3 > 10) {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Điểm không hợp lệ',
			showConfirmButton: false,
			timer: 1500,
		});
		setTimeout(() => {
			document.getElementById('formCalcScore').reset();
		}, 1500);
		return '';
	}
	return score1 + score2 + score3;
}
document.getElementById('btnCalcScrore').addEventListener('click', e => {
	e.preventDefault();
	const score1 = +document.getElementById('subScore1').value;
	const score2 = +document.getElementById('subScore2').value;
	const score3 = +document.getElementById('subScore3').value;
	const selectedArea = +document.getElementById('formSelectedArea').value;
	const selectedObj = +document.getElementById('formSelectedObj').value;
	const benchmark = +document.getElementById('benchmark').value;
	const result = document.querySelector('.showScore');
	let value;
	if (score1 <= 0 || score2 <= 0 || score3 <= 0) {
		result.innerHTML = `Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0`;
	} else {
		if (selectedArea === 0 && selectedObj !== 0) {
			value = totalScore(score1, score2, score3) + selectedObj;
		} else if (selectedArea !== 0 && selectedObj === 0) {
			value = totalScore(score1, score2, score3) + selectedArea;
		} else if (selectedArea !== 0 && selectedObj !== 0) {
			value = totalScore(score1, score2, score3) + selectedArea + selectedObj;
		} else {
			value = totalScore(score1, score2, score3);
		}
		if (value >= benchmark) {
			result.innerHTML = `Bạn đã đậu. Tổng điểm là: ${value}`;
		} else {
			result.innerHTML = `Bạn đã rớt. Tổng điểm là: ${value}`;
		}
	}
	setTimeout(() => {
		document.getElementById('formCalcScore').reset();
		result.innerHTML = '';
	}, 7000);
});
// Exercise 2:
function calcPriceElectric(numb) {
	let total;
	if (numb <= 50) {
		total = numb * 500;
	} else if (numb <= 100) {
		total = 25000 + (numb - 50) * 650;
	} else if (numb <= 200) {
		total = 57500 + (numb - 100) * 850;
	} else if (numb <= 350) {
		total = 142500 + (numb - 200) * 1100;
	} else {
		total = 307500 + (numb - 350) * 1300;
	}
	return total;
}
document.getElementById('btnCalcPrice').addEventListener('click', e => {
	e.preventDefault();
	const name = document.getElementById('fullName').value;
	const soKW = +document.getElementById('numbKw').value;
	const result = document.querySelector('.showPriceElectric');
	if (soKW < 0) {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Số Kw không hợp lệ',
			showConfirmButton: false,
			timer: 1500,
		});
		setTimeout(() => {
			document.getElementById('formCalcPrice').reset();
		}, 1500);
		return '';
	}
	const value = calcPriceElectric(soKW);
	result.innerHTML = `Họ tên : ${name} - Tiền diện: ${value.toLocaleString(
		'it-IT',
		{ style: 'currency', currency: 'VND' },
	)}`;
	setTimeout(() => {
		document.getElementById('formCalcPrice').reset();
		result.innerHTML = '';
	}, 7000);
});
// Exercise 3:
function calcTax(totalMoney, amount) {
	let total;
	if (totalMoney <= 60000000) {
		total = ((totalMoney - 4000000 - amount * 1600000) * 5) / 100;
	} else if (totalMoney <= 120000000) {
		total = ((totalMoney - 4000000 - amount * 1600000) * 10) / 100;
	} else if (totalMoney <= 210000000) {
		total = ((totalMoney - 4000000 - amount * 1600000) * 15) / 100;
	} else if (totalMoney <= 384000000) {
		total = ((totalMoney - 4000000 - amount * 1600000) * 20) / 100;
	} else if (totalMoney <= 624000000) {
		total = ((totalMoney - 4000000 - amount * 1600000) * 25) / 100;
	} else if (totalMoney <= 960000000) {
		total = ((totalMoney - 4000000 - amount * 1600000) * 30) / 100;
	} else {
		total = ((totalMoney - 4000000 - amount * 1600000) * 35) / 100;
	}
	return total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}
document.getElementById('btnCalcTax').addEventListener('click', e => {
	e.preventDefault();
	const nameCus = document.getElementById('customerName').value;
	const money = +document.getElementById('totalPrice').value;
	const txtSl = +document.getElementById('amountPerson').value;
	const result = document.querySelector('.showTax');
	if (money < 0 || txtSl < 0) {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Thông tin nhập vào không hợp lệ',
			showConfirmButton: false,
			timer: 1500,
		});
		setTimeout(() => {
			document.getElementById('formCalcTax').reset();
		}, 1500);
		return '';
	}
	const value = calcTax(money, txtSl);
	result.innerHTML = `Họ tên : ${nameCus} - Tiền thuế thu nhập cá nhân: ${value}`;
	setTimeout(() => {
		document.getElementById('formCalcTax').reset();
		result.innerHTML = '';
	}, 7000);
});
// Exercise 4:

function calcCable(chanelVip, amountCon, selectedValue) {
	let total;
	if (selectedValue === 'person') {
		total = 4.5 + 20.5 + chanelVip * 7.5;
	} else if (selectedValue === 'product') {
		if (amountCon <= 10) {
			total = 15 + chanelVip * 50 + 75;
		} else {
			total = 15 + chanelVip * 50 + 75 + (amountCon - 10) * 5;
		}
	} else {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Vui lòng chọn loại khách hàng',
			showConfirmButton: false,
			timer: 1500,
		});
		return 0;
	}
	return total.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});
}
document.getElementById('btnCalcCable').addEventListener('click', e => {
	e.preventDefault();
	const valueSelect = document.getElementById('formSelectedCustomer').value;
	const pass = document.getElementById('pass').value;
	const amountVip = +document.getElementById('premiumNumb').value;
	const result = document.querySelector('.showPriceCable');
	let value = calcCable(amountVip, 0, valueSelect);
	if (document.getElementById('channels').childNodes.length > 0) {
		const amountConnect = +document.getElementById('connectNumb').value;
		value = calcCable(amountVip, amountConnect, valueSelect);
	}
	result.innerHTML = `Mã khách hàng : ${pass} - Tiền cáp: ${value}`;
	setTimeout(() => {
		document.getElementById('formCalcPriceCable').reset();
		result.innerHTML = '';
	}, 7000);
});
