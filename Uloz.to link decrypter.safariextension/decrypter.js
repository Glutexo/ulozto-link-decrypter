(function() {
    if(document.body) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.text = "";
        script.text += "if(window.location.href.indexOf(\"http://uloz.to/hledej?\") === 0\n";
        script.text += "  || window.location.href.indexOf(\"http://www.uloz.to/hledej?\") === 0\n";
        script.text += "  || window.location.href.indexOf(\"http://ulozto.cz/hledej?\") === 0\n";
        script.text += "  || window.location.href.indexOf(\"http://www.ulozto.cz/hledej?\") === 0\n";
        script.text += "  || window.location.href.indexOf(\"http://ulozto.sk/hledej?\") === 0\n";
        script.text += "  || window.location.href.indexOf(\"http://www.ulozto.sk/hledej?\") === 0\n";
        script.text += "  || window.location.href.indexOf(\"http://zachowajto.pl/hledej?\") === 0\n";
        script.text += "  || window.location.href.indexOf(\"http://www.zachowajto.pl/hledej?\") === 0\n";
        script.text += ") {\n";
        script.text += "  var adTimer, linksTimer;\n";
        script.text += "\n";
        script.text += "  var attachLinks = function() {\n";
        script.text += "    var links = document.querySelectorAll(\".chessFiles .fileName a[data-icon]\");\n";
        script.text += "    if(links.length > 0) {\n";
        script.text += "      clearInterval(linksTimer);\n";
        script.text += "    }\n";
        script.text += "\n";
        script.text += "    for(var i = 0; i < links.length; i++) {\n";
        script.text += "      var link = links[i];\n";
        script.text += "      var key = link.dataset['icon'];\n";
        script.text += "      var url = ad.decrypt(kn[key]);\n";
        script.text += "      link.href = url;\n";
        script.text += "    }\n";
        script.text += "  }\n";
        script.text += "\n";
        script.text += "  var checkForAd = function() {\n";
        script.text += "    if(typeof ad !== \"undefined\") {\n";
        script.text += "      clearInterval(adTimer);\n";
        script.text += "      linksTimer = setInterval(attachLinks, 500);\n";
        script.text += "    }\n";
        script.text += "  }\n";
        script.text += "\n";
        script.text += "  adTimer = setInterval(checkForAd, 500);\n";
        script.text += "}\n";

        document.body.appendChild(script);
    }
}).call(this);
