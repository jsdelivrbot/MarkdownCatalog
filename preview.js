function getParameterByName(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=t.exec(location.search);return null==n?"":decodeURIComponent(n[1].replace(/\+/g," "))}function getCookie(e){for(var t=document.cookie,n=t.split(";"),o=0;o<n.length;o++){var i=n[o].split("=");if($.trim(i[0])==e)return i[1]&&i[1].length?i[1]:null}return!1}function postMessage(e){window.parent&&window.parent.postMessage&&window.parent.postMessage(e,"*")}$(function(){function e(){var e=getParameterByName("file"),t=getParameterByName("version");e&&(t&&(e=e+"&version="+t),$.get(e+"&cstk="+getCookie("YNOTE_CSTK"),function(t){if(mdc.init(t,!1),postMessage("mdEditor.init.ready"),/YnoteAndroid/.test(navigator.userAgent)){var n=e.match(/group\/([0-9a-zA-Z]+)/),o=e.match(/file\/([0-9a-zA-Z]+)/);window.PreView.loadComplete(n?n[1]:"",o?o[1]:"")}}).error(function(e){postMessage("mdEditor.init.error")}))}if(/YnoteAndroid/.test(navigator.userAgent)&&!getCookie("YNOTE_CSTK"))$.ajax({url:"/yws/mapi/user?method=get&keyfrom=web",async:!1,cache:!1,type:"GET",success:e});else{if(!/note\.youdao\.com/.test(document.domain)||window.top===window.self)return;e()}window.preview=function(e){$.get(e,function(e){mdc.init(e,!1)})},$(".markdown-body").delegate("a","click",function(e){var t=$(e.target),n=e.target,o=window.location;if(""!==n.hash){if(!n.origin&&0===n.href.indexOf(o.origin))return;if(n.origin===o.origin)return}t.attr("target","_blank")}),$("body").on("keydown",function(e){8!=e.keyCode&&46!=e.keyCode||/INPUT|SELECT|TEXTAREE/i.test(e.target.tagName)||e.preventDefault()})});



window.onload = function(){
  var body = $('<div id="body"></div>');
  $("body").children().each(function(){
    if(this.tagName != 'SCRIPT'){
        body.append(this);
    }
  });
  $("body").append('<div id="category"></div>');
  $("body").append(body);
  $("h2,h3,h4,h5,h6").each(function(i,item){
    var tag = $(item).get(0).localName;
    $(item).attr("id","wow"+i);
    $("#category").append('<a class="new'+tag+'" href="#wow'+i+'">'+$(this).text()+'</a></br>');
    $(".newh2").css("margin-left",0);
    $(".newh3").css("margin-left",20);
    $(".newh4").css("margin-left",40);
    $(".newh5").css("margin-left",60);
    $(".newh6").css("margin-left",80);
  });  
}
