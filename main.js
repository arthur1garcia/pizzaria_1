pizzaListArray = [];

function getmenu()
	{    
        var item = document.getElementById("PizzaName").value; 
       
        
        pizzaListArray.push(item);
        
        var removeCommas = pizzaListArray.join("<br># ");
        document.getElementById("displayMenu").innerHTML =  "# " + removeCommas;
	}