var sumName = "";

function summonerLookUp() {
    var SUMMONER_NAME = "";
    SUMMONER_NAME = $("#userName").val();

    var API_KEY = "1ad2e54d-48ae-4358-ae76-a93df86a6cd2";


    if (SUMMONER_NAME !== "") {

        $.ajax({
            url: 'https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/' + SUMMONER_NAME + '?api_key=' + API_KEY,
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                var SUMMONER_NAME_NOSPACES = SUMMONER_NAME.replace(" ", "");

                SUMMONER_NAME_NOSPACES = SUMMONER_NAME_NOSPACES.toLowerCase().trim();

                summonerLevel = json[SUMMONER_NAME_NOSPACES].summonerLevel;
                summonerID = json[SUMMONER_NAME_NOSPACES].id;

                document.getElementById("sLevel").innerHTML = summonerLevel;
                document.getElementById("sID").innerHTML = summonerID;
                
                // give sumName the Summoner Name from the json Object
                sumName = sumName;
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data!");
            }
        });
    } else {}
}

function Name() {
    alert(sumName);
}
