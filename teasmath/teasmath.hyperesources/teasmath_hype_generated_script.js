//	HYPE.documents["teasmath"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="teasmath.hyperesources",c="teasmath",e="teasmath_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/teasmath_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_596","HYPE_dtl_596",!0==(null!=a&&10>a||false==!0)?"HYPE-596.full.min.js":"HYPE-596.thin.min.js"),false==!0&&(a=a||l("HYPE_w_596","HYPE_wdtl_596","HYPE-596.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_596(c,e,{"3":{p:1,n:"slice1.png",g:"70",t:"@1x"},"1":{p:1,n:"white%20on%20black%20circle_2x.png",g:"27",o:true,t:"@2x"},"-2":{n:"blank.gif"},"-1":{n:"PIE.htc"},"2":{p:1,n:"slice2.png",g:"68",t:"@1x"},"0":{p:1,n:"white%20on%20black%20circle.png",g:"27",o:true,t:"@1x"}},h,["<link href='https://fonts.googleapis.com/css?family=Roboto&subset=latin' rel='stylesheet' type='text/css'>"],d,[{n:"Untitled Scene",o:"1",X:[0]}],[{o:"3",p:"600px",a:100,Y:1920,Z:200,b:100,cA:false,c:"#FCFFFF",L:[],bY:1,d:1920,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:4,b:[],a:[{f:"c",y:0,z:2,i:"a",e:0,s:860,o:"87"},{f:"c",y:0,z:2,i:"cQ",e:1.2,s:0,o:"88"},{f:"c",y:0,z:2,i:"cR",e:1.2,s:0,o:"88"},{f:"c",y:0,z:2,i:"a",e:1720,s:860,o:"89"},{f:"c",y:1,z:2,i:"e",e:1,s:0,o:"87"},{f:"c",y:1,z:2,i:"e",e:1,s:0,o:"89"},{y:2,i:"a",s:0,z:0,o:"87",f:"c"},{f:"c",y:2,z:2,i:"cQ",e:1,s:1.2,o:"88"},{f:"c",y:2,z:2,i:"cR",e:1,s:1.2,o:"88"},{y:2,i:"a",s:1720,z:0,o:"89",f:"c"},{y:3,i:"e",s:1,z:0,o:"87",f:"c"},{y:3,i:"e",s:1,z:0,o:"89",f:"c"},{y:4,i:"cQ",s:1,z:0,o:"88",f:"d"},{y:4,i:"cR",s:1,z:0,o:"88",f:"d"}],f:30}},bZ:180,O:["87","86","89","88"],n:"Untitled Layout","_":0,v:{"87":{p:"no-repeat",c:200,q:"100% 100%",bS:0,d:200,r:"inline",cQ:1,e:0,aW:0,cR:1,aX:0,h:"27",bF:"86",j:"absolute",x:"visible",k:"div",dB:"img",z:13,a:860,b:0},"86":{k:"div",x:"visible",c:1920,d:200,z:2,a:0,j:"absolute",bS:383,b:0},"89":{h:"70",p:"no-repeat",x:"visible",a:860,q:"100% 100%",b:0,j:"absolute",dB:"img",z:15,k:"div",bS:0,d:200,bF:"86",cQ:1,e:0,c:200,r:"inline",cR:1},"88":{h:"68",p:"no-repeat",x:"visible",a:433,q:"100% 100%",b:46,j:"absolute",dB:"img",z:14,k:"div",bS:0,d:108,bF:"86",cQ:0,c:1054,r:"inline",cR:0}}}],{},g,{},
(function (shouldShow, mainContentContainer) {
	var loadingPageID = mainContentContainer.id + "_loading";
	var loadingDiv = document.getElementById(loadingPageID);

	if(shouldShow == true) {
		if(loadingDiv == null) {	
			loadingDiv = document.createElement("div");
			loadingDiv.id = loadingPageID;
			loadingDiv.style.cssText = "overflow:hidden;position:absolute;width:150px;top:40%;left:0;right:0;margin:auto;padding:2px;border:3px solid #BBB;background-color:#EEE;border-radius:10px;text-align:center;font-family:Helvetica,Sans-Serif;font-size:13px;font-weight:700;color:#AAA;z-index:100000;";
			loadingDiv.innerHTML = "Loading";
			mainContentContainer.appendChild(loadingDiv);
		}
 
		loadingDiv.style.display = "block";
		loadingDiv.removeAttribute("aria-hidden");
		mainContentContainer.setAttribute("aria-busy", true);
	} else {
		loadingDiv.style.display = "none";
		loadingDiv.setAttribute("aria-hidden", true);
		mainContentContainer.removeAttribute("aria-busy");
	}
})

,false,false,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
