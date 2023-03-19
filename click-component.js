AFRAME.registerComponent('click-component',{
    schema: {
        animateElement: {type: 'selector'},
        eventName: {type: 'string'}
    },
    init:function(){
      
        this.el.addEventListener('click', (evt) => {
            console.log(this, evt.target);
          
            // https://threejs.org/docs/#api/en/core/Object3D
            // Try this or some other animation in code:
            this.el.object3D.scale.set(1.2, 1.2, 1.2);
            //this.el.object3D.position.set(2,2,2);
            
            //you could add some logic so it only emits once
            //or emit the event on another object using the selector
            //see how the selector is used with the camera-rig in teleport component
          
            //emits an event so that we can use the A-frame animation system
            this.data.animateElement.emit(this.data.eventName);
        });
      
    }
});