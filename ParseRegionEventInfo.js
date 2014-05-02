<script>
function parseXMLResponse(){
    
    if (window.DOMParser)
    {
        parser=new DOMParser();
        xmlDoc=parser.parseFromString(txt,"text/xml");
    }
    else // Internet Explorer
    {
        xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async=false;
        xmlDoc.loadXML(txt); 
    }
    
    
/*
Loop through XML text and output values
*/
    for (i=0;i<x.length;i++)
    {
        document.write(x[i].nodeName);
        document.write(": ");
        document.write(x[i].childNodes[0].nodeValue);
        document.write("<br>");
    }
}
</script>
