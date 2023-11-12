export class Main {

    greet(name) {
       if(name == null || name == " ") return "Hello, my friend.";
       if(name == name.toUpperCase())return "HELLO, "+ name+ "!";
        return "Hello, " + name +".";
    }
    

}