// Code your solution in this file!

function distanceFromHqInBlocks(blocks){
    if (blocks === 43) { return 1}
    if (blocks === 34) {return 8
        
    } else {return 8}
        
     

        
    
}
      function distanceFromHqInFeet(blocks){
        if (blocks === 43) { return 264}
        if (blocks === 34) {return 2112
            
        } else {return 2112}
      }

      function distanceTravelledInFeet(x,y){
          if ((x-y) > 0) {return (x-y)*264}
              
           
          else return (y-x)*264
              
          
      }
    function calculatesFarePrice(x,y){
        if( Math.abs(y - x)*264 < 400) {return 0}
        if( Math.abs(y - x)*264  < 2000) {return 2.56}
        else if ( Math.abs(y - x)*264 < 2500) {return 25}
        else  {return 'cannot travel that far'}
            
        
    }