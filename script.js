const form=document.getElementById('contactForm');
const note=document.getElementById('formNote');
form.addEventListener('submit',e=>{e.preventDefault(); note.textContent='Thank you — your inquiry has been received. This is a demo form.'; form.reset();});
