!function(t,a){for(var e in a)t[e]=a[e]}(exports,function(t){var a={};function e(h){if(a[h])return a[h].exports;var r=a[h]={i:h,l:!1,exports:{}};return t[h].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=a,e.d=function(t,a,h){e.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:h})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,a){if(1&a&&(t=e(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var h=Object.create(null);if(e.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)e.d(h,r,function(a){return t[a]}.bind(null,r));return h},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},e.p="",e(e.s=0)}([function(t,a){a.handler=function(t,a,e){const{LANDING:h}=process.env,{M:r}=JSON.parse(t.body);var M={Mtow:r,Landing:0,Parking:0,Approach:0,Concession:0,Supervision:0,Handling:0,Lighting:0,paxeu:0,paxus:0},{Mtow:n,Landing:i,Parking:o,Approach:l,Concession:c,Supervision:u,Handling:d,Lighting:s,paxeu:p,paxus:f}=M;return r<=7&&r>0&&(i=42*Math.ceil(r)*100/100,o=Math.round(3.47*Math.ceil(r)*100)/100,l=Math.round(144*Math.sqrt(Math.ceil(r))*100)/100,c=36,u=180,d=169,s=781,p=182,f=242),r<=12&&r>7&&(i=Math.ceil(r)*h*100/100,i=42*Math.ceil(r)*100/100,o=Math.round(3.47*Math.ceil(r)*100)/100,l=Math.round(144*Math.sqrt(Math.ceil(r))*100)/100,c=36,u=180,d=224,s=781,p=182,f=242),r<=15&&r>12&&(i=42*Math.ceil(r)*100/100,o=Math.round(3.47*Math.ceil(r)*100)/100,l=Math.round(240*Math.sqrt(Math.ceil(r))*100)/100,c=36,u=180,d=224,s=781,p=182,f=242),r<=19&&r>15&&(i=42*Math.ceil(r)*100/100,o=Math.round(3.47*Math.ceil(r)*100)/100,l=Math.round(240*Math.sqrt(Math.ceil(r))*100)/100,c=49,u=190,d=224,s=781,p=182,f=242),r<=25&&r>19&&(i=42*Math.ceil(r)*100/100,o=Math.round(3.47*Math.ceil(r)*100)/100,l=Math.round(240*Math.sqrt(Math.ceil(r))*100)/100,c=49,u=190,d=361,s=781,p=182,f=242),r<=30&&r>25&&(i=85*Math.ceil(r)*100/100-1075,o=Math.round(3.47*Math.ceil(r)*100)/100,l=Math.round(392*Math.sqrt(Math.ceil(r))*100)/100,c=49,u=190,d=361,s=781,p=182,f=242),r<=40&&r>30&&(i=85*Math.ceil(r)*100/100-1075,o=Math.round(3.47*Math.ceil(r)*100)/100,l=Math.round(392*Math.sqrt(Math.ceil(r))*100)/100,c=84,u=200,d=571,s=781,p=182,f=242),r<=50&&r>40&&(i=85*Math.ceil(r)*100/100-1075,o=Math.round(3.47*Math.ceil(r)*100)/100,l=Math.round(392*Math.sqrt(Math.ceil(r))*100)/100,c=84,u=200,d=611,s=781,p=182,f=242),r<=60&&r>50&&(i=122*Math.ceil(r)*100/100-2925,o=Math.round(3.47*Math.ceil(r)*100)/100,l=Math.round(392*Math.sqrt(Math.ceil(r))*100)/100,c=84,u=250,d=710,s=781,p=182,f=242),r<=70&&r>60&&(i=122*Math.ceil(r)*100/100-2925,o=Math.round(3.47*Math.ceil(r)*100)/100,l=Math.round(392*Math.sqrt(Math.ceil(r))*100)/100,c=110,u=250,d=990,s=781,p=182,f=242),r<=75&&r>70&&(i=122*Math.ceil(r)*100/100-2925,o=Math.round(3.47*Math.ceil(r)*100)/100,l=Math.round(392*Math.sqrt(Math.ceil(r))*100)/100,c=110,u=250,d=1045,s=781,p=182,f=242),r<=80&&r>75&&(i=152*Math.ceil(r)*100/100-5175,o=Math.round(3.47*Math.ceil(r)*100)/100,l=Math.round(392*Math.sqrt(Math.ceil(r))*100)/100,c=110,u=250,d=1045,s=781,p=182,f=242),r<=100&&r>80&&(i=152*Math.ceil(r)*100/100-5175,o=Math.round(3.47*Math.ceil(r)*100)/100,l=Math.round(392*Math.sqrt(Math.ceil(r))*100)/100,c=110,u=300,d=1290,s=781,p=182,f=242),r<=120&&r>100&&(i=152*Math.ceil(r)*100/100-5175,o=Math.round(3.47*Math.ceil(r)*100)/100,l=Math.round(392*Math.sqrt(Math.ceil(r))*100)/100,c=158,u=300,d=1322,s=781,p=182,f=242),r<=125&&r>120&&(i=152*Math.ceil(r)*100/100-5175,o=Math.round(3.47*Math.ceil(r)*100)/100,l=Math.round(392*Math.sqrt(Math.ceil(r))*100)/100,c=158,u=300,d=1650,s=781,p=182,f=242),r<=150&&r>125&&(i=174*Math.ceil(r)*100/100-7925,o=Math.round(3.47*Math.ceil(r)*100)/100,l=Math.round(392*Math.sqrt(Math.ceil(r))*100)/100,c=158,u=300,d=1650,s=781,p=182,f=242),r<=180&&r>150&&(i=174*Math.ceil(r)*100/100-7925,o=Math.round(3.47*Math.ceil(r)*100)/100,l=Math.round(392*Math.sqrt(Math.ceil(r))*100)/100,c=158,u=350,d=1650,s=781,p=182,f=242),r<=200&&r>180&&(i=174*Math.ceil(r)*100/100-7925,o=Math.round(3.47*Math.ceil(r)*100)/100,l=Math.round(392*Math.sqrt(Math.ceil(r))*100)/100,c=158,u=350,d=2400,s=781,p=182,f=242),r<=230&&r>200&&(i=160*Math.ceil(r)*100/100-5125,o=Math.round(3.47*Math.ceil(r)*100)/100,l=Math.round(392*Math.sqrt(Math.ceil(r))*100)/100,c=228,u=350,d=2400,s=781,p=182,f=242),r<=300&&r>230&&(i=160*Math.ceil(r)*100/100-5125,o=Math.round(3.47*Math.ceil(r)*100)/100,l=Math.round(392*Math.sqrt(Math.ceil(r))*100)/100,c=228,u=400,d=2500,s=781,p=182,f=242),r<=400&&r>300&&(i=160*Math.ceil(r)*100/100-5125,o=Math.round(3.47*Math.ceil(r)*100)/100,l=Math.round(392*Math.sqrt(Math.ceil(r))*100)/100,c=300,u=400,d=3100,s=781,p=182,f=242),e(null,{statusCode:200,body:JSON.stringify({Mtow:n,Landing:i,Parking:o,Approach:l,Concession:c,Supervision:u,Handling:d,Lighting:s,paxeu:p,paxus:f}),headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-requested-With, Content-Type, Accept"}}),"POST"!==t.httpMethod?(console.log(t.httpMethod),{statusCode:405,body:"Method Not Allowed"}):{statusCode:200,body:"Ok"}}}]));