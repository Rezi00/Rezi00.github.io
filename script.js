document.addEventListener("DOMContentLoaded", () => {
  // Tempatkan seluruh kode JavaScript Anda di sini
  // Ambil elemen-elemen yang dibutuhkan
  
  const hireModal = document.getElementById("hireModal");
  const hireForm = document.getElementById("hireForm");
  const openModalButton = document.querySelector('a[href="#Hire Me"]');
  const closeModalButton = document.querySelector(".close");

  // Tampilkan modal ketika tombol "Hire Me" diklik
  openModalButton.addEventListener("click", () => {
    hireModal.style.display = "block";
  });

  // Sembunyikan modal ketika tombol close (x) diklik
  closeModalButton.addEventListener("click", () => {
    hireModal.style.display = "none";
  });

  // Sembunyikan modal jika pengguna mengklik di luar area modal
  window.addEventListener("click", (event) => {
    if (event.target === hireModal) {
      hireModal.style.display = "none";
    }
  });

  // Kirim formulir ketika tombol "Submit" diklik (Anda perlu menambahkan kode pengiriman data formulir sesuai dengan kebutuhan Anda)
  hireForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Di sini Anda dapat menambahkan kode untuk mengirim data formulir, misalnya, menggunakan AJAX atau mengirim permintaan HTTP.
    // Setelah pengiriman berhasil, Anda dapat menampilkan pesan sukses atau tindakan lainnya.

    // Setelah formulir dikirim, sembunyikan modal
    hireModal.style.display = "none";
    const hireModal = document.getElementById('hireModal');
const hireForm = document.getElementById('hireForm');
const openModalButton = document.getElementById('hireMeButton'); // Perhatikan perubahan ini
const closeModalButton = document.querySelector('.close');

  });
});
