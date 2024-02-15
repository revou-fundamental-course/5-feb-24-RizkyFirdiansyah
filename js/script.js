function convertTemperature() {
    const celciusInput = document.getElementById("celciusInput");
    const celcius = parseFloat(celciusInput.value);

    // Validasi input tidak boleh kosong
    if (isNaN(celcius)) {
        alert("Masukkan suhu Celcius terlebih dahulu!");
        celciusInput.focus();
        return;
    }

    // Melakukan konversi ke Fahrenheit
    const fahrenheit = (celcius * 9 / 5) + 32;

    // Menampilkan hasil konversi
    document.getElementById("fahrenheitOutput").value = fahrenheit;

    // Menampilkan cara kalkulasi
    document.getElementById("calculationMethod").value = celcius + "°C x (9/5) + 32 = " + fahrenheit + "°F";
}

