// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBNdVsz7FdJXVqT2_6huE6xA4PdnjHsVzs",
      authDomain: "p-95-bbba2.firebaseapp.com",
      databaseURL: "https://p-95-bbba2-default-rtdb.firebaseio.com",
      projectId: "p-95-bbba2",
      storageBucket: "p-95-bbba2.appspot.com",
      messagingSenderId: "58341666442",
      appId: "1:58341666442:web:3959dfc994c2bfb9514773"
    };
    
 firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
function  add_room(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose: " creating room name"});
      localStorage.setItem("room_name",room_name);
      window.location="Kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name- "+Room_names);
row="<div class='room_name'id="+Room_names+"onclick='rediectToRoomName(this.id)'>#"+room_name+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      function rediectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="Kwitter_page.html";
      }
//End code
      });});}
getData();