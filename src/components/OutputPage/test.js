function Calci() {
    console.log("Hello Class")
    console.log("We will print a square with side of length 5")
    var option
    var pattern
    var result
   console.log("Which character would you like to print?")
    console.log("1. *")
    console.log("2. X")
    console.log("3. -")
    option = prompt("Enter option number: ");
   switch (parseInt(option)) {
    case 1: pattern = '*'; break;
    case 2: pattern = 'X'; break;
    case 3: pattern = '-'; break;
    default: pattern = '*'; break;
    }
    let i,j;
    for (i = 1; i <= 10; i++)
    {
        let side = ""
        for (j = 1; j <= 10; j++)
        {
        side = pattern +side
        }
        console.log(side);
        }
    }
   
    Calci();