var ihari;
var sAnggota;

iHari = prompt("Masukan jumlah hari keterlambatan.", 1);
sAnggota = prompt("Anggota perpustakaan? (Y)a atau (T)idak" "Y");

if(iHari > 7){
    if(sAnggota == "Y"){
        alert("denda rp 10.000, peminjaman dibekukan");
    }else{
        alert("denda rp 20.000, peminjaman dibekukan");
    }
}else{
    if(sAnggota == "Y"){
        alert("denda rp 2.000");
    }else{
        alert("denda rp 5.0000");
    }
}