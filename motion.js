/* Native accessible controls with the MIT-licensed Sakuga VFX engine. */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const active = new Map();
  const interactive = (target) => target instanceof Element && target.closest('.button,.nav-download,.feature-tab,.nav-toggle,.copy-prompt,summary,.guide-card');
  function animate(element, frames, duration) {
    if (reduced.matches || document.hidden) return;
    active.get(element)?.cancel();
    const animation = element.animate(frames, {duration,easing:'cubic-bezier(.16,1,.3,1)'});
    active.set(element,animation);
    animation.finished.catch(()=>{}).finally(()=>{if(active.get(element)===animation)active.delete(element);});
  }
  document.addEventListener('pointerdown',event=>{
    const element=interactive(event.target);
    if(!element||event.button!==0||reduced.matches)return;
    if(element.matches('.button,.nav-download,.copy-prompt')) animate(element,[{transform:'scale(1)'},{transform:'scale(1.04,.86)'}],110);
  });
  document.addEventListener('click',event=>{
    const element=interactive(event.target);
    if(!element||reduced.matches||element.matches(':disabled'))return;
    const primary=element.matches('.button-primary,.nav-download');
    animate(element,[{transform:'scale(1.04,.86)'},{transform:primary?'rotate(-1deg) scale(.98,1.1)':'scale(.98,1.04)',offset:.4},{transform:'scale(1)'}],primary?420:290);
    const fx=window.SakugaFX;
    if(!fx)return;
    const b=element.getBoundingClientRect(),x=b.right+scrollX-10,y=b.top+scrollY+6;
    fx.ticks(x,y,{dir:-1.05,n:primary?5:3,r:6,len:primary?20:12,fan:.5,life:.4});
    if(primary){fx.puff(x-8,y+12,{size:7,n:3,vx:24,vy:-18,life:.5});fx.shards(x,y,{n:5,speed:85,size:4,arc:6.28,life:.4});}
  });
  function clear(){active.forEach(a=>a.cancel());active.clear();window.SakugaFX?.clear();}
  reduced.addEventListener('change',()=>{if(reduced.matches)clear();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)clear();});
})();
