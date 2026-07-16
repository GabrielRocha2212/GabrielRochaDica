let compras = JSON.parse(localStorage.getItem("compras")) || [];

compras.push({
    nome: "COD Black ops II",
    data: "05/06/2026",
    status: "Entregue"
});

localStorage.setItem("compras", JSON.stringify(compras));