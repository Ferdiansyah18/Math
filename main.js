let menu = document.getElementById("menu");

function menuBtn() {
    menu.classList.add("Active"); 
}

function menuCloseBtn() {
    menu.classList.remove("Active")
}

async function kelilingSubmit() {

    let kelilingP = document.getElementById("keliling").value;
    let hasilKeliling = kelilingP * 4;

    if (kelilingP) {
        await Swal.fire({
            title: "Hasilnya adalah: ",
            text: hasilKeliling,
            icon: "success",
            heightAuto: false,
            allowOutsideClick: true,
            showCancelButton: false
        })
    } else {
        Swal.fire({
            title: "Anda belum memasukkan angka",
            icon: "warning",
            heightAuto: false
        })
    }


}

async function luasSubmit() {

    let luasP = document.getElementById("luas").value;
    let hasilLuas = luasP * 2;

    if (luasP) {
        await Swal.fire({
            title: "Hasilnya adalah: ",
            text: hasilLuas,
            icon: "success",
            heightAuto: false,
            allowOutsideClick: true,
            showCancelButton: false
        })
    } else {
        Swal.fire({
            title: "Anda belum memasukkan angka",
            icon: "warning",
            heightAuto: false
        })
    }
}

