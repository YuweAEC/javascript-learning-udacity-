function rev(w)
{
    var revw = "";
    for (var i=w.length - 1; i >= 0; i--)
    {
        revw = revw.concat(w[i]);
    }
    return revw;
}