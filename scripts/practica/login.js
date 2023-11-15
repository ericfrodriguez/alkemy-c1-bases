const iniciarSesion = (usuario, contrasenia) => {
    const usuarioValido = 'ericfr';
    const contraseniaValida = 'hola1234';

    const validacionCredenciales = (usuario === usuarioValido) && (contrasenia === contraseniaValida);

    const mensaje = validacionCredenciales
    ? 'Inicio de sesión exitoso'
    : 'Credenciales incorrectas'

    return mensaje;
}

const usuarioDePrompt = prompt('Ingrese su usuario.');
const contraseniaDePrompt = prompt('Ingrese su contraseña.');

const resultado = iniciarSesion(usuarioDePrompt, contraseniaDePrompt);

console.log(resultado);