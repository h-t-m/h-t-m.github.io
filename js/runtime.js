setInterval((()=>{let e=Math.round(new Date("2020-07-23 03:30:00").getTime()/1e3),t=Math.round((new Date).getTime()/1e3)-e,i=new Array(0,0,0,0,0);var r=function(e){return e>9?e:"0"+e};t>=31536e3&&(i[0]=parseInt(t/31536e3),t%=31536e3),t>=86400&&(i[1]=parseInt(t/86400),t%=86400),t>=3600&&(i[2]=r(parseInt(t/3600)),t%=3600),t>=60&&(i[3]=r(parseInt(t/60)),t%=60),t>0&&(i[4]=r(t)),Number(i[2])<22&&Number(i[2])>7?currentTimeHtml="<img class='boardsign' src='https://img.shields.io/badge/h--t--m-恋爱中-6adea8?style=social&logo=cakephp' title='勿扰~'><div id='runtime'>"+i[0]+" YEAR "+i[1]+" DAYS "+i[2]+" : "+i[3]+" : "+i[4]+"</div>":currentTimeHtml="<img class='boardsign' src='https://img.shields.io/badge/h--t--m-睡觉了-6adea8?style=social&logo=coffeescript' title='保证充足的睡眠才能更好地爱她！'><div id='runtime'>"+i[0]+" YEAR "+i[1]+" DAYS "+i[2]+" : "+i[3]+" : "+i[4]+"</div>",document.getElementById("workboard").innerHTML=currentTimeHtml}),1e3);