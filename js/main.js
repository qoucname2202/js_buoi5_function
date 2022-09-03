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
// Evenr onchange enable input feild
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
