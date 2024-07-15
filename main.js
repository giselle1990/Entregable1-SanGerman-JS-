const clientes = [];
const MAX_CLIENTES = 10; 

function registrarCliente() {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;

    if (nombre === '' || edad === '') {
        alert('Por favor, complete todos los campos');
        return;
    }

    if (clientes.length >= MAX_CLIENTES) {
        alert('No se pueden registrar más clientes');
        return;
    }

    const cliente = {
        nombre: nombre,
        edad: parseInt(edad)
    };

    clientes.push(cliente);
    alert('Cliente registrado exitosamente');
}

function mostrarClientes() {
    if (clientes.length === 0) {
        alert('No hay clientes registrados');
        return;
    }

    let mensaje = 'Clientes Registrados:\n';

    for (let i = 0; i < clientes.length; i++) {
        mensaje += `Nombre: ${clientes[i].nombre}, Edad: ${clientes[i].edad}\n`;
    }

    alert(mensaje);
    console.log(mensaje);
}
//por ejemplo llamo a una funcion 
registrarCliente()
