


 function validate() {
           var name = document.getElementById("name");
           var price = document.getElementById("price");
           var date = document.getElementById("date");
           var category = document.getElementById("category");
            
           
           
           if (name.value == ""  ) {
                alert("Title is required | Title should have 2 to 65 characters");
                return false;
            }
     
            else if(price.value == ""){
                
                alert("Price is required | Price has to be a number");
                return false;
                
            }
     
             else if(date.value == ""){
                
                alert("Date of Launch is required");
                return false;
                
            }
     
     
      else if(category.value == "Select one Category"){
                
                alert("Select one category");
                return false;
                
            }
            
                
            return true;
        }