document.addEventListener("DOMContentLoaded", () => {
    const planTiles = document.querySelectorAll(".plan-tile");

    planTiles.forEach(tile => {
        tile.addEventListener("click", () => {
            const plan = tile.dataset.plan;
            alert(`You selected the ${plan.charAt(0).toUpperCase() + plan.slice(1)} Plan!`);
        });
    });
});
