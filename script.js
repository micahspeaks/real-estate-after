const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const filterTrigger=document.getElementById('filterTrigger');
const filterPanel=document.getElementById('filterPanel');
filterTrigger.addEventListener('click',()=>filterPanel.classList.toggle('open'));

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  const selected=btn.dataset.filter;
  document.querySelectorAll('.property-card').forEach(card=>{card.style.display=selected==='all'||card.dataset.category===selected?'block':'none'});
}));

const modal=document.getElementById('propertyModal');
const modalClose=document.getElementById('modalClose');
const modalImage=document.getElementById('modalImage');
const modalTitle=document.getElementById('modalTitle');
const modalLocation=document.getElementById('modalLocation');
const modalPrice=document.getElementById('modalPrice');
const modalBeds=document.getElementById('modalBeds');
const modalBaths=document.getElementById('modalBaths');

document.querySelectorAll('.open-property').forEach(button=>button.addEventListener('click',()=>{
  const card=button.closest('.property-card');
  const img=button.querySelector('img');
  modalImage.src=img.src;modalImage.alt=img.alt;modalTitle.textContent=card.dataset.title;modalLocation.textContent=card.dataset.location;
  modalPrice.textContent=card.dataset.price;modalBeds.textContent=`${card.dataset.beds} Beds`;modalBaths.textContent=`${card.dataset.baths} Baths`;
  modal.classList.add('show');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
}));
function closeModal(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
modalClose.addEventListener('click',closeModal);document.querySelector('.modal-backdrop').addEventListener('click',closeModal);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
document.getElementById('modalContact').addEventListener('click',closeModal);

document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();document.getElementById('formNote').textContent='Thanks — this demo form is working. Connect it to Formspree, Netlify Forms, or your CRM when you launch.';e.target.reset()});

const hero=document.querySelector('.hero-media');window.addEventListener('scroll',()=>{if(window.scrollY<window.innerHeight)hero.style.transform=`scale(1.09) translateY(${window.scrollY*.05}px)`});
