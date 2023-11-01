 /* Create a Function called 'greet' that displays 'Hello!'

    Add a parameter called 'name' and display the message 'Hello ${name.Then calle the function a few times with different names}

    Try calling the function w/o a name.Modify the function so it will display hi there instead of undefined.*/
 
    function greet(name='there'){
      console.log(`Hello ${name}!`);
    }

    greet('Alvin');