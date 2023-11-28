function addItem() {
  const input = document.getElementById('input');
  const itemList = document.getElementById('itemList');
  const text = input.value.trim();

  if (text !== '') {
    const closeBtn = document.createElement("span");
    const li = document.createElement('li');
    li.innerText = text;

    closeBtn.innerHTML = '<button>close</button>'
    closeBtn.onclick = function () {
      var listItem = this.parentElement;
      listItem.style.display = "none";
    };
    li.appendChild(closeBtn);

    li.onclick = function () {
      this.classList.toggle("completed");
    };
    // li.onclick = function () {
    //   li.classList.toggle('completed')
    // };

    itemList.appendChild(li);
    input.value = '';
  } else {
    alert('please')
  }
}
//  addItem();
