function mockupClick(pageToHide, pageToShow) {
    if (pageToShow == "page-ranking") {
        document.getElementById('navbar').style.display = "block";
        document.getElementById('nav_bottom').style.display = "block";

        loadItem();
    }
    else if (pageToShow == "page-findbyID") {
        document.getElementById('navbar').style.display = "block";
        document.getElementById('nav_bottom').style.display = "block";
    }
    document.querySelector('#' + pageToHide).style.display = "none";
    document.querySelector('#' + pageToShow).style.display = "block";
}


function up(max, key_id) {
    let num = 'num_' + key_id;
    var object = JSON.parse(localStorage.getItem("object"));
    object[key_id - 1].amount += 1;
    if (object[key_id - 1].amount >= parseInt(max)) {
        object[key_id - 1].amount = max;
    }
    localStorage.setItem("object", JSON.stringify(object));
    document.getElementById(num).value = object[key_id - 1].amount;
}


function down(min, key_id) {
    let num = 'num_' + key_id;
    var object = JSON.parse(localStorage.getItem("object"));
    object[key_id - 1].amount -= 1;
    if (object[key_id - 1].amount <= parseInt(min)) {
        object[key_id - 1].amount = min;
    }
    localStorage.setItem("object", JSON.stringify(object));
    document.getElementById(num).value = object[key_id - 1].amount;
}


var object = [{ item: "น้ำเปล่า", amount: 1 }, { item: "ไข่ไก่", amount: 1 }]
if (localStorage.getItem("object") !== null) {
    object = JSON.parse(localStorage.getItem("object"));
    console.log("ShowItem");
}

function add_item() {
    let item_ = document.getElementById("item").value;
    let amont_item = parseInt(document.getElementById("amount").value);
    if (amont_item !== "") {
        object.push({ item: item_, amount: amont_item })
        localStorage.setItem("object", JSON.stringify(object));
        console.log(localStorage.getItem("object"));
        loadItem();
        mockupClick("page-findbyID", "page-ranking")
    }

}


function loadItem() {
    item_list = `
    <div class="row">
          <div class="col-6 text-center">
            <p>รายการ</p>
          </div>
          <div class="col-3 text-center">
            <p>จำนวน</p>
          </div>

          <div class="col-2 ">
            <p></p>
          </div>
          <div class="col-12 ">
            <hr size="10" color="white">
          </div>
        </div>`

    for (var i = 1; i <= object.length; i++) {
        item_list += `
			<div class="row">
                <div class="col-2 ">
                    <p>${i})</p>
                </div>

                <div class="col-4 ">
                    <p>${object[i - 1].item}</p>
                </div>

                <div class="col-3 text-center">
                    <input type="number" id="num_${i}" class="form-control input-number" value="${object[i - 1].amount}" />
                </div>
                    
                <!-- เพิ่ม -->
                <div class="col-1 text-center">
                    <img src="add.png" alt="" style="width: 15px; height: 15px;" onclick="up('100', ${i})">
                </div>
                <div class="col-1 ">
                    <!-- ลบ -->
                    <img src="minus.png" alt="" style="width: 15px; height: 15px;" onclick="down('0', ${i})">
                </div>
            </div>
        `;
    }
    item_list += `<button class="but" onclick="mockupClick('page-ranking','page-findbyID')">เพิ่มรายการ</button>`
    document.getElementById("page-ranking").innerHTML = item_list
    //mockupClick("page-findbyID", "page-ranking")

}
