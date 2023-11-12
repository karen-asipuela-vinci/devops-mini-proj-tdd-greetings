export class Main {

    greet(name) {
       if(name == null || name == " ") return "Hello, my friend.";
       if(Array.isArray(name) ){
        if (name.length === 2) {
            return `Hello, ${name[0]} and ${name[1]}.`;
        };
       };
       if(name == name.toUpperCase())return "HELLO, "+ name+ "!";
        return "Hello, " + name +".";
    }
    

}