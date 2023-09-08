function getAngkaTerbesarKedua(dataNumbers) {
  // Periksa apakah dataNumbers adalah array dan memiliki setidaknya 2 elemen
  if (typeof dataNumbers === 'undefined') {
    return "Error: Bro where is the parameter?";
  }

  if (!Array.isArray(dataNumbers) || dataNumbers.length < 2) {
    return "Error: Parameter harus array dan panjangnya minimal 2 array.";
  }

  // mengurutkan dalam urutan menurun
  const urutArray = [...new Set(dataNumbers)].sort((a, b) => b - a);

  // Kembalikan angka terbesar kedua
  return urutArray[1];
}

const dataNumbers = [97, 4, 7, 7, 4, 3, 2, 24, 8];
console.log(getAngkaTerbesarKedua(dataNumbers));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());