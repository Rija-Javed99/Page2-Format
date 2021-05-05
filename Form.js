class Form {

  constructor() {
    this.character = createButton("Characters");
    this.button = createButton('Play');
    this.settings = createButton('Settings');
    this.instruction = createElement('h2')
    this.title = createElement('h1');
  }
  hide(){
 //hide all elements except the title
  }

  display(){

    //set position of all elements measuring it from the center and only after giving required size and style.

    //create title
    this.title.html("Escape Town");
    this.title.position(displayWidth/2, displayHeight/2);
    this.title.style('font-size', ' ')
    this.title.style('color', ' ');
    this.title.style('font' , ' ')

//create character(button)

    this.character.position(displayWidth/2 , displayHeight/2 );
    this.character.style('width' , ' ')
    this.character.style('height', ' ')
    this.character.style('background' , ' ')

    this.button.position(displayWidth/2, displayHeight/2);
    this.button.style('width' , ' ')
    this.button.style('height' , ' ')
  
    this.button.mousePressed(()=>{

      //call hide() function for elemants that should hide after pressing a certain button

    
      this.instruction.html("Click on the play button to enter the game")
      this.instruction.position(displayWidth/2 - 100 , displayHeight/2)
      this.instruction.style('font-size' , ' ')
      this.instruction.style('color' , ' ')
     
      //set the position and specifications for the settings button
      this.settings.position(displayWidth/2 - 100 , displayHeight/2)
      this.settings.style('font-size' , ' ')
      this.settings.style('width' , ' ')
      this.settings.style('height' , ' ')
      this.settings.style('background' , ' ')
    });


    this.settings.mousePressed(()=>{
//set function to happern or elements to appear when the settings button is pressed.




    })
  }
}
