
window.addEventListener('load', function(){
    let block2=document.getElementById('blk2');
    let posy=document.getElementById('pos-y');
    let posx=document.getElementById('pos-x');
    let size=document.getElementById('size');
    let opac=document.getElementById("opc");
    let selection=document.getElementById("selected-shape");
    let val=size.value;
    let rot=0;
    let sze=1;
    let hex=document.getElementById("hex");
    let r=this.document.getElementById("r");
    let g=this.document.getElementById("g");
    let b=this.document.getElementById("b");
    let a=this.document.getElementById("a");
    posy.addEventListener('input', function (){
    
        block2.style.top=posy.value + 'px';
     

    });
    posx.addEventListener('input',function(){
        block2.style.left=posx.value + 'px';
    });

    size.addEventListener('input',function(){
        sze=size.value;
        block2.style.transform =`scale(${sze},${sze}) rotate(${rot}deg)`;
        
    });
    opac.addEventListener('input',function(){
       
        block2.style.opacity=opac.value;
        
    });

    let btn=document.getElementById("ok-btn");

    btn.addEventListener('click',function(){
        let option=selection.value;
      
        if(option ==='1'){
            block2.style.borderRadius='0%';
            rot=0;
            block2.style.transform=`rotate(${rot}deg) scale(${sze})` ;
        }else if(option ==='2'){
            block2.style.borderRadius="50%";
        }else if(option ==='3'){
            block2.style.borderRadius="0%";
            rot=45;
            block2.style.transform=`rotate(${rot}deg) scale(${sze})`;

        }
    });

    hex.addEventListener('blur',function(){
      
            block2.style.backgroundColor=`#${hex.value}`
     
        
    });
    r.addEventListener('input', function(){
        block2.style.backgroundColor=`rgba(${r.value},${g.value},${b.value},${a.value})`;
    });
    g.addEventListener('input', function(){
        block2.style.backgroundColor=`rgba(${r.value},${g.value},${b.value},${a.value})`;
    })
    b.addEventListener('input', function(){
        block2.style.backgroundColor=`rgba(${r.value},${g.value},${b.value},${a.value})`;
    })
    a.addEventListener('input', function(){
        block2.style.backgroundColor=`rgba(${r.value},${g.value},${b.value},${a.value})`;
    })
});
 


