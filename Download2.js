<script type='text/javascript'>
//<![CDATA[
//CSS Ready
function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
loadCSS("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
//]]>
</script>
<script type='text/javascript'>
//<![CDATA[
function generate(){var e,n=document.getElementById("downloadx"),t=document.getElementById("btnx"),a=document.getElementById("downloadx").href,l=20,d=document.createElement("span");n.parentNode.replaceChild(d,n),e=setInterval(function(){--l<0?(d.parentNode.replaceChild(n,d),clearInterval(e),window.location.replace(a),n.style.display="inline"):(d.innerHTML="<i class='fa fa-clock-o' aria-hidden='true'/> This file is preparing to download please wait. "+l.toString()+" Seconds....",t.style.display="none")},1e3)}
//]]>
</script>
