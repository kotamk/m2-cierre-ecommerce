const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
    

    alertPlaceholder. innerHTML = `
        <div class="alert alert-${type} alert-dismissible" role="alert">
            <div>${message}</div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
    alertTrigger.addEventListener("click", () => {
        appendAlert("Producto agregado correctamente al carrito!", "success");
    });
}
