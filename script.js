const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
    createNotificaton();
})

function createNotificaton() {
    const notif = document.createElement("div");
    notif.classList.add('toast');

    notif.innerText = "This is a crazy page";

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove(0);
    }, 3000)
}