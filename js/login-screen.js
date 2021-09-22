function validate() {
    const inputtxt = document.getElementById('name')
    const letters = /^[a-z][a-z\s]*$/

    if(!inputtxt.value.toLowerCase().match(letters)){
        return alert('Por favor digite apenas letras')
    }
} 

function send() {
    const name = document.getElementById('name').value
    return alert(`Seja Benvindo(a) ${name}`)
}
