//mail encryption and decryption
	const Part1 = 'Kacper.';
	const Part2 = 'Sieminski';
	const Part3 = 'hot';
	const Part4 = 'mail.com';
	const Secret_Passphrase = '1%&@7*d{F|0>.Iq*IOMQ2G-2eSbi(:';


	var encryptedp1 = CryptoJS.AES.encrypt(Part1, Secret_Passphrase);
	var encryptedp2 = CryptoJS.AES.encrypt(Part2, Secret_Passphrase);
	var encryptedp3 = CryptoJS.AES.encrypt(Part3, Secret_Passphrase);
	var encryptedp4 = CryptoJS.AES.encrypt(Part4, Secret_Passphrase);

	var decryptp1 = CryptoJS.AES.decrypt(encryptedp1, Secret_Passphrase);
	var decryptp2 = CryptoJS.AES.decrypt(encryptedp2, Secret_Passphrase);
	var decryptp3 = CryptoJS.AES.decrypt(encryptedp3, Secret_Passphrase);
	var decryptp4 = CryptoJS.AES.decrypt(encryptedp4, Secret_Passphrase);

	var plaintext1 = decryptp1.toString(CryptoJS.enc.Utf8);
	var plaintext2 = decryptp2.toString(CryptoJS.enc.Utf8);
	var plaintext3 = decryptp3.toString(CryptoJS.enc.Utf8);
	var plaintext4 = decryptp4.toString(CryptoJS.enc.Utf8);

//phone Encryption and Decryption

	const P_Part1 = '700';
	const P_Part2 = '91';
	const P_Part3 = '92';
	const P_Part4 = '32';
	const Secret_Passphrase2 = '1%&@7*d{F|0>.Iq*IOMQ2G-2eSbi(:';


	var p_encryptedp1 = CryptoJS.AES.encrypt(P_Part1, Secret_Passphrase2);
	var p_encryptedp2 = CryptoJS.AES.encrypt(P_Part2, Secret_Passphrase2);
	var p_encryptedp3 = CryptoJS.AES.encrypt(P_Part3, Secret_Passphrase2);
	var p_encryptedp4 = CryptoJS.AES.encrypt(P_Part4, Secret_Passphrase2);

	var p_decryptp1 = CryptoJS.AES.decrypt(p_encryptedp1, Secret_Passphrase2);
	var p_decryptp2 = CryptoJS.AES.decrypt(p_encryptedp2, Secret_Passphrase2);
	var p_decryptp3 = CryptoJS.AES.decrypt(p_encryptedp3, Secret_Passphrase2);
	var p_decryptp4 = CryptoJS.AES.decrypt(p_encryptedp4, Secret_Passphrase2);

	var p_plaintext1 = p_decryptp1.toString(CryptoJS.enc.Utf8);
	var p_plaintext2 = p_decryptp2.toString(CryptoJS.enc.Utf8);
	var p_plaintext3 = p_decryptp3.toString(CryptoJS.enc.Utf8);
	var p_plaintext4 = p_decryptp4.toString(CryptoJS.enc.Utf8);

	var link = document.getElementById('mail');
	var link2 = document.getElementById('phone');
//places decrypted data and puts it together 
	var mail = 'mailto:'+plaintext1+plaintext2+'@'+plaintext3+plaintext4;
	var call = 'tel:+46'+p_plaintext1+p_plaintext2+p_plaintext3+p_plaintext4;

     function boop() {
    link.setAttribute('href', mail);
    return false;
  };

   function fwoop() {
    link2.setAttribute('href', call);
    return false;
  };

