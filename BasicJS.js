function count()
{
    var display = "";
    var nums;
    for(nums = 0; nums < 11; nums++)
    {
        if(nums % 2 == 0){
            display += nums + "<br>";
        }
    }

    document.getElementById("numbers").innerHTML = display;
}