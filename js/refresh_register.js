function create_status_table(){
    //variáveis
    var url = "status?type=update";
    var header,data,val;

$.getJSON(url, function(ret){
	header = "<tr id=\"header\"><th>Description</th></tr>";
	$("#status-table").html(header);
	$.each(ret, function(desID, _)
	{
		$("#header").append("<th colspan=\"4\">"+ret[desID].name+"</th>");	
		for(var regID=0 ; regID < ret[desID].data.length ; regID++)
		{
			val = ret[desID].data[regID].data;
			if(!$('#reg'+regID).length)
			{
				data = "<tr id=\"reg"+regID+"\"><td>"+ret[desID].data[regID].description+"</td></tr>";
				$("#status-table").append(data);
			}
			if(val.length == 1)
				$('#reg'+regID).append("<td colspan=4 id=\"reg"+regID+"des"+desID+"\"><img src=\"img/"+val[0]+".png\"/></td>");
			else
				for(var serID = 0 ; serID < 4 ; serID ++ )
					$('#reg'+regID).append("<td id=\"reg"+regID+"des"+desID+"ser"+serID+"\"><img src=\"img/"+val[serID]+".png\"/></td>");
		}	
	});
});
	$("#info-bar").html("Table created");	
	
}

function update_status_table()
{
    var url = "status?type=update";
    var data,val;
	var d = new Date();

$.getJSON(url, function(ret){
	$.each(ret, function(desID, _)
	{	
		for(var regID=0 ; regID < ret[desID].data.length ; regID++)
		{
			val = ret[desID].data[regID].data;
			if(val.length == 1)
				$("#reg"+regID+"des"+desID).html("<img src=\"img/"+val[0]+".png\"/>");
			else
				for(var serID = 0 ; serID < 4 ; serID ++ )
					$("#reg"+regID+"des"+desID+"ser"+serID).html("<img src=\"img/"+val[serID]+".png\"/>");
		}	
	});
});
	$("#info-bar").html("Last updated on "+d.getHours()+':'+d.getMinutes()+":"+d.getSeconds());		
}

var cancel = setInterval(update_status_table, 1000);
