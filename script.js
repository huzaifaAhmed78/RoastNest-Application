const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.menu-tabs button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.menu-tabs button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter=btn.dataset.filter;
    document.querySelectorAll('.food-card').forEach(card=>{
      const show=filter==='all'||card.dataset.category===filter;
      card.style.display=show?'block':'none';
      if(show){card.animate([{opacity:.2,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:350,easing:'ease-out'})}
    });
  });
});

document.querySelector('#newsletterForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  e.currentTarget.querySelector('input').value='';
  e.currentTarget.nextElementSibling.textContent='Thanks — you are on the list!';
});

document.querySelectorAll('.food-card .btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const old=btn.textContent; btn.textContent='Added ✓';
    setTimeout(()=>btn.textContent=old,1100);
  });
});
