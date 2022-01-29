function authorName() {
    author = "Much Yazid";
    myGithub = "https://github.com/yazid2021";
    myAge = 18;
    myCountry = "Indonesia";
}

// Variabel
document.writeln(`<h2 style="margin-top: 100px;">Variabel</h2>`);
    document.writeln(`<p>Variabel seperti class pada HTML, yakni membuat memori yang nantinya berisi value.</p>`);
    document.writeln(`<p>Tag HTML bisa dideklarasikan pada <code>document.writeln()</code>, dan untuk syntax seperti tanda dolar <code>$</code> dan kurung kurawal <code>{}</code> yang digabungkan berguna untuk memanggil variabel.</p>`)
    document.writeln(`<p>Variabel memiliki beberapa jenis yaitu: <code>var, let, const</code>. Perbedaannya adalah:</p>`);
    document.writeln(`<p>- <code>var</code> variabel yang sudah tidak direkomendasikan lagi, karena tidak bisa <span class="italic">local scope function</span>, dan bisa direplika pada deklarasi yang sama,<br>
    - <code>let</code> sama seperti var, let juga bisa direplika, tetapi jenis variabel ini bisa di semua <span class="italic">scope</span>,<br>
    - <code>const</code> variabel jenis ini bisa di semua <span class="italic">scope</span> dan sama sekali tidak bisa direplika.</p>`);    
document.writeln(`<img width="80%" src="assets/variabel.png" alt="aa"> <br> `);
document.writeln(`Output:<br><br>`);
const languageName = "JavaScript";
const languageCreator = "Brendan Eich";
const languageSince = "1995";
const languageProgrammingType = "Scripting, Front-End, Interactive web.";
    document.writeln(`<code><u>Bahasa Pemrograman</u> = ${languageName},</code></br> <code><u>Dibuat Oleh</u> = ${languageCreator},</code></br> <code><u>Dibuat Tahun</u> = ${languageSince},</code><br> <code><u>Tipe Bahasa</u> = ${languageProgrammingType}</code></code><br><br><br>`);


// Operator Aritmatika
document.writeln("<h2>Operator Aritmatika</h2>")
document.writeln(`<p>Melakukan operasi perhitungan aritmatika, seperti tambah, kurang, dsb.</p>`)
document.writeln(`<img width="80%" src="assets/aritmatika.png" alt="aa"> <br> `);
document.writeln(`Output:<br><br>`);

    let result = 1 + 2;
    document.writeln(`<code>1 + 2 = ${result} </code></br>`);
    let originalResult = result;

        result -= 1;
        document.writeln(`<code>${originalResult} - 1 =  ${result}</code></br>`);
        originalResult = result;

        result *= 2;
        document.writeln(`<code>${originalResult} x 2 =  ${result} </code></br>`);
        originalResult = result;

        result /= 4;
        document.writeln(`<code>${originalResult} : 4 =  ${result}</code> </br>`);
        originalResult = result;

        result %= 4;
        document.writeln(`<code>${originalResult} % 4 =  ${result}</code> </br>`);
        originalResult = result;
    document.write('<br><br><br>')    

// Operator Unary
document.writeln('<h2>Operator Unary</h2>');
document.writeln('<p>Operator Unary adalah operator yang biasanya membutuhkan satu data saja pada tipe data number</p>')
document.writeln('<p>Operator Unary memiliki empat operator, diantaranya: </p>')

document.writeln('<h3> 1. Positive</h3>');
document.writeln('<p>Digunakan untuk menandai bahwa tipe data ini positif, dengan mengetik <code>+</code> saja, lihat gambar dibawah.</p>');
document.writeln('<img width="80%" src="assets/positive-unary.png" alt="positif unary"> <br> ');
document.writeln('Output:<br><br>');
    let postiveUnary = +100;
    document.writeln(`<code>${postiveUnary}</code> </br>`);

document.writeln('<h3>2. Negative</h3>');
document.writeln('<p>Digunakan untuk menandai bahwa tipe data ini negatif, dengan mengetik <code>-</code> saja, lihat gambar dibawah.</p>');
document.writeln('<img width="80%" src="assets/negative.png" alt="negative unary"> <br> ');
document.writeln('Output:<br><br>');
    let negativeUnary = -100;
    document.writeln(`<code>${negativeUnary}</code> </br>`);

document.writeln('<h3>3. Increment</h3>');
document.writeln('<p>Increment adalah jika kita ketik <code>++</code> hasilnya akan bertambah satu seperti gambar dibawah ini.</p>')
document.writeln('<img width="80%" src="assets/increment.png" alt="increment"> <br> ');
document.writeln('Output:<br><br>');
    let aritmatikaIncrement = 100;
    aritmatikaIncrement++;
        document.writeln(`<code>${aritmatikaIncrement}</code> </br>`);

document.writeln('<h3>4. Decrement</h3>');
document.writeln('<p>Increment adalah jika kita ketik <code>--</code> hasilnya akan berkurang satu seperti gambar dibawah ini:</p>')
document.writeln('<img width="80%" src="assets/decrement.png" alt="decrement"> <br> ');
document.writeln('Output:<br><br>');
    let aritmatikaDecrement = 100;
    aritmatikaDecrement--;
        document.writeln(`<code>${aritmatikaDecrement}</code> </br><br><br>`);

// Operator Perbandingan
document.writeln('<h2>Operator Perbandingan</h2>');
document.writeln('<p>Operator relasi atau perbandingan adalah operator yang digunakan untuk membandingkan dua nilai.</p>');
document.writeln('<p>Operator perbandingan akan menghasilkan sebuah nilai boolean <code>true</code> dan <code>false</code>.</p>')
    document.writeln('<p><code> > : lebih dari </code></p>');
    document.writeln('<p><code> < : kurang dari </code></p>');
    document.writeln('<p><code> = atau == : sama dengan </code></p>');
    document.writeln('<p><code> != atau !== : tidak sama dengan </code></p>');
    document.writeln('<p><code> >= : lebih sama dengan </code></p>');
    document.writeln('<p><code> <= : kurang sama dengan </code></p>');
document.writeln('<img width="80%" src="assets/perbandingan.png" alt="perbandingan"> <br> ');
document.writeln('Output:<br><br>');
    var firstPerbandingan = 32;
    var secondPerbandingan = 33;

        var hasilPerbandingan = firstPerbandingan > secondPerbandingan;
            document.writeln(`<code>${firstPerbandingan} > ${secondPerbandingan} = ${hasilPerbandingan}</code></br>`);

        var hasilPerbandingan = firstPerbandingan < secondPerbandingan;
            document.writeln(`<code>${firstPerbandingan} < ${secondPerbandingan} = ${hasilPerbandingan}</code></br>`);

        var hasilPerbandingan = firstPerbandingan >= secondPerbandingan;
            document.writeln(`<code>${firstPerbandingan} >= ${secondPerbandingan} = ${hasilPerbandingan}</code></br>`);

        var hasilPerbandingan = firstPerbandingan <= secondPerbandingan;
            document.writeln(`<code>${firstPerbandingan} <= ${secondPerbandingan} = ${hasilPerbandingan}</code></br>`);

        var hasilPerbandingan = firstPerbandingan != secondPerbandingan;
            document.writeln(`<code>${firstPerbandingan} != ${secondPerbandingan} = ${hasilPerbandingan}</code></br><br><br>`);

// Operator Bitwise
document.writeln(`<h2>Operator Bitwise</h2>`);
document.writeln('<p>Operator Bitwise digunakan secara khusus untuk melakukan proses logika, dimana nilai atau operand yang diolah adalah bilangan biner. Bilangan Biner adalah bilangan yang hanya terdiri dari 2 angka yaitu angka 0 dan 1. Jenis-jenis dan simbol operator bitwise: </p>');
    document.writeln('<code>AND = &</code>');
    document.writeln('<code>OR = |</code>');
    document.writeln('<code>XOR = ^</code>');
    document.writeln('<code>NOT = ~</code>');
    document.writeln('<code>Left Shift = <<</code>');
    document.writeln('<code>Right Shift = >></code>');

document.writeln('<h3>1. AND</h3>');
    document.writeln('<p><code>AND = &</code> Operand AND adalah mengatur setiap bit ke 1 jika kedua bit sama-sama 1.</p>');
document.writeln('<img width="80%" src="assets/and_bitwise.png" alt="Bitwise AND"> <br> ');
document.writeln('Output:<br><br>');
    var firstAnd = 1;
    var secondAnd = 0;
        
        var hasilAndBitwise = firstAnd & secondAnd;
        document.writeln(`<code>1 & 0 = ${hasilAndBitwise}</code><br>`);

        var hasilAndBitwise = secondAnd & firstAnd;
        document.writeln(`<code>0 & 1 = ${hasilAndBitwise}</code><br>`);

        var hasilAndBitwise = secondAnd & secondAnd;
        document.writeln(`<code>0 & 0 = ${hasilAndBitwise}</code><br>`);

        var hasilAndBitwise = firstAnd & firstAnd;
        document.writeln(`<code>1 & 1 = ${hasilAndBitwise}</code><br>`);

document.writeln('<h3>2. OR</h3>');
    document.writeln('<p><code>OR = |</code> Operand OR adalah mengatur setiap bit ke 1 jika salah satu dari dua bit adalah 1.</p>');
document.writeln('<img width="80%" src="assets/or_bitwise.png" alt="bitwise OR"> <br> ');
document.writeln('Output:<br><br>');
    var firstOr = 1;
    var secondOr = 0;

        var hasilOrBitwise = firstOr | secondOr;
        document.writeln(`<code>1 | 0 = ${hasilOrBitwise}</code><br>`);

        var hasilOrBitwise = secondOr | secondOr;
        document.writeln(`<code>0 | 0 = ${hasilOrBitwise}</code><br>`);

        var hasilOrBitwise = firstOr | secondOr;
        document.writeln(`<code>1 | 0 = ${hasilOrBitwise}</code><br>`);

        var hasilOrBitwise = firstOr | firstOr;
        document.writeln(`<code>1 | 1 = ${hasilOrBitwise}</code><br>`);


document.writeln('<h3>3. XOR</h3>');
        document.writeln('<p><code>XOR = ^</code> Ketika operasi bitwise XOR dilakukan pada sepasang bit, ia mengembalikan 1 jika bit berbeda.</p>');
document.writeln('<img width="80%" src="assets/xor_bitwise.png" alt="bitwise XOR"> <br> ');
document.writeln('Output:<br><br>');
var firstXor = 1;
var secondXor = 0;

    var hasilXorBitwise = firstXor ^ secondXor;
    document.writeln(`<code>1 ^ 0 = ${hasilXorBitwise}</code><br>`);

    var hasilXorBitwise = secondXor ^ secondXor;
    document.writeln(`<code>0 ^ 0 = ${hasilXorBitwise}</code><br>`);

    var hasilXorBitwise = firstXor ^ secondXor;
    document.writeln(`<code>1 ^ 0 = ${hasilXorBitwise}</code><br>`);

    var hasilXorBitwise = firstXor ^ firstXor;
    document.writeln(`<code>1 ^ 1 = ${hasilXorBitwise}</code><br>`);


document.writeln('<h3>4. NOT</h3>');
    document.writeln('<p><code>NOT = ~</code> Ketika operasi bitwise NOT dilakukan maka akan membalikan nilai yang semula 1 menjadi 0.</p>');
document.writeln('<img width="80%" src="assets/not_bitwise.png" alt="bitwise NOT"> <br> ');
document.writeln('Output:<br><br>');

    let firstNot = 1001001;
        firstNot = 1010110;
        ~firstNot;
        document.writeln(`<code>${firstNot}</code><br><br><br>`);

// Array
document.writeln('<h2>Array</h2>');
    document.writeln('<p><code>[]</code> Array merupakan struktur data yang digunakan untuk menyimpan sekumpulan data dalam satu tempat. Setiap data di dalam array memiliki indeks, sehingga kita mudah memprosesnya.</p>');
    document.writeln('<p>Setiap data dalam Array memiliki indeks, sehingga kita akan mudah memprosesnya. Indeks dalam array dimulai dari angka <code>[0]</code></p>')
    document.writeln(`<p>Dapat disimpulkan bahwa Array dapat menggantikan variabel yang menampung banyak value, daripada membuat variabel dengan banyak deklarasi dan value itu akan memakan waktu lama, tidak efisien, dan memakan memori terlalu banyak.</p>`);
    document.writeln(`<p>Contoh Array:</p>`);

document.writeln('<img width="80%" src="assets/contoh_array.png" alt="contoh Array"> <br> ');
document.writeln('Output:');
    const myArray = ['coklat',' stroberi', ' melon'];
        document.writeln(`<p><code>${myArray}</code></p>`);


document.writeln(`<p>Kita bisa menggunakan tanda <code>,</code> untuk menambahkan value tipe data. Karena Javascript merupakan pemrograman yang dynamic typing, maka kita bisa mencmpuri semua tipe data dalam Array:</p>`);

document.writeln('<img width="80%" src="assets/array_acak.png" alt="contoh Array acak"> <br> ');
document.writeln('Output: <br>');
    const myArrayData = ["Laptop have", 1, true];
        document.writeln(`<p><code>${myArrayData}</code></p>`);
    
document.writeln(`<h3>Cara Mengambil/Index Data Pada Array</h3>`);
document.writeln('<p>Array akan menyimpan sekumpulan data dan memberinya nomer indeks agar mudah diakses. Indeks array selalu dimulai dari angka nol<code>[0]</code>.</p>');
document.writeln('<img width="80%" src="assets/index_array.png" alt="contoh index array"><br>');
document.writeln('Output: <br>');
    let contohKata = "Duba";
    let hasilIndex = contohKata[1];
        document.writeln(`<code>${hasilIndex}</code>`);

/* SUMBER = https://www.matawebsite.com/blog/memahami-array-method-pada-javascript */
document.writeln("<h3>Menggunakan Array Method Pada Javascript</h3>");
document.writeln("<p>Di javascript sudah disediakan build-in function(method) untuk mengelola data pada array.</p>");
document.writeln("<p>Dibawah ini adalah kisi-kisi method array javascript:</p>");

    document.writeln("<h4>1. Slice</h4>");
    document.writeln("<p>Method Array.slice() digunakan untuk ’memotong’ array menjadi array baru, atau menjadi ’sub-array’ dari array asal. Method <code>slice()</code> ini membutuhkan 2 buah argumen yang berisi posisi index awal dan akhir pemotongan. </p>");
    document.writeln('<img width="80%" src="assets/array_slice.png" alt="array slice"><br>');
    document.writeln('Output: <br>');
        let arraySlice = ["CPU"," Mouse"," Laptop"," Monitor"," Keyboard"," PSU"," VGA"];
        let hasilArraySlice = arraySlice.slice(3,5);
            document.writeln(`<p><code>${hasilArraySlice}</code></p>`);

    document.writeln("<h4>2. Push</h4>");
    document.writeln("<p>method Array.push() digunakan untuk menambahkan elemen/value pada akhir array.</p>");
    document.writeln('<img width="80%" src="assets/array_push.png" alt="array push"><br>');
    document.writeln('Output: <br>');
        let arrayPush = ["Brandon"," Beckett"];
        arrayPush.push(" Miller");
            document.writeln(`<p><code>${arrayPush}</code></p>`);

    document.writeln("<h4>3. Pop</h4>");
    document.writeln("<p>Method Array.pop() adalah menghapus elemen terakhir dari array.</p>");
    document.writeln('<img width="80%" src="assets/array_pop.png" alt="array pop"><br>');
    document.writeln('Output: <br>');
        let arrayPop = [0,1,2,3,4,5];
        arrayPop.pop();
        document.writeln(`<p><code>${arrayPop}</code></p>`);

    document.writeln("<h4>4. Shift</h4>");
    document.writeln("<p>Method Array.shift() adalah menghapus elemen paling awal dari array.</p>")
    document.writeln('<img width="80%" src="assets/array_shift.png" alt="array shift"><br>');
    document.writeln('Output: <br>');
        let arrayShift = ["TV"," Kulkas"," Kipas"," AC"];
        arrayShift.shift();
        document.writeln(`<p><code>${arrayShift}</code></p>`);

    document.writeln("<h4>5. Unshift</h4>");
    document.writeln("<p>Method Array.unshift() adalah menambahkan elemen paling awal dari array.</p>");
    document.writeln('<img width="80%" src="assets/array_unshift.png" alt="array unshift"><br>');
    document.writeln('Output: <br>');
        let arrayUnshift = [" Microsoft"," Google"," Facebook"];
        arrayUnshift.unshift("Amazon");
        document.writeln(`<p><code>${arrayUnshift}</code></p>`);

    document.writeln("<h4>6. Join</h4>");
    document.writeln("<p>Method Array.join() adalah menggabungkan elemen array menjadi sebuah string, Array.join() harus ditempatkan pada output javascript seperti <code>document.writeln()</code> atau <code>console.log()</code></p>");
        document.writeln('<img width="80%" src="assets/array_join_string.png" alt="contoh array join tipe string"><br>');
        document.writeln('Output: <br>');
            let arrayJoinString = ["Makan","Mgodonf","Film","Turu","Repeat"];
            document.writeln(`<p><code>${arrayJoinString.join("-")}</code></p>`);
        document.writeln("<p>Menggunakan tipe data number:</p>");
        document.writeln('<img width="80%" src="assets/array_join_number.png" alt="contoh array join tipe number"><br>');
        document.writeln('Output: <br>');
            let arrayJoinNumber = [0,1,2,3,4,5];
            document.writeln(`<p><code>${arrayJoinNumber.join("|")}</code></p>`);

    document.writeln("<h4>7. Reverse</h4>");
    document.writeln("<p>Method Array.reverse() digunakan untuk membalikkan urutan elemen dari array.</p>");
    document.writeln('<img width="80%" src="assets/array_reverse.png" alt="contoh array reverse"><br>');
    document.writeln('Output: <br>');
        let arrayReverse = [95,96,97,98,99,100];
        arrayReverse.reverse();
        document.writeln(`<p><code>${arrayReverse}</code></p>`);

    document.writeln("<h4>8. Sort</h4>");
    document.writeln("<p>Method Array.sort() digunakan untuk mengurutkan elemen pada array baik ascending maupun descending atau lebih dikenal dengan dari kecil ke besar dan dari besar ke kecil.</p>");
    document.writeln("<p>Menggunakan tipe data Number:</p>");
    document.writeln('<img width="80%" src="assets/array_sort1.png" alt="contoh array sort1"><br>');
    document.writeln('Output: <br>');
        let arraySort1 = [7,12,4,6,10,20,45,2,1];
        arraySort1.sort();
        // arraySort1.sort(function arraySort1(a,b) {return a > b});
    document.writeln(`<p><code>${arraySort1}</code></p>`);
    document.writeln("<p>Hasilnya tak sesuai yang diperkirakan karena 2 lebih besar daripada 1, jadi hasilnya tak berurutan.</p>");
    document.writeln('<p>Kita bisa memanfaatkan <span class="italic">function</span> agar lebih berurutan seperti gambar dibawah ini: </p>');
        // Ascending
    document.writeln(`<p>Pengurutan ke ascending (dari terkecil ke terbesar):</p>`);
        // Number
        document.writeln('<img width="80%" src="assets/array_sort_ascending.png" alt="contoh array ascending number"><br>');
        document.writeln('Output: <br>');
        let arraySortAscendingNum = [7,12,4,6,10,20,45,2,1];
        arraySortAscendingNum.sort(function arraySortAscendingNum(a,b) {return a > b});
        document.writeln(`<p><code>${arraySortAscendingNum}</code></p>`);
        // String
        document.writeln('<img width="80%" src="assets/array_sort_ascending_str.png" alt="contoh array ascending string"><br>');
        document.writeln('Output: <br>');
        let arraySortAscendingStr = ["d","f","z","w","a","t"];
        arraySortAscendingStr.sort(function arraySortAscendingStr(a,b) {return a > b});
        document.writeln(`<p><code>${arraySortAscendingStr}</code></p>`);
        // Descending
    document.writeln(`<p>Pengurutan ke Descending (dari terbesar ke terkecil):</p>`);
        document.writeln('<img width="80%" src="assets/array_descending.png" alt="contoh array descending"><br>');
        document.writeln('Output: <br>');
        let arraySortDescending = [7,12,4,6,10,20,45,2,1];
        arraySortDescending.sort(function arraySortDescending(a,b) {return a < b});
        document.writeln(`<p><code>${arraySortDescending}</code></p>`);
    
    
    

