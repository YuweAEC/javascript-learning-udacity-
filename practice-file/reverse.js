// function reverses the order of characters in a word
function rev(w)
{
    var revw = "";
    // loops over characters in reverses order
    for (var i=w.length - 1; i >= 0; i--)
    {
        // adds characters to a new word
        revw = revw.concat(w[i]);
    }
    return revw;
}