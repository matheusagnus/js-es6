window.onload = function () {

/**
 * NEW STRING METHODS
 * 
 * repeat
 * startsWith
 * endsWith
 * includes
 * 
 */

    // repeat()

    var str = "graaaaaavy ";

    console.log(str.repeat(3)) // == graaaaaavy graaaaaavy graaaaaavy 

    // startWith()

    var str1 = "goodbye";

    console.log(str1.startsWith("good")) // == true

    console.log(str1.startsWith("bye")) // == false

    console.log(str1.startsWith("bye", 4)) // == true

    var youSay = "goodbye";

    if (youSay.startsWith("goodbye")) {
        var iSay = "hello";
    }

    console.log('you say ' + youSay + ' I say ' + iSay)

    // endsWith()
    
    var str2 = "goodbye";

    console.log(str2.endsWith("bye")); // == true

    console.log(str2.endsWith("good")); // == false

    console.log(str2.endsWith("good", str2.length - 3)); // == true

    // include ()

    var test = "My name is Ryu";

    console.log(test.includes("Ryu")); // == true

    console.log(test.includes("Matheus")); // == false

}
