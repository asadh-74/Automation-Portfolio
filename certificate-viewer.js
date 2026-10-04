const certDialog=document.getElementById('certificate-dialog');
document.querySelectorAll('[data-cert-image]').forEach(button=>button.addEventListener('click',()=>{
 const title=button.dataset.certTitle;document.getElementById('certificate-title').textContent=title;
 const img=document.getElementById('certificate-image');img.src=button.dataset.certImage;img.alt=title+' certificate';
 document.getElementById('certificate-original').href=button.dataset.certImage;certDialog.showModal();
}));
certDialog.querySelector('.dialog-close').addEventListener('click',()=>certDialog.close());
certDialog.addEventListener('click',event=>{if(event.target===certDialog){const r=certDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)certDialog.close();}});
