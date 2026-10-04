'use strict';
const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
const localSearch=document.querySelector('#search');
if(localSearch){
 const cards=[...document.querySelectorAll('.country-card')],links=[...document.querySelectorAll('.country-nav a')],options=[...document.querySelectorAll('#jump option[data-search]')];
 const filter=()=>{const q=norm(localSearch.value);[...cards,...links,...options].forEach(el=>el.hidden=!norm(el.dataset.search).includes(q));document.querySelectorAll('.region').forEach(el=>el.hidden=![...el.querySelectorAll('.country-card')].some(c=>!c.hidden));const n=cards.filter(c=>!c.hidden).length;document.querySelector('#local-status').textContent=`显示 ${n} / ${cards.length} 个条目`;document.querySelector('#local-empty').hidden=n>0;};
 localSearch.addEventListener('input',filter);filter();
 document.querySelector('#jump').addEventListener('change',e=>{if(e.target.value){location.hash=e.target.value;document.getElementById(e.target.value)?.scrollIntoView();}});
}
const worldSearch=document.querySelector('#world-search');
if(worldSearch){
 const rows=[...document.querySelectorAll('#world-table tbody tr')],continent=document.querySelector('#continent-filter'),extensions=document.querySelector('#include-extensions');
 const filter=()=>{const q=norm(worldSearch.value);rows.forEach(r=>r.hidden=(!extensions.checked&&r.dataset.main==='false')||(continent.value&&r.dataset.continent!==continent.value)||!norm(r.dataset.search).includes(q));const visible=rows.filter(r=>!r.hidden);document.querySelector('#world-status').textContent=`显示 ${visible.length} 个条目 · 主表195个，补充4个`;document.querySelector('#world-empty').hidden=visible.length>0;};
 worldSearch.addEventListener('input',filter);continent.addEventListener('change',filter);extensions.addEventListener('change',filter);filter();
 if(location.hash==='#country-tw'){location.replace('asia.html#country-cn');}
 if(location.hash.startsWith('#country-')){const target=rows.map(r=>r.querySelector('a')).find(a=>a.getAttribute('href').endsWith(location.hash));if(target)location.replace(target.getAttribute('href'));}
 const data=JSON.parse(document.querySelector('#quiz-data').textContent),select=document.querySelector('#quiz-continent');let current;
 const draw=()=>{const pool=data.filter(c=>!select.value||c.continent===select.value);const candidates=pool.filter(c=>c.code!==current?.code);current=(candidates.length?candidates:pool)[Math.floor(Math.random()*(candidates.length||pool.length))];document.querySelector('#quiz-label').textContent=current.continent+' · '+current.en;document.querySelector('#quiz-question').textContent=current.cn+'的首都是什么？';document.querySelector('#quiz-answer').hidden=true;document.querySelector('#show-answer').hidden=false;};
 document.querySelector('#show-answer').addEventListener('click',()=>{const box=document.querySelector('#quiz-answer');box.replaceChildren();const b=document.createElement('b');b.textContent=current.capital_cn;const english=document.createElement('p');english.textContent=current.capital_en;const hook=document.createElement('p');hook.textContent=current.mnemonic;const link=document.createElement('a');link.href=current.url;link.textContent='看地图与详细介绍 →';box.append(b,english,hook,link);box.hidden=false;document.querySelector('#show-answer').hidden=true;});
 document.querySelector('#next-question').addEventListener('click',draw);select.addEventListener('change',draw);draw();
}
const zoom=document.querySelector('#zoom'),large=document.querySelector('#large');
document.querySelectorAll('.map-button').forEach(button=>button.addEventListener('click',()=>{const im=button.querySelector('img');large.src=im.src;large.alt=im.alt;document.querySelector('#caption').textContent=im.alt;zoom.showModal();}));
document.querySelector('#close').addEventListener('click',()=>zoom.close());zoom.addEventListener('click',e=>{if(e.target===zoom)zoom.close();});

// Preserve old Taiwan bookmarks within the China entry.
if(!worldSearch && location.hash==='#country-tw'){location.replace('asia.html#country-cn');}
