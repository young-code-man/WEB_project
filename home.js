function changeDiv() {
	document.getElementById('p1').style.display =
		"none";
	document.getElementById('name').focus();
}

/**
 * Get the join number and print it to the screen
 */
function get_join_number() {
	xmlrequest(
		"get_join_number",
		function() {
			if (this.readyState == 4 && this.status == 200) {
				xmlDoc = parse_xml_from_string(this.responseText);
				document.getElementById("join_number").innerHTML = xmlDoc.getElementsByTagName("join_number")[0].textContent;
			}
		}
	);
}

/**
 * Get the names of all the players and print it to the screen
 */
function getnames() {
	xmlrequest("getnames", function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				xmlDoc = parse_xml_from_string(this.responseText);
				players = xmlDoc.getElementsByTagName("player");
				string_players = "";
				for (i = 0; i < players.length; i++) {
					string_players += players[i].getAttribute("name");
					if (i % PLAYERS_IN_LINE === 0 && i !== 0) {
						string_players += "<br/>";
					} else if ((i + 1) < players.length) {
						string_players += "&emsp;";
					}
				}
				document.getElementById("names").innerHTML = string_players;
			}
		}
	});
}
