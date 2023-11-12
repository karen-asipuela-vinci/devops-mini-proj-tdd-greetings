export class Main {

    greet(name) {
       if(name == null || name == " ") return "Hello, my friend.";
       if(Array.isArray(name) ){
        if( name.length > 1){
            let print = "Hello, " + name[0];
            const notLast = name.slice(1,-1);
            const last = name.slice(-1);
            notLast.forEach(element => {
                print += ", " + element;
            });
            
            return print += " and " + last + ".";  
            }
       };
       if(name == name.toUpperCase())return "HELLO, "+ name+ "!";
        return "Hello, " + name +".";
    }
    

}