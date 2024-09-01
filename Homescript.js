document.addEventListener('DOMContentLoaded',function () {
    const menu=document.getElementById('menu');
    const settings=document.getElementById('settings');
    const closeBtn=document.getElementById('close-btn');
    const darkness=document.getElementById('darkness');
    menu.addEventListener('click',function () {
        settings.style.left='10%';
        darkness.classList.add('bg');
    });  
    closeBtn.addEventListener('click',function () {
        settings.style.left='-1000%';
        darkness.classList.remove('bg');
    });
    const darkmode=document.getElementById('darkmode');
    const light=document.getElementById('light');
    const dark=document.getElementById('dark');
    const light2=document.getElementsByClassName('light2');
    const dark2=document.getElementsByClassName('dark2');
    const video=document.getElementById('video');
    let root=document.documentElement;
    darkmode.addEventListener('click',function(){
        if (light.classList.contains('light')) {
            video.src='bgvid.mp4';
            light.classList.remove('light');
            dark.classList.add('dark');
            for (let i=0; i<dark2.length; i++)
            {
            light2[i].style.display='none';
            dark2[i].style.display='inline-block';
            }
            settings.style.backgroundColor='#343a40';
            settings.style.color='white';
            root.style.cssText=`--bgcolor:#111;
                    --color:white;`;
        }
         else {
            video.src='bgvid1.mp4';
            light.classList.add('light');
            dark.classList.remove('dark');
            for (let i=0; i<dark2.length;i++){
            light2[i].style.display='inline-block';
            dark2[i].style.display='none';
            }
            settings.style.backgroundColor='#4682b4';
            settings.style.color='black';
            root.style.cssText=`--bgcolor:white;
            --color:black;`;
        }
    });
    root.addEventListener("mousemove", e => {
        root.style.setProperty('--x', e.x + "px");
        root.style.setProperty('--y', e.y + "px");
      });
    const articles=document.getElementsByClassName('dropdown');
    for (let i=0; i<article.length;i++){
    articles[i].addEventListener('mouseover',function(){
        articles[i].style.display='block';
    });
        articles[i].addEventListener('mouseout',function(){
            articles[i].style.display='none';
        })
    }

});
