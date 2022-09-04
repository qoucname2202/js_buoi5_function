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
// trúng tuyển nếu tổng diemTong >= diemChuan && diem1, diem2 , diem3 !== 0
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
