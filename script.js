
const produk = [
    {
        nama: "tambler insert paper",
        warna: "hitam,bening",
        harga: 25000,
        kapasitas: "500 ml",
        bahan: "baja tahan karat",
        gambar: "img/tumbler insert paper.jpg"
    },
    {
        nama: "tumbler aluminium",
        warna: "hija,biru menggilap",
        harga: 95000,
        kapasitas: "600 ml",
        bahan: "baja tahan karat",
        gambar: "img/tumbler.aluminium.jpg"
    },
    {
        nama: "tambler bambu",
        warna: "cream",
        harga: 90000,
        kapasitas: "500 ml",
        bahan: "bambu",
        gambar: "img/tumbler.bambu.jpg"
    },
    {
        nama: "tambler infudser",
        warna: "Biru muda",
        harga: 88000,
        kapasitas: "500 ml",
        bahan: "plastik",
        gambar: "img/tumbler.infuser.webp"
    },
    {
        nama: "tambler silikon",
        warna: "hitam",
        harga: 42000,
        kapasitas: "600 ml",
        bahan: "pasir silika(kuarsa)",
        gambar: "img/tumbler.silikon.jpg"
    },
    {
        nama: "tambler plastik akrilik",
        warna: "hitam bening",
        harga: 87000,
        kapasitas: "500 ml",
        bahan: "Polimetil Metakrilat",
        gambar: "img/tumbler.plasktikaklirik.webp"
    },
    {
        nama: "tu,bler kramik",
        warna: "coklat",
        harga: 93000,
        kapasitas: "600 ml",
        bahan: "tanah liat bakar",
        gambar: "img/tumbler.kramik.jpg"
    },
    {
        nama: "tumbler kaca",
        warna: "Krem",
        harga: 89000,
        kapasitas: "500 ml",
        bahan: "kaca khusus",
        gambar: "img/tumbler.kaca.jpg"
    },
    {
        nama: "tumbler infuser",
        warna: "biru muda",
        harga: 98000,
        kapasitas: "750 ml",
        bahan: "plastik",
        gambar: "img/tumbler.infuser.webp"
    }
];

const daftarProduk = document.getElementById("produk-list");

produk.forEach((item) => {
    const kartu = document.createElement("article");
    kartu.className = "product-card";

    kartu.innerHTML = `
        <img src="${item.gambar}" alt="${item.nama}"
             loading="lazy">
        <h3>${item.nama}</h3>
        <p>Warna: ${item.warna}</p>
        <p>Kapasitas: ${item.kapasitas}</p>
        <p class="price">Rp${item.harga.toLocaleString("id-ID")}</p>
        <button type="button">Lihat Detail</button>
    `;

    kartu.querySelector("button").addEventListener("click", () => {
        alert(
            `SEMBLUR - ${item.nama}\n\n` +
            `Warna: ${item.warna}\n` +
            `Kapasitas: ${item.kapasitas}\n` +
            `Bahan: ${item.bahan}\n` +
            `Harga: Rp${item.harga.toLocaleString("id-ID")}`
        );
    });

    daftarProduk.appendChild(kartu);
});
