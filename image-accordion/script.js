document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const panels = [
    document.getElementById("one"),
    document.getElementById("two"),
    document.getElementById("three"),
    document.getElementById("four"),
  ];

  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1170&q=80",
  ];

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      // highlight active card
      cards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");

      // update backgrounds smoothly
      panels.forEach((panel, i) => {
        panel.style.opacity = 0;
        setTimeout(() => {
          panel.style.backgroundImage = `url('${images[i]}')`;
          panel.style.opacity = 1;
        }, 200);
      });
    });
  });
});