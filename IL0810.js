// Program if
var angka = -27;

if (angka > 0) {
    console.log("Angka adalah positif");
} else if (angka < 0) {
    console.log("Angka adalah negatif");
} else {
    console.log("Angka adalah nol");
}

//Program else//
var usia = 20;

if (usia < 18) {
    console.log("Anda masih anak-anak");
} else {
    if (usia >= 18 && usia < 54) {
        console.log("Anda dewasa");
    } else {
        console.log("Anda sudah tua");
    }
}

//Program nested if//
var nilaiUjian = 87;
var statusMahasiswa;

if (nilaiUjian >= 65) {
    if (nilaiUjian >= 90) {
        statusMahasiswa = "Lulus dengan nilai tinggi";
    } else {
        statusMahasiswa = "Lulus";
    }
} else {
    statusMahasiswa = "Tidak lulus";
}

console.log("Status mahasiswa: " + statusMahasiswa);

//Program switch case//
var dayNumber = 3;
var dayName;

switch (dayNumber) {
    case 1:
        dayName = "Senin";
        break;
    case 2:
        dayName = "Selasa";
        break;
    case 3:
        dayName = "Rabu";
        break;
    case 4:
        dayName = "Kamis";
        break;
    case 5:
        dayName = "Jumat";
        break;
    case 6:
        dayName = "Sabtu";
        break;
    case 7:
        dayName = "Minggu";
        break;
    default:
        dayName = "Hari tidak valid";
}

console.log("Angka Ke-" + dayNumber + " mewakili hari " + dayName);

//Program for statement//
for (var i = 1; i <= 9; i++) {
    console.log(i);
}

//Program While//
var i = 0;

while (i <= 6) {
    console.log(i);
    i++;
}

//Program Do While//
var i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

//Program function//
function hitungLuasPersegi(s) {
    var luas = s * s;
    return luas;
}

var sPersegi = 8;

var hasilLuas = hitungLuasPersegi(sPersegi);
console.log("Luas Persegi adalah: " + hasilLuas);