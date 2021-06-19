var stateByCountry = {
    India: [
      "Andhra",
      "Delhi",
      "Maharashtra",
      "Tamil Nadu",
      "Pondicherry",
      "Not listed"
    ],
    USA: ["Arizona", "California", "Florida", "Michigan", "Texas", "Not listed"],
    Australia: [
      "New South Wales",
      "Queensland",
      "Northern Territory",
      "Western Australia",
      "Tasmania",
      "Not listed"
    ],
    Not_listed: ["Not listed"]
  };
  function makeSubmenu(value) {
    
    var StatesOptions = "";
    for (stateID in stateByCountry[value]) {
      StatesOptions += "<option>" + stateByCountry[value][stateID] + "</option>";
      document.getElementById("citySelect").innerHTML = StatesOptions;
    }
  }
  
  function updateUser() {
    const foodCheckbox = document.querySelector(".food");
    const checkboxes = foodCheckbox.querySelectorAll("input[type=checkbox]");
  
    var count = 0;
    var foodArray = [];
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        foodArray.push(checkboxes[i].name);
        count++;
      }
    }
    const errormsg = "Fill this field";
    if (count < 2) {
      document.querySelector(".error").style.visibility = "visible";
      const errorMessage = "At least two checkboxes must be selected.";
  
    } else {
      document.querySelector(".error").style.visibility = "hidden";
      document.querySelector("#myTable").style.visibility = "visible";
      console.log("entering data to table");
      // var totalFields= document.querySelector(".form").elements.length;
      // console.log(totalFields);
      var table = document.getElementById("myTable");
      var row = table.insertRow(-1);
      row.insertCell(0).innerHTML = document.querySelector(".firstName").value;
      row.insertCell(1).innerHTML = document.querySelector(".lastName").value;
      row.insertCell(2).innerHTML = document.querySelector(".addr").value;
      row.insertCell(3).innerHTML = document.querySelector("#zip").value;
      row.insertCell(4).innerHTML = document.querySelector(
        'input[name="gender"]:checked'
      ).value;
      row.insertCell(5).innerHTML = foodArray;
      row.insertCell(6).innerHTML = document.querySelector(
        "#countrySelect"
      ).value;
      row.insertCell(7).innerHTML = document.querySelector("#citySelect").value;
  
      document.querySelector(".form").reset();
    }
  }
  