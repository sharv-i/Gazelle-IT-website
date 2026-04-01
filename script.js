// {/* <script>
// document.addEventListener("DOMContentLoaded", () => {

//   // ======================
//   // Dropdown Menus
//   // ======================
//   document.querySelectorAll(".dropdown > .dropbtn").forEach(btn => {
//     btn.addEventListener("click", e => {
//       e.stopPropagation();
//       const parent = btn.closest(".dropdown");
//       document.querySelectorAll(".dropdown.active").forEach(d => {
//         if (d !== parent) d.classList.remove("active");
//       });
//       parent.classList.toggle("active");
//     });
//   });
//   document.addEventListener("click", () => {
//     document.querySelectorAll(".dropdown.active").forEach(d => d.classList.remove("active"));
//   });
//   document.querySelectorAll(".dropdown-submenu").forEach(item => item.addEventListener("click", e => e.stopPropagation()));

//   // ======================
//   // Theme Toggle
//   // ======================
//   const toggleBtn = document.getElementById("themeToggle");
//   if (toggleBtn) {
//     toggleBtn.addEventListener("click", () => {
//       document.body.classList.toggle("dark");
//       toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
//     });
//   }

//   // ======================
//   // Slider
//   // ======================
//   const slides = document.querySelectorAll(".slider .slide");
//   const prevBtn = document.getElementById("prev");
//   const nextBtn = document.getElementById("next");
//   let currentIndex = 0;
//   let autoSlideInterval;

//   function showSlide(index) { slides.forEach((s,i) => s.classList.toggle("active", i===index)); }
//   function nextSlide() { currentIndex = (currentIndex+1) % slides.length; showSlide(currentIndex); }
//   function prevSlide() { currentIndex = (currentIndex-1+slides.length)%slides.length; showSlide(currentIndex); }
//   function startAutoSlide() { autoSlideInterval = setInterval(nextSlide, 5000); }
//   function resetAutoSlide() { clearInterval(autoSlideInterval); startAutoSlide(); }

//   if(slides.length) { showSlide(currentIndex); startAutoSlide(); }
//   if(prevBtn && nextBtn){
//     prevBtn.addEventListener("click", ()=>{ prevSlide(); resetAutoSlide(); });
//     nextBtn.addEventListener("click", ()=>{ nextSlide(); resetAutoSlide(); });
//   }

//   // ======================
//   // Form Submission
//   // ======================
//   const form = document.getElementById("consultForm");
//   if(form){
//     form.addEventListener("submit", async (e)=>{
//       e.preventDefault();

//       const data = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         phone: document.getElementById("phone").value,
//         company: document.getElementById("company").value,
//         industry: document.getElementById("industry").value,
//         summary: document.getElementById("summary").value,
//         data_score: parseInt(document.getElementById("data_score").value) || 0
//       };

//       try{
//         const response = await fetch("http://localhost:3000/submit", {
//           method: "POST",
//           headers: {"Content-Type":"application/json"},
//           body: JSON.stringify(data)
//         });

//         const result = await response.json();
//         document.getElementById("msg").innerText = result.message;
//         form.reset();

//       } catch(err){
//         console.error(err);
//         document.getElementById("msg").innerText = "Submission failed.";
//       }
//     });
//   }

// });
// </script>

// // E:\React\html\script.js */}




// document.addEventListener("DOMContentLoaded", () => {

//   // ======================
//   // Dropdown Menus
//   // ======================
//   document.querySelectorAll(".dropdown > .dropbtn").forEach(btn => {
//     btn.addEventListener("click", e => {
//       e.stopPropagation();
//       const parent = btn.closest(".dropdown");
//       document.querySelectorAll(".dropdown.active").forEach(d => {
//         if (d !== parent) d.classList.remove("active");
//       });
//       parent.classList.toggle("active");
//     });
//   });
//   document.addEventListener("click", () => {
//     document.querySelectorAll(".dropdown.active").forEach(d => d.classList.remove("active"));
//   });
//   document.querySelectorAll(".dropdown-submenu").forEach(item => item.addEventListener("click", e => e.stopPropagation()));

//   // ======================
//   // Theme Toggle
//   // ======================
//   const toggleBtn = document.getElementById("themeToggle");
//   if (toggleBtn) {
//     toggleBtn.addEventListener("click", () => {
//       document.body.classList.toggle("dark");
//       toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
//     });
//   }

//   // ======================
//   // Slider
//   // ======================
//   const slides = document.querySelectorAll(".slider .slide");
//   const prevBtn = document.getElementById("prev");
//   const nextBtn = document.getElementById("next");
//   let currentIndex = 0;
//   let autoSlideInterval;

//   function showSlide(index) { slides.forEach((s,i) => s.classList.toggle("active", i===index)); }
//   function nextSlide() { currentIndex = (currentIndex+1) % slides.length; showSlide(currentIndex); }
//   function prevSlide() { currentIndex = (currentIndex-1+slides.length)%slides.length; showSlide(currentIndex); }
//   function startAutoSlide() { autoSlideInterval = setInterval(nextSlide, 5000); }
//   function resetAutoSlide() { clearInterval(autoSlideInterval); startAutoSlide(); }

//   if(slides.length) { showSlide(currentIndex); startAutoSlide(); }
//   if(prevBtn && nextBtn){
//     prevBtn.addEventListener("click", ()=>{ prevSlide(); resetAutoSlide(); });
//     nextBtn.addEventListener("click", ()=>{ nextSlide(); resetAutoSlide(); });
//   }

// });
// // class Shipment {
// //   constructor(trackingId, clientName, status, origin, destination) {
// //     this.trackingId = trackingId;
// //     this.clientName = clientName;
// //     this.status = status;
// //     this.origin = origin;
// //     this.destination = destination;
// //   }

// //   getDetails() {
// //     return `
// //       <p><strong>Client:</strong> ${this.clientName}</p>
// //       <p><strong>Status:</strong> ${this.status}</p>
// //       <p><strong>Origin:</strong> ${this.origin}</p>
// //       <p><strong>Destination:</strong> ${this.destination}</p>
// //     `;
// //   }
// // }
// // const shipments = [
// //   new Shipment("GZ-2024-001", "ABC Traders", "In Transit", "Dubai", "London"),
// //   new Shipment("GZ-2024-002", "Global Imports", "Delivered", "China", "Germany"),
// //   new Shipment("GZ-2024-003", "Prime Logistics", "Pending", "USA", "Canada")
// // ];
// // function verifyShipment() {
// //   const input = document.getElementById("trackingInput").value.trim();
// //   const resultDiv = document.getElementById("result");

// //   const found = shipments.find(shipment => shipment.trackingId === input);

// //   if (found) {
// //     resultDiv.innerHTML = `
// //       <h3>✅ Shipment Verified</h3>
// //       ${found.getDetails()}
// //     `;
// //   } else {
// //     resultDiv.innerHTML = "<h3>❌ Tracking ID Not Found</h3>";
// //   }
// // }
// // function openVideo(){
// //   document.getElementById("videoBox").style.display = "flex";
// // }

// // function closeVideo(){
// //   document.getElementById("videoBox").style.display = "none";
// // }
{/* <script>
document.addEventListener("DOMContentLoaded", () => {

  // ======================
  // Dropdown Menus
  // ======================
  document.querySelectorAll(".dropdown > .dropbtn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const parent = btn.closest(".dropdown");
      document.querySelectorAll(".dropdown.active").forEach(d => {
        if (d !== parent) d.classList.remove("active");
      });
      parent.classList.toggle("active");
    });
  });
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown.active").forEach(d => d.classList.remove("active"));
  });
  document.querySelectorAll(".dropdown-submenu").forEach(item => item.addEventListener("click", e => e.stopPropagation()));

  // ======================
  // Theme Toggle
  // ======================
  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
  }

  // ======================
  // Slider
  // ======================
  const slides = document.querySelectorAll(".slider .slide");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let currentIndex = 0;
  let autoSlideInterval;

  function showSlide(index) { slides.forEach((s,i) => s.classList.toggle("active", i===index)); }
  function nextSlide() { currentIndex = (currentIndex+1) % slides.length; showSlide(currentIndex); }
  function prevSlide() { currentIndex = (currentIndex-1+slides.length)%slides.length; showSlide(currentIndex); }
  function startAutoSlide() { autoSlideInterval = setInterval(nextSlide, 5000); }
  function resetAutoSlide() { clearInterval(autoSlideInterval); startAutoSlide(); }

  if(slides.length) { showSlide(currentIndex); startAutoSlide(); }
  if(prevBtn && nextBtn){
    prevBtn.addEventListener("click", ()=>{ prevSlide(); resetAutoSlide(); });
    nextBtn.addEventListener("click", ()=>{ nextSlide(); resetAutoSlide(); });
  }

  // ======================
  // Form Submission
  // ======================
  const form = document.getElementById("consultForm");
  if(form){
    form.addEventListener("submit", async (e)=>{
      e.preventDefault();

      const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        company: document.getElementById("company").value,
        industry: document.getElementById("industry").value,
        summary: document.getElementById("summary").value,
        data_score: parseInt(document.getElementById("data_score").value) || 0
      };

      try{
        const response = await fetch("http://localhost:3000/submit", {
          method: "POST",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify(data)
        });

        const result = await response.json();
        document.getElementById("msg").innerText = result.message;
        form.reset();

      } catch(err){
        console.error(err);
        document.getElementById("msg").innerText = "Submission failed.";
      }
    });
  }

});
</script>

// E:\React\html\script.js */}




document.addEventListener("DOMContentLoaded", () => {

  // ======================
  // Dropdown Menus
  // ======================
  document.querySelectorAll(".dropdown > .dropbtn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const parent = btn.closest(".dropdown");
      document.querySelectorAll(".dropdown.active").forEach(d => {
        if (d !== parent) d.classList.remove("active");
      });
      parent.classList.toggle("active");
    });
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown.active").forEach(d => d.classList.remove("active"));
    }
  });

  // ======================
  // Theme Toggle
  // ======================
  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
  }

  // ======================
  // Slider
  // ======================
  const slides = document.querySelectorAll(".slider .slide");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let currentIndex = 0;
  let autoSlideInterval;

  function showSlide(index) { slides.forEach((s,i) => s.classList.toggle("active", i===index)); }
  function nextSlide() { currentIndex = (currentIndex+1) % slides.length; showSlide(currentIndex); }
  function prevSlide() { currentIndex = (currentIndex-1+slides.length)%slides.length; showSlide(currentIndex); }
  function startAutoSlide() { autoSlideInterval = setInterval(nextSlide, 5000); }
  function resetAutoSlide() { clearInterval(autoSlideInterval); startAutoSlide(); }

  if(slides.length) { showSlide(currentIndex); startAutoSlide(); }
  if(prevBtn && nextBtn){
    prevBtn.addEventListener("click", ()=>{ prevSlide(); resetAutoSlide(); });
    nextBtn.addEventListener("click", ()=>{ nextSlide(); resetAutoSlide(); });
  }

});
// class Shipment {
//   constructor(trackingId, clientName, status, origin, destination) {
//     this.trackingId = trackingId;
//     this.clientName = clientName;
//     this.status = status;
//     this.origin = origin;
//     this.destination = destination;
//   }

//   getDetails() {
//     return `
//       <p><strong>Client:</strong> ${this.clientName}</p>
//       <p><strong>Status:</strong> ${this.status}</p>
//       <p><strong>Origin:</strong> ${this.origin}</p>
//       <p><strong>Destination:</strong> ${this.destination}</p>
//     `;
//   }
// }
// const shipments = [
//   new Shipment("GZ-2024-001", "ABC Traders", "In Transit", "Dubai", "London"),
//   new Shipment("GZ-2024-002", "Global Imports", "Delivered", "China", "Germany"),
//   new Shipment("GZ-2024-003", "Prime Logistics", "Pending", "USA", "Canada")
// ];
// function verifyShipment() {
//   const input = document.getElementById("trackingInput").value.trim();
//   const resultDiv = document.getElementById("result");

//   const found = shipments.find(shipment => shipment.trackingId === input);

//   if (found) {
//     resultDiv.innerHTML = `
//       <h3>✅ Shipment Verified</h3>
//       ${found.getDetails()}
//     `;
//   } else {
//     resultDiv.innerHTML = "<h3>❌ Tracking ID Not Found</h3>";
//   }
// }
// function openVideo(){
//   document.getElementById("videoBox").style.display = "flex";
// }

// function closeVideo(){
//   document.getElementById("videoBox").style.display = "none";
// }