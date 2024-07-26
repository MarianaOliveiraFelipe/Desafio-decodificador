function getText() {
    const inputTexto = document.querySelector('.criptador-conteudo-texto').value;
    return inputTexto;
}

function encriptar() {
    let texto = getText();
    let textoEncriptado = '';

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === 'a') {
            textoEncriptado += 'ai';
        } else if (texto[i] === 'e') {
            textoEncriptado += 'enter';
        } else if (texto[i] === 'i') {
            textoEncriptado += 'imes';
        } else if (texto[i] === 'o') {
            textoEncriptado += 'ober';
        } else if (texto[i] === 'u') {
            textoEncriptado += 'ufat';
        } else {
            textoEncriptado += texto[i];
        }
    }

    saidaResultado(textoEncriptado);
   
}
 
function decriptar() {
    let texto = getText();
    let textoDecriptado = '';

    for (let i = 0; i < texto.length; i++) {
        if (texto.startsWith('ai', i)) {
            textoDecriptado += 'a';
            i += 1; 
        } else if (texto.startsWith('enter', i)) {
            textoDecriptado += 'e';
            i += 4; 
        } else if (texto.startsWith('imes', i)) {
            textoDecriptado += 'i';
            i += 3; 
        } else if (texto.startsWith('ober', i)) {
            textoDecriptado += 'o';
            i += 3; 
        } else if (texto.startsWith('ufat', i)) {
            textoDecriptado += 'u';
            i += 3; 
        } else {
            textoDecriptado += texto[i];
        }
    }

    saidaResultado(textoDecriptado);
    
}

function saidaResultado(resultado) {
    const displayDiv = document.querySelector('.criptador-saida-display');
    const finalDiv = document.querySelector('.criptador-saida-final');
    const img = document.querySelector('.criptador-saida img');
    const texto01 = document.querySelector('.criptador-saida-display-ts');
    const texto02 = document.querySelector('.criptador-saida-display-t');
    const textoSaida = document.querySelector('.criptador-saida-final-resultado');
    const botaoCopiar = document.querySelector('.criptador-saida-final-copiarbtn');

    img.classList.add('hidden');
    texto01.classList.add('hidden');
    texto02.classList.add('hidden');

    finalDiv.style.display = 'block';
    botaoCopiar.style.display = 'block';

    textoSaida.textContent = resultado;
    textoSaida.style.display = 'block';

    displayDiv.classList.add('hidden');
}


function limpar() {
    document.querySelector('.criptador-conteudo-texto').value = '';
}

function copiar() {
    const textoSaida = document.querySelector('.criptador-saida-final-resultado');
    if (textoSaida) {
        const text = textoSaida.textContent;
        navigator.clipboard.writeText(text).then(() => {

            textoSaida.textContent = '';
            textoSaida.style.display = 'none';
            document.querySelector('.criptador-saida-final').style.display = 'none';
            document.querySelector('.criptador-saida-display').classList.remove('hidden');
            document.querySelector('.criptador-saida img').classList.remove('hidden');
            document.querySelector('.criptador-saida-display-ts').classList.remove('hidden');
            document.querySelector('.criptador-saida-display-t').classList.remove('hidden');
        });
        limpar();
    }
}

