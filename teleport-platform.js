AFRAME.registerComponent('teleport-platform',{
    schema: {
        cameraRig: {type: 'selector'}
    },
    init:function(){
        console.log("The element I'm attached to", this.el);
      
      
        // this.el.addEventListener('click',function(evt){
        //     console.log(this, evt.target);
        // });
        
        //ES6 javascript arrow functions
        this.el.addEventListener('click', (evt) => {
            console.log(this, evt.target);
            
            this.data.cameraRig.object3D.position.set(
              this.el.object3D.position.x,
              this.el.object3D.position.y,// 0 would be floor height
              this.el.object3D.position.z
            );
          
          
        });
      
    }
});