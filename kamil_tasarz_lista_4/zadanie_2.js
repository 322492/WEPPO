function Foo(){
    Foo.prototype.Bar = function () {
        return Qux();
    };
    function Qux() {
        console.log("QUX");
    } 
}

var x = new Foo();
x.Bar();
//x.Qux(); 