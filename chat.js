let greetings = [ "Hallo", "Moin", "Servus", "Guten Tag!", "moin-moin", "Hi", "Hello" ];
let random = Math.floor((Math.random() * greetings.length -1) + 1);


function  usermessage() {
    // variables for user message
    let usrinput = document.getElementById("usrinput").value;
    let liMe = document.createElement("li");
    let divMe = document.createElement("div");
    let imageUser = document.createElement("IMG")
    let divStyle = document.createElement("div");
    let p = document.createElement("p");
    let userText = document.createTextNode(usrinput);


    //variables for bot messages
    let liBot = document.createElement("li");
    let liBot2 = document.createElement("li");
    let divBot = document.createElement("div");
    let imageBot = document.createElement("IMG")
    let divStyleBot = document.createElement("div");
    let pBot = document.createElement("p");
    let imgDiv = document.createElement("div");

   
    //variables for images and Modal
    let hobbyImg = document.createElement("img");
    let divModal = document.createElement("div");
    let imgModal = document.createElement("img");

    //styling Modal and images
    divModal.id = "myModal";
    divModal.className = "modal";
    imgModal.className = "modal-content";
    imgModal.id = "img1";

    //show time under messages;
    currentdate = new Date(); 
    let timeTag = document.createElement("time");
    let timeBotTag = document.createElement("time");
    var datetime =  currentdate.getDate() + "."
                 + currentdate.toLocaleString('en', { hour12: false, month: 'long', hour: "numeric", minute: "numeric" });  + "," ;
    let dateBot =  currentdate.getDate() + "."
    + currentdate.toLocaleString('en', { hour12: false, month: 'long', hour: "numeric", minute: "numeric" });  + "," ;
    let timeBot = document.createTextNode(dateBot)
    let time = document.createTextNode(datetime); 
        

    //styling user messages
    liMe.className= "me";
    divMe.className = "messages";
    divStyle.className = "avatar user";
    imageUser.className = "imageUser";
    imageUser.src = "images/user.jpg";
    timeTag.className = "messages time";
    timeTag.style.boxShadow = "none";

    //styling bot messages
    liBot.className = "another";
    liBot2.className= "another";
    divBot.className="messages";
    divStyleBot.className="avatar bot";
    timeBotTag.className = "messages time";
    timeBotTag.style.boxShadow = "none";
    imageBot.src = "images/rimage.png";
    imageBot.className = "avatarBot";
    imgDiv.className= "messageImages"
   


    if (usrinput != "   " && usrinput != " " && usrinput != "  " && usrinput.length > 1) {

        document.getElementById("usrinput").value = "";
        liMe.appendChild(divMe);
        divStyle.appendChild(imageUser);
        liMe.appendChild(divStyle);
        divMe.appendChild(p);
        p.appendChild(userText);
        timeTag.appendChild(time)
       divMe.appendChild(timeTag);
        document.getElementById("chatBox").appendChild(liMe);

           //for scroll
        let updateScroll = document.getElementById("chatBox");
        updateScroll.scrollTop=updateScroll.scrollHeight;

    }
   
    
    function generateBot(text, img, img1) {

      liBot.appendChild(divStyleBot);
      divStyleBot.appendChild(imageBot);
      liBot.appendChild(divBot);
      divBot.appendChild(pBot);        
      pBot.appendChild(document.createTextNode(text));
      timeBotTag.appendChild(timeBot)
      divBot.appendChild(timeBotTag);
      document.getElementById("chatBox").appendChild(liBot);
     
   if (img !== undefined) {
       // attaching first image
       pBot.appendChild(document.createElement("br"))
       hobbyImg.src = img;
       imgDiv.appendChild(hobbyImg);
       pBot.appendChild(imgDiv);
      
       // When the user clicks on the image, it opens
       hobbyImg.onclick = function(){
         divModal.style.display= "block";
         imgModal.src = img;
       }

   }

   if (img1 !== undefined) {
         //second image in new line
         let hobbyImg1 = document.createElement("img");
         hobbyImg1.src = img1;
         let newDiv1 = document.createElement("div");
         newDiv1.className= "messageImages"
         newDiv1.appendChild(hobbyImg1);
         pBot.appendChild(newDiv1);
  
         hobbyImg1.onclick = function(){
           divModal.style.display= "block";
           imgModal.src = img1;
        }

   }
       
         //attaching Modal
         divModal.appendChild(imgModal);
         liBot.appendChild(divModal);

        // When the user clicks on the modal, it closes
         divModal.onclick = function() { 
         divModal.style.display = "none"; }

        //for scroll
        let updateScroll = document.getElementById("chatBox");
        updateScroll.scrollTop=updateScroll.scrollHeight;
  
   }
   

   if (usrinput == "Hallo" || usrinput == "hallo" ||usrinput == "halo" || usrinput == "haloo" ||
      usrinput == "hi" || usrinput == "Hi" || usrinput == "Hey" || usrinput== "Servus" || usrinput == "Servus!" || 
      usrinput== "Guten Tag" || usrinput== "Moin"|| usrinput == "moin") {
        generateBot(greetings[random]);  
   }


   if (usrinput == "works"){
         generateBot("WOOOOOOOOOOOOORKS");
   }


   if (usrinput.includes("What can you") || usrinput.includes("what you can do?") || usrinput.includes("Tell me what you can do") ||
   usrinput.includes("what u can do") || usrinput.includes("what can u do") || usrinput.includes("What can u")|| usrinput.includes("what can you")=== true ) {
         generateBot("I can tell you few things about Mahri. About her skills, interests or hobbies. If you are interested just ask me: 'Tell me about her hobbies' or 'Tell me everything' ");
  }



  if (usrinput.includes("Hobbies") || usrinput.includes("tell me about hobbies") || usrinput.includes("her hobbies") ||
     usrinput.includes("Mahri's hobbies") || usrinput.includes("Mahris hobbies") || usrinput.includes("Tell about her hobbies")|| usrinput.includes("tell about hobbies")
     || usrinput.includes("tell about her hobbies") || usrinput.includes("tell me her hobbies") || usrinput.includes("tell me about her hobbies")|| usrinput.includes("hobbies")=== true ) {
         generateBot("As you maybe already know she likes drawing and painting a lot. Let me show you some of her paintings.If you want see more simply ask: 'Show more' or 'Tell me about her other skills' ", "images/waves.jpg", "images/boat.jpg")
 }




  if ( usrinput.includes("paintings") || usrinput.includes("painting") || usrinput.includes("drawings")||  usrinput.includes("drawing")|| usrinput.includes("show more") 
  || usrinput.includes("Show more")|| usrinput.includes("art")=== true ) {
        generateBot("I hope you like them. If you want to know about something else like about her skills or abilities, just ask me 'What else' or say 'Show me her other skills' ", "images/baloons.jpg", "images/mountain.jpg")
 }



 if ( usrinput.includes("skills") || usrinput.includes("abilities") || usrinput.includes("capabilities")=== true ) {
        generateBot("She had an idea of recipe app. For that she made this simple UX Wireframe. It is sketch of recipe app which user can use also like a shopping list app ", "images/wireframe.png" )
  }

 /* else {
   liBot.appendChild(divStyleBot);
   divStyleBot.appendChild(imageBot);
   liBot.appendChild(divBot);
   divBot.appendChild(pBot);        
   pBot.appendChild(document.createTextNode("I'm very sorry but I dont understand you. If you are sure that your words without any grammar mistake please be patient with me.  I'm still being developed and I have so much to learn."));
   timeBotTag.appendChild(timeBot);
   divBot.appendChild(timeBotTag);
   document.getElementById("chatBox").appendChild(liBot);

      //for scroll
   let updateScroll = document.getElementById("chatBox");
   updateScroll.scrollTop=updateScroll.scrollHeight;
 } */
 

}