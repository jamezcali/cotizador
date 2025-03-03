document.getElementById('cotizadorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const productName = document.getElementById('productName').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const originCountry = document.getElementById('originCountry').value;

    // Validación de los campos
    if (!productName || quantity <= 0 || weight <= 0 || !originCountry) {
        alert("Por favor, llena todos los campos correctamente.");
        return;
    }

    // Establecer un precio base dependiendo del país de origen
    let pricePerUnit = 0;

    switch (originCountry) {
        case 'Mexico':
            pricePerUnit = 10;
            break;
        case 'USA':
            pricePerUnit = 15;
            break;
        case 'China':
            pricePerUnit = 8;
            break;
        case 'Germany':
            pricePerUnit = 20;
            break;
        default:
            alert("País de origen no válido.");
            return;
    }

    // Calcular el precio total
    const totalPrice = pricePerUnit * quantity;

    // Mostrar la cotización
    document.getElementById('result').innerHTML = `
        <h3>Cotización</h3>
        <p><strong>Producto:</strong> ${productName}</p>
        <p><strong>Cantidad:</strong> ${quantity}</p>
        <p><strong>Peso Total:</strong> ${weight * quantity} kg</p>
        <p><strong>País de Origen:</strong> ${originCountry}</p>
        <p><strong>Precio por unidad:</strong> $${pricePerUnit}</p>
        <p><strong>Total a Pagar:</strong> $${totalPrice}</p>
    `;
});