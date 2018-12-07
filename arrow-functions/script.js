window.onload = function () {

/**
 * OLD WAY WITHOUT ARROW FUNCTION
 * 
 * var ninjaGreeting = function() {
 *   console.log("hiiiiiiiiiya");
 * }
 *
 *  ninjaGreeting();
 *
 * 
 */

 // var ninjaGreeting = () => console.log("hiiya");

// ninjaGreeting();

var ninja = {
    name: "Ryu",
    chop(x) {
        window.setInterval(() => {
            if (x > 0) {
                console.log(this.name + " chopped the enemy");
                x--;
            }
        }, 1000);
    }
};

ninja.chop(5);

}