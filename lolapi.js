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

                summonerName = json[SUMMONER_NAME_NOSPACES].name;
                summonerLevel = json[SUMMONER_NAME_NOSPACES].summonerLevel;
                summonerProfileIconId = json[SUMMONER_NAME_NOSPACES].profileIconId;
                summonerID = json[SUMMONER_NAME_NOSPACES].id;
                summonerRevisionDate = json[SUMMONER_NAME_NOSPACES].revisionDate;

                document.getElementById("sProfileIconId").innerHTML = summonerRevisionDate;
                document.getElementById("sPrevisionDate").innerHTML = summonerProfileIconId;
                document.getElementById("sName").innerHTML = summonerName + ":";
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
    var summonerID = -1;
    summonerID = $("#SummonerId").val();
    summonerID = summonerID.replace(" ", "");

    var API_KEY = "1ad2e54d-48ae-4358-ae76-a93df86a6cd2";

    if (summonerID !== -1) {

        $.ajax({
            url: 'https://euw.api.pvp.net/api/lol/euw/v1.3/stats/by-summoner/' + summonerID + '/ranked?season=SEASON2015&api_key=' + API_KEY,
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                someStat1=0;
                for(i=0;i<json.champions.length;i++){
                    if(json.champions[i].id!==0){
                       someStat1 += json.champions[i].stats.totalDeathsPerSession;
                   }else{
                        Pentas = json.champions[i].stats.totalPentaKills;
                        Quadras = json.champions[i].stats.totalQuadraKills;
                        Triples = json.champions[i].stats.totalTripleKills;
                   }
                }
                //also could have used id:0, but didn't know that gives total of all 'sessions'
                
                document.getElementById("someStat").innerHTML = someStat1;                
                document.getElementById("sPenta").innerHTML = Pentas;     
                document.getElementById("sQuadra").innerHTML = Quadras;     
                document.getElementById("sTriple").innerHTML = Triples;     
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data!");
            }
        });
    } else {}
}
