const dataPenjualanNovel = [
    {
      idProduct: "BOOK002421",
      namaProduct: "Pulang - Pergi",
      penulis: "Tere Liye",
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: "BOOK002351",
      namaProduct: "Selamat Tinggal",
      penulis: "Tere Liye",
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: "BOOK002941",
      namaProduct: "Garis Waktu",
      penulis: "Fiersa Besari",
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: "BOOK002941",
      namaProduct: "Laskar Pelangi",
      penulis: "Andrea Hirata",
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];
  
  function getInfoPenjualan(dataPenjualan) {
  // Menetapkan variabel counter untuk mencari total modal, total keuntungan, dan terjualTerbanyak
  // Menetapkan variabel untuk menyimpan data produk buku terlaris dan penulis buku terlaris
  let totalModal = 0;
  let totalKeuntungan = 0;
  let terjualTerbanyak = 0;
  let produkBukuTerlaris;
  let penulisBukuTerlaris;

  // Membuat objek untuk menghitung total penjualan berdasarkan penulis
  const totalPenjualanPerPenulis = {};

  // Menjumlahkan totalKeuntungan, totalModal, dan mencari penulis/produk buku terlaris dengan forEach
  dataPenjualan.forEach((data) => {
    totalKeuntungan += (data.hargaJual - data.hargaBeli) * data.totalTerjual;
    totalModal += (data.totalTerjual + data.sisaStok) * data.hargaBeli;

    // Menghitung total penjualan per penulis
    const penulis = data.penulis;
    totalPenjualanPerPenulis[penulis] = (totalPenjualanPerPenulis[penulis] || 0) + data.totalTerjual;

    // Jika value pada property totalTerjual lebih besar dari terjualTerbanyak
    // maka value pada property namaProduct akan dimasukkan ke produkBukuTerlaris
    // dan value pada property penulis akan dimasukkan ke penulisBukuTerlaris
    // dan value terjualTerbanyak sama dengan value totalTerjual
    if (data.totalTerjual > terjualTerbanyak) {
      produkBukuTerlaris = data.namaProduct;
      terjualTerbanyak = data.totalTerjual;
    }
  });

  // Mencari penulis dengan total penjualan tertinggi
  for (const penulis in totalPenjualanPerPenulis) {
    if (totalPenjualanPerPenulis[penulis] > (totalPenjualanPerPenulis[penulisBukuTerlaris] || 0)) {
      penulisBukuTerlaris = penulis;
    }
  }

  // Menghitung persentase keuntungan dan membuatnya menjadi bilangan bulat dengan method toFixed(2)
  const persentaseKeuntungan = `${((totalKeuntungan / totalModal) * 100).toFixed(2)}%`;

  // Mengformat totalKeuntungan dan totalModal agar sesuai dengan menggunakan method toLocaleString()
  const formatTotalKeuntungan = `Rp.${totalKeuntungan.toLocaleString("id-ID")}`;
  const formatTotalModal = `Rp.${totalModal.toLocaleString("id-ID")}`;

  // Mengembalikan data dengan tipe object
  return {
    totalKeuntungan: formatTotalKeuntungan,
    totalModal: formatTotalModal,
    persentaseKeuntungan: persentaseKeuntungan,
    produkBukuTerlaris: produkBukuTerlaris,
    penulisBukuTerlaris: penulisBukuTerlaris,
  };
}

console.log(getInfoPenjualan(dataPenjualanNovel));