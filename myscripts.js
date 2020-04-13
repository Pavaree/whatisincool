function mockupClick(pageToHide, pageToShow) {
    if (pageToShow == "page-ranking") {
        document.getElementById('navbar').style.display = "block";
        document.getElementById('nav_bottom').style.display = "block";
    }
    else if (pageToShow == "page-findbyID") {
        document.getElementById('navbar')
        document.getElementById('nav_bottom')
    }
    document.querySelector('#' + pageToHide).style.display = "none";
    document.querySelector('#' + pageToShow).style.display = "block";
}



function up(max, key_id) {
    if (key_id == 1) {
        document.getElementById("num_water").value = parseInt(document.getElementById("num_water").value) + 1;
        if (document.getElementById("num_water").value >= parseInt(max)) {
            document.getElementById("num_water").value = max;
        }
    }
    else if (key_id == 2) {
        document.getElementById("num_egg").value = parseInt(document.getElementById("num_egg").value) + 1;
        if (document.getElementById("num_egg").value >= parseInt(max)) {
            document.getElementById("num_egg").value = max;
        }
    }
}


function down(min, key_id) {
    let i = 3;
    if (key_id == 1) {
        document.getElementById("num_water").value = parseInt(document.getElementById("num_water").value) - 1;
        if (document.getElementById("num_water").value <= parseInt(min)) {
            document.getElementById("num_water").value = min;
        }
    }

    else if (key_id == 2) {
        document.getElementById("num_egg").value = parseInt(document.getElementById("num_egg").value) - 1;
        if (document.getElementById("num_egg").value <= parseInt(min)) {
            document.getElementById("num_egg").value = min;
        }
    }

    else if (key_id, num_$i) {
        document.getElementById("num_$i").value = parseInt(document.getElementById("num_$i").value) - 1;
        if (document.getElementById("num_$i").value <= parseInt(min)) {
            document.getElementById("num_$i").value = min;
        }
    }
}


var object =[{item:"น้ำเปล่า",amount:"1"},{item:"ไข่ไก่",amount:"1"}]
function add_item() {
    let item_ = document.getElementById("item").value;
    let amont_item = document.getElementById("amount").value;
    object.push({item:item_,amount:amont_item})
    loadItem();

    if (item_ == null && amont_item == null) {
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

    for (var i = 1 ; i <= object.length ; i++) {
        item_list += `
			<div class="row">
                <div class="col-2 ">
                    <p>${i})</p>
                </div>

                <div class="col-4 ">
                    <p>${object[i-1].item}</p>
                </div>

                <div class="col-3 text-center">
                    <input type="text" id="num_${i}" class="form-control input-number" value="${object[i-1].amount}" />
                </div>
                    
                <!-- เพิ่ม -->
                <div class="col-1 text-center">
                    <img src="add.png" alt="" style="width: 15px; height: 15px;" onclick="up('20', num_${i})">
                </div>
                <div class="col-1 ">
                    <!-- ลบ -->
                    <img src="minus.png" alt="" style="width: 15px; height: 15px;" onclick="down('0', num_${i})">
                </div>
            </div>
        `;
    }
    item_list += `<button class="but" onclick="mockupClick('page-ranking','page-findbyID')">เพิ่มรายการ</button>`
    document.getElementById("page-ranking").innerHTML = item_list
    mockupClick("page-findbyID","page-ranking")
}
