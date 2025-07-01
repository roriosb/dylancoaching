// Configura el botón de WhatsApp para el plan Fitness 180
document.addEventListener("DOMContentLoaded", function () {
  const btnPlan = document.getElementById("btn-wsp-plan");
  if (btnPlan) {
    const mensaje = "Hola, estoy interesado en el Programa Fitness 180. ¿Me puedes dar más información?";
    const numero = "56948108449"; // Reemplaza con tu número real, sin el +
    btnPlan.href = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  }

  // Captura el formulario del Plan Elite Fitness 180
  const eliteForm = document.getElementById("eliteForm");
  if (eliteForm) {
    eliteForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Evita recargar la página

      // Obtener los datos del formulario
      const nombre = document.getElementById("nombre").value.trim();
      const edad = document.getElementById("edad").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const objetivo = document.getElementById("objetivo").value.trim();
      const habitos = document.getElementById("habitos").value.trim();
      const compromiso = document.getElementById("compromiso").value.trim();
      const ocupacion = document.getElementById("ocupacion").value.trim();
      const pais = document.getElementById("pais").value.trim();
      const inversion = document.getElementById("inversion").value.trim();

      // Armar el mensaje
      const mensaje = `
Hola, quiero acceder al programa *Elite Fitness 180*. Aquí te dejo mis respuestas:

 *Nombre:* ${nombre}
 *Edad:* ${edad}
 *Número:* ${telefono}
 *Objetivo:* ${objetivo}
 *Hábitos alimenticios:* ${habitos}
 *Compromiso (1-10):* ${compromiso}
 *Ocupación:* ${ocupacion}
 *País y ciudad:* ${pais}
 *Inversión dispuesta:* ${inversion}
`;

      const numeroDestino = "56948108449"; // Reemplaza con tu número real
      const urlWhatsapp = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensaje)}`;

      // Redirigir a WhatsApp
      window.open(urlWhatsapp, "_blank");
    });
  }
});

// Mostrar/Ocultar contenido Elite Fitness
function toggleElite(show) {
  const wrapper = document.getElementById("elite-wrapper");
  const content = document.getElementById("elite-content");
  const btnOpen = document.getElementById("btn-elite-open");

  if (show) {
    wrapper.style.display = "block";
    content.classList.remove("fade-in");
    void content.offsetWidth;
    content.classList.add("fade-in");
    btnOpen.style.display = "none";
  } else {
    wrapper.style.display = "none";
    btnOpen.style.display = "inline-block";
  }
}

 document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("heroVideo");

    // Detecta si es la primera vez que entra el usuario
    const primeraVisita = !localStorage.getItem("visitaRealizada");

    if (primeraVisita) {
      video.muted = false;  // se reproduce con sonido
      localStorage.setItem("visitaRealizada", "true");
    } else {
      video.muted = true;   // visitas posteriores: sin sonido
    }

    // Intenta reproducir el video programáticamente
    video.play().catch(err => {
      console.warn("El navegador bloqueó el autoplay con sonido:", err);
    });
  });