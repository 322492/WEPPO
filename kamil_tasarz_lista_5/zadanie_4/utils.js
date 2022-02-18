module.exports = {
    zakoduj: function (tab) {
        var url = ""
        for (var i=1; i<=10; i++) {
            url = url + '&' + tab[i].toString();
        }
        url=url.slice(1)
        return url
    },
    zdekoduj: function (url) {
        var akt = ""
        var tab = []
        var np = 1
        for (var i=0; i<url.length; i++) {
            if (url[i] != '&') {
                akt += url[i];
            }
            else {
                tab[np] = parseInt(akt);
                akt = '';
                np++;
            }
        }
        if (akt!='') {
            tab[np] = parseInt(akt);
        }
        return tab
    }
  
  }