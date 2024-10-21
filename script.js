function calculateTotal() {
    // Get values from input fields
    const item1Price = parseFloat(document.getElementById('item1Price').value) || 0;
    const item1Qty = parseInt(document.getElementById('item1Qty').value) || 0;
    const item2Price = parseFloat(document.getElementById('item2Price').value) || 0;
    const item2Qty = parseInt(document.getElementById('item2Qty').value) || 0;
    const shippingCharges = parseFloat(document.getElementById('shippingCharges').value) || 0;

    // Calculate total cost
    const totalItem1 = item1Price * item1Qty;
    const totalItem2 = item2Price * item2Qty;
    const totalCost = totalItem1 + totalItem2 + shippingCharges;

    // Display receipt
    const receipt = `
        <h2>Receipt</h2>
        <p>Item 1 Total: PKR ${totalItem1.toFixed(2)}</p>
        <p>Item 2 Total: PKR ${totalItem2.toFixed(2)}</p>
        <p>Shipping Charges: PKR ${shippingCharges.toFixed(2)}</p>
        <h3>Total Cost: PKR ${totalCost.toFixed(2)}</h3>
    `;
    
    document.getElementById('receipt').innerHTML = receipt;
}