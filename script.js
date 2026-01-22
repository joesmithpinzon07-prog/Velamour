// Simple filters + small UI helpers
document.addEventListener('DOMContentLoaded', function(){
  const buttons = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.card');

  buttons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      buttons.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      cards.forEach(c=>{
        if(cat === 'all' || c.dataset.category === cat) c.style.display = '';
        else c.style.display = 'none';
      });
      // scroll to products on mobile
      document.getElementById('productGrid')?.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});

function verProducto(nombre, precio, imagen) {
  localStorage.setItem("producto", JSON.stringify({
    nombre, precio, imagen
  }));
  window.location.href = "producto.html";
}
