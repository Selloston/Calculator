let contaner = document.getElementById("contaner");
let display = document.getElementById("display");

contaner.addEventListener("click", e => 
{
    if(e.target.nodeName == "BUTTON")
    {
        switch(e.target.textContent){
            case "C":
                clear();
                break;
            case "DEL":
                delet();
                break;
            case "=":
                calcolat();
                break;
            default:
                add(e.target.textContent);
                break;
        }
    }
})

function add(value)
{
    display.textContent += value;
}

function clear ()
{
    display.textContent = "";
}

function delet()
{
    let contat = display.textContent;
    display.textContent = contat.substring(0, contat.length - 1)
}

function calcolat()
{
    try {
        let calcolat = math.evaluate(display.textContent);
        display.textContent = calcolat;
    } catch (error) {
        display.textContent = "Error";
    }
}