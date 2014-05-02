<script>
function parseXMLResponse(){
    
    //The block below is used to generate an XML message from Pollstar for testing
    var Url = "http://data.pollstar.com/api/pollstar.asmx/RegionEvents?lat=38.6272&lng=-90.1978&radius=8&onlyVenuesWithEvents=1&startDate=5/1/2014&dayCount=0&apiKey=23511-8040658";
    var xmlResponse = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", Url, false );
    xmlHttp.send( null );
    xmlResponse = xmlHttp.responseText;
    
    if (window.DOMParser)
    {
        parser=new DOMParser();
        xmlDoc=parser.parseFromString(xmlResponse,"text/xml");
    }
    else // Internet Explorer
    {
        xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async=false;
        xmlDoc.loadXML(xmlResponse); 
    }
    
    x=xmlDoc.getElementsByTagName("venue");
    for (i=0;i<x.length;i++)
    { 
        document.write(x[i].childNodes[0].nodeValue);
        document.write("<br>");
    }
</script>
