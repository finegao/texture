
function setup() {
  createCanvas(800,800);
  
  var colorList = ['#e86584',
                 '#3c5979',
                 '#018cb7',
                 '#fae093'];
                 
  for(var i=1; i<= 20; i++){
    for(var j=1; j<=20; j++){
      if(random()<0.25){
        
        fill(colorList[0]);
        
      }else if(random()<0.5){
        
        fill(colorList[1]);
        
      }else if(random()<0.75){
        
        fill(colorList[2]);
        
      }else if(random()<1){
        
        fill(colorList[3]);
        
      }
      
      rect(i*40,j*40,random()*80,random()*80);
    }
  }
}

function draw() {
  
}