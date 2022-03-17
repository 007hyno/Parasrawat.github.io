window.addEventListener('load',()=>{
    
    const canvas = document.getElementById('canvas');
    const c = canvas.getContext('2d');
    const FRAMES_PER_SECOND = 10;
    
    
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    var mi ={
        x:undefined,
        y:undefined
    }
    
    window.addEventListener('mousemove',(e)=>{
        mi.x = e.clientX;
        // console.log(`c : ${mx}`);
        mi.y = e.clientY;
    });
    window.addEventListener('resize',()=>{
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // alert()
    });

    var max = 40;
    
    function Balls (x,y,r,dx,dy,nums){
        this.x = x;
        this.y = y;
        this.r = r;
        this.min = this.r;
        this.dx = dx;
            this.dy = dy;
            this.nums = nums;
            var clr=['  rgba(255, 0, 0, 0.748)','  rgba(6, 645, 94, 0.809)','  rgba(0, 149, 255, 0.748)',' rgba(241, 245, 6, 0.809)',' rgba(255, 0, 0, 0.748)','rgba(102, 0, 255, 0.748)'];
            var clr1 =[' rgba(14, 122, 255, 0.348)']
            
            var num = (Math.random()*6)+0;
            nums = Math.round(num);
            
            this.ball=()=>{
                // this.co();
                c.beginPath();
                c.moveTo(this.x+this.r,this.y);
                c.fillStyle = clr[nums];
                
                // c.fillStyle = clr1[0];
                c.arc(this.x,this.y,this.r,0,Math.PI*2);
                c.fill();
            }
        this.fall=()=>{
    if(this.x>canvas.width-20){
        this.dx=-this.dx
    }else if(this.x<20){
        this.dx=-this.dx;
    }else if(this.y>canvas.height-35){
        this.dy=-this.dy
    }else if(this.y<20){
        this.dy=-this.dy;
    }
    this.x+=this.dx;
    this.y+=this.dy;
    
    // innneractivity
    
    if(mi.x-this.x<50&&mi.x-this.x>-50&&mi.y-this.y <50&&mi.y-this.y>-50){
        if(this.r<max){
            this.r+=1;
        }
    }
    else if(this.r>this.min){
            this.r-=1;
        }
        
    }
    
}

    // ball=(x,y,r)=>{
        // c.beginPath();
        // c.moveTo(x+r,y);
        // c.strokeStyle = 'red';
        // c.arc(x,y,r,0,Math.PI*2);
        // c.stroke();
        // }
        
        
        // fall=()=>{
            //     if(x>canvas.width-20){
                //         dx=-dx
//     }else if(x<20){
    //         dx=-dx;
    //     }else if(y>canvas.height-20){
        //         dy=-dy
        //     }else if(y<20){
            //         dy=-dy;
            //     }
            //     x+=dx;
            //     y+=dy;
            //     }
            
        
            
            move  = 1;
            balls = 1200;
            cw = canvas.width-100;
            ch = canvas.height-50;
            var b=[];
            for(var i=0;i<balls;i++){
        x = (Math.random()*cw)+20;
        y = (Math.random()*ch)+20;
        r = Math.round((Math.random()*10)+4);
        dx = (Math.random()*0.9)-0.5;
        dy = (Math.random()*0.9)-0.5;
            b.push(new Balls(x,y,r,dx,dy));
    }
    clr=()=>{
        c.clearRect(0,0,canvas.width,canvas.height);
        // console.log('clr')
    }


    
    

    
    
    
    
    
    run=()=>{
        requestAnimationFrame(run);
        clr();
        for(var i=0;i<b.length;i++){
            b[i].fall();
            b[i].ball();
            
        }
        // ball(x,y,r);
        // fall();
    }
    run();
    
});