<script>
/*
Pass LatLng for use in request
Pass startDate from date on homepage
Pass map zoom and use to set radius
Send url using http GET

Parse XML response into Insert statement into Fusion Table

http://data.pollstar.com/api/pollstar.asmx/RegionEvents?lat=36.7477778&lng=-119.7713889&radius=10&onlyVenuesWithEvents=1&startDate=4/30/2014&dayCount=0&apiKey=23511-8040658
*/



function GetEventInfo(map)
{
    var xmlHttp = null;
    var Lat = map.lat();
    var Lng = map.lng();
    var Zoom = map.getZoom();
    var Radius = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    var StartDate = "5/1/2014" //document.getElementById( "TextBoxCustomerNumber" ).value;
    
    var Url = "http://data.pollstar.com/api/pollstar.asmx/RegionEvents?lat=" + Lat + "&lng= + Lng + "&radius=" + Radius[19-Zoom] + "&onlyVenuesWithEvents=1&startDate=" + StartDate + "&dayCount=0&apiKey=23511-8040658";

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", Url, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

/*
function ProcessRequest() 
{
    if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) 
    {
        if ( xmlHttp.responseText == "Not found" ) 
        {
            document.getElementById( "TextBoxCustomerName"    ).value = "Not found";
            document.getElementById( "TextBoxCustomerAddress" ).value = "";
        }
        else
        {
            var info = eval ( "(" + xmlHttp.responseText + ")" );

            // No parsing necessary with JSON!        
            document.getElementById( "TextBoxCustomerName"    ).value = info.jsonData[ 0 ].cmname;
            document.getElementById( "TextBoxCustomerAddress" ).value = info.jsonData[ 0 ].cmaddr1;
        }                    
    }
}
*/
</script>
