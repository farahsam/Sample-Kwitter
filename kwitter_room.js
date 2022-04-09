
const firebaseConfig = {
      apiKey: "AIzaSyB9QjkWvVdZfG8TWPqHhpmqlxvAN7hO7Vw",
      authDomain: "sample-kwitter.firebaseapp.com",
      databaseURL: "https://sample-kwitter-default-rtdb.firebaseio.com",
      projectId: "sample-kwitter",
      storageBucket: "sample-kwitter.appspot.com",
      messagingSenderId: "697467928093",
      appId: "1:697467928093:web:4cb2772f22037c4fb010f4",
      measurementId: "G-ZEDGLL2X44"
    };
      firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
 

 document.getElementById("user_name").innerHTML= " Welcome "+ user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("room name-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
     });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name );
window.location="kwitter_page.html";

}

function logout()
{
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location="index.html";
}