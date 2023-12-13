export class Main {

    greet(name) {
       if(name == null || name == " ") return "Hello, my friend.";
       if(Array.isArray(name) ){
        if( name.length > 1){
            let upperCase = [];
            let lowerCase = [];
            let langue = null;
            name.forEach(element => {
                if(element === "fr" || element === "en" || element === "nl"){
                    langue = element;
                }
                 else if(element.toUpperCase()== element){
                    upperCase.push(element);
                 }else{
                    lowerCase.push(element);
                 }
            });
           
            let printLower
            if( langue != null){
                if(langue == "fr"){
                 printLower = "Bonjour, " + lowerCase[0];
                }
                else if(langue =="nl"){
                 printLower = "Goeiedag, " + lowerCase[0];
                }}
            else { printLower = "Hello, " + lowerCase[0];}

            const notLast = lowerCase.slice(1,-1);
            const last = lowerCase.slice(-1);
            notLast.forEach(element => {
                printLower += ", " + element;
            });
            if(upperCase.length===0){
                if( langue != null){
                    if(langue == "fr"){
                        return printLower +" et "+ last + ".";
                        }
                        else if(langue == "nl"){
                         return printLower +" en "+ last + ".";
                        }}
                    else {return printLower +" and "+ last + ".";}

                
            }
            if(upperCase.length===1){
                if( langue != null){
                    if(langue == "fr"){
                        return printLower += " et " + last + ". ET BONJOUR " + upperCase[0] + "!"; 
                        }
                        else if(langue == "nl"){
                            return printLower += " en " + last + ". EN GOEIENDAG " + upperCase[0] + "!"; 
                        }}
                    else {return printLower += " and " + last + ". AND HELLO " + upperCase[0] + "!"; }
               
            }
            let printUpper
            if( langue != null){
                if(langue == "fr"){
                     printupper = "ET BONJOUR, " + upperCase[0];
                    }
                    else if(langue == "nl"){
                     printupper = "EN GOEIENDAG, " + upperCase[0];
                    }}
                else { printUpper = " AND HELLO " + upperCase[0];}
            const notLastU = upperCase.slice(1,-1);
            const lastU = upperCase.slice(-1);
            notLastU.forEach(element => {
                printUpper += ", " + element;
            });
            if( langue != null){
                if(langue == "fr"){
                    return printLower += " et " + last + ". ET BONJOUR " + printUpper +" ET" + lastU + "!"; 
                    }
                    else if(langue == "nl"){
                        return printLower += " en " + last + ". EN GOEIENDAG " + printUpper +" EN" + lastU + "!";  
                    }}
                else {return printLower += " and " + last + "." + printUpper +" AND HELLO " + lastU + "!";  }
            
            }
       };
       if(name == name.toUpperCase())return "HELLO, "+ name+ "!";
        return "Hello, " + name +".";
    }
    

}