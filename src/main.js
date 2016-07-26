window.addEventListener("message", function(a){
    if(a.origin.indexOf("intuit.com")>=1&&a.data&&a.data.initXDM)
    {
        var b=document.createElement("script");
        b.setAttribute("type","text/javascript");
        b.innerHTML=a.data.initXDM;
        document.getElementsByTagName("head")[0].appendChild(b);
    }
});

getCookie = function(c_name) {
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name)
        {
            return unescape(y);
        }
     }
};

function get(name) {
    var aname = (new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search);
    if (aname) {
        return decodeURIComponent(name[1]);
    }
}

var v3ServiceUrl;
var realmId;
var ticket;

qboXDMReady = function() {
    var pageModal = document.getElementById("pageModal");
    if (pageModal) {
        pageModal.addEventListener("dismiss", function() {
            qboXDM.closeTrowser();
        });
    }

   qboXDM.getContext(function(context) {
      console.log(context);
      if (document.getElementById("custName")) {
          document.getElementById("custName").value = context.qbo.user.name;
      }
      v3ServiceUrl = context.qbo.v3ServiceBaseUrl;
      realmId = context.qbo.realmId;
      ticket = getCookie(context.qbo.cookiePrefix+".tkt");
   });
};

showPageMessage = function() {
    qboXDM.showPageMessage("Hello World", false);
};

showSimpleDialog = function() {
    qboXDM.showSimpleOkDialog("Title", "My Own Message", function() { console.log("ok"); });
};

showVideo = function() {
    qboXDM.showVideo("Call Me Maybe", "fWNaR-rxAic");
};

callV3Service = function(path, data) {
    require(["jquery"], function($) {
        $.ajax({
            method: data ? "POST" : "GET",
            data: data ? JSON.stringify(data) : null,
            dataType: "json",
            url: v3ServiceUrl+path,
            xhrFields: {
                withCredentials: true
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("CsrfToken", ticket);
                xhr.setRequestHeader("Content-Type", "application/json");
            },
            success: function(data) {
                console.log(data);
            }
        });
    });
};

callV3CompanyInfoService = function() {
  callV3Service("companyinfo/"+realmId);
};

callV3AddVendorService = function() {
    var vendor = {
        "DisplayName": "01Dianne's Auto Shop "+Date.now()
    };
    callV3Service("vendor", vendor);
};

goToTrowser = function(id) {
  qboXDM.navigate("xdmtrowser://trowser.html?id="+id);
};
