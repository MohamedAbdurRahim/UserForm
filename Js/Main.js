const firebaseConfig = {
   
  };
  firebase.initializeApp(firebaseConfig);
  
  var admissionFormDB = firebase.database().ref("htmlform");
  
  document.getElementById("AdmissionForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
      e.preventDefault();
      namev= getElementById("name");
      datev= getElementById("date");
      agev= getElementById("age");
      genderv= getElementById("gender");
      clgnamev = getElementById("college");
      yearv= getElementById("year");
      emailv= getElementById("email");
      cityv= getElementById("city");
      contactv = getElementById("contact");
      parentv= getElementById("parent");
    
      saveMessages(namev,datev,agev,genderv,clgnamev,yearv,emailv,cityv,contactv,parentv);
    
      console.log(namev,datev,agev,genderv,clgnamev,yearv,emailv,cityv,contactv,parentv)
     
    
      //   reset the form
      document.getElementById("AdmissionForm").reset();
    }
  
    
  const saveMessages = (namev,datev,agev,genderv,clgnamev,yearv,emailv,cityv,contactv,parentv) => {
      var myAdmissionForm = admissionFormDB.push();
    
      myAdmissionForm.set({
        name: namev,
        date: datev,
        age: agev,
        gender: genderv,
        clgname:clgnamev,
        year: yearv,
        email: emailv,
        city:cityv,
        contact:contactv,
        parent:parentv
      });
    };
  
   
    