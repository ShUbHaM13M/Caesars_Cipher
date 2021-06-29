
const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
const LEN_ALPHABETS = alphabets.length

const cipherInput = document.querySelector('#cipherInput')
const decipherInput = document.querySelector('#decipherInput')
const cipherBtn = document.querySelector('#cipherBtn')
const output = document.querySelector('.output')
let cipherText =''
let decipherText =''

function showOutput (cipher, decipher) {
	output.innerHTML = `Output: <br> cipher : <span class="text-xl">${cipher || "null"}</span> <br> decipher : <span class="text-xl">${decipher || "null"}</span>`
}

function cipher (toCipher, salt = 3) {
	let ciphered = ''
	Array.from(toCipher).forEach(letter => {
		const index = alphabets.indexOf(letter)
		const check_index = index + salt
		ciphered += alphabets[check_index < LEN_ALPHABETS ? check_index : (check_index - LEN_ALPHABETS)]
	})
	return ciphered
}

function decipher (toDecipher, salt = 3) {
	let deciphered = ''
	Array.from(toDecipher).forEach(letter => {
		const index = alphabets.indexOf(letter)
		const check_index = index - salt
		deciphered += alphabets[check_index < 0 ?  
		(LEN_ALPHABETS - -check_index) : check_index]
	})
	return deciphered
}

cipherInput.addEventListener('change', function () {
	cipherText = this.value
})

decipherInput.addEventListener('change', function () {
	decipherText = this.value
})

cipherBtn.addEventListener('click', function()	{
	showOutput(cipher(cipherText), decipher(decipherText))
	cipherInput.value = ""
	decipherInput.value = ""
})
