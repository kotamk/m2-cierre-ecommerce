$(".btn-eliminar").click(function(){
    let confirmacion = confirm("¿Está seguro de Eliminar este produto?");

    if (confirmacion){
        alert("Producto Eliminado!");

    };
});