class Parent{
    hello(){
        console.log('Hello Bangladesh');
    }
}

class Child extends Parent{
    // hello(){
    //     console.log("This is parent Method but modify by child class");
    // }

    childMethod(){
       super.hello();
    }
}

var obj = new Child;

obj.hello();

obj.childMethod();