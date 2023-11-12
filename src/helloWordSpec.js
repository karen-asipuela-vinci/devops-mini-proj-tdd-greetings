export class Main {

    greet(name) {
       if(name == null || name == " ") return "Hello, my friend.";
       if(Array.isArray(name) ){
        if( name.length > 1){
            let upperCase = [];
            let lowerCase = [];
            name.forEach(element => {
                 if(element.toUpperCase()== element){
                    upperCase.push(element);
                 }else{
                    lowerCase.push(element);
                 }
            });
            let printLower = "Hello, " + lowerCase[0];
            const notLast = lowerCase.slice(1,-1);
            const last = lowerCase.slice(-1);
            notLast.forEach(element => {
                printLower += ", " + element;
            });
            if(upperCase.length==0){
                return printLower +" and "+ last + ".";
            }
            if(upperCase.length===1)return printLower += " and " + last + ". AND HELLO " + upperCase[0] + "!"; 
            let printUpper = " AND HELLO " + upperCase[0];
            const notLastU = upperCase.slice(1,-1);
            const lastU = upperCase.slice(-1);
            notLastU.forEach(element => {
                printUpper += ", " + element;
            });
            
            return printLower += " and " + last + "." + printUpper + lastU + "!";  
            }
       };
       if(name == name.toUpperCase())return "HELLO, "+ name+ "!";
        return "Hello, " + name +".";
    }
    

}