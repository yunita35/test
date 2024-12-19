//bshp
document.addEventListener("DOMContentLoaded", () => {

    const formKontak = document.querySelector(".Kontak form");
    const namaInput = formKontak.querySelector('input[name="name"]');
    const pesanInput = formKontak.querySelector('input[name="pesan"]');
 
    formKontak.addEventListener("submit", (event) => {
        event.preventDefault(); 

        // mengambil nilai
        const nama = namaInput.value.trim();
        const pesan = pesanInput.value.trim();

        // jika pesan kosong
        if (!nama || !pesan) {
            alert("Harap isi semua kolom sebelum mengirim.");
            return;
        }

        // jika data tidak kosong
        const pesanSukses = document.createElement("p");
        pesanSukses.textContent = `Terimakasih, ${nama}. Atas pesan Anda yang telah diberikan kepada kami`;

        pesanSukses.style.color = "black"; 
        pesanSukses.style.textAlign = "center"; 
        pesanSukses.style.marginTop = "10px"; 
        pesanSukses.style.fontSize = "16px"; 

        // Sisipkan pesan sukses di bawah tombol submit
        formKontak.appendChild(pesanSukses);

        // Reset form
        formKontak.reset();

        //pesan hilang 
        setTimeout(() => {
            formKontak.removeChild(pesanSukses);
        }, 10000); // 
    });

    formKontak.addEventListener("reset", () => {
        console.log("Formulir direset");
    });
});

//nasam
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();  

    var formData = new FormData(this);  
    fetch('https://script.google.com/macros/s/AKfycbxDjpMKqVz3UhNUrzh8cvdDbthdQqDtfRt0VqBwh0Jx5znrn99Knqke9_YSp4Qmi9IT/exec', {  // Ganti dengan URL Web App Google Apps Script
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert('Data berhasil disimpan: ' + data);
        document.getElementById("form").reset();  
    })
    .catch(error => {
        alert('Terjadi kesalahan: ' + error);
    });
});
