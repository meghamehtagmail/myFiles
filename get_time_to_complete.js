/** Plugin: getTimeToComplete **/
s.getTimeToComplete = new Function("v", "cn", "e",
"var s=this,d=new Date,x=d,k;
if(!s.ttcr){
  e=e?e:0;
  if(v=='start'||v=='stop')
  s.ttcr=1;
  x.setTime(x.getTime()+e* 86400000);

  if(v=='start'){
    s.c_w(cn,d.getTime(),e?x:0);
    return '';
  }
  if(v=='stop'){
    k=s.c_r(cn);
    if(!s.c_w(cn,'',d)||!k)
    return '';
    v=(d.getTime()-k)/1000;
    var td=86400,th=3600,tm=60,r=5,u,un;
    if(v>td){
      u=td;
      un='days';
    }else if(v>th){
      u=th;un='hours';
    }else if(v>tm){
      r=2;
      u=tm;
      un='minutes';
    }else{
      r=.2;
      u=1;
      un='seconds';
    }
    vw=v;
    v=v*r/u;
    return (Math.round(v)/r)+' '+un+','+vw;
  }
}
return '';"
);


/* Time to complete plugin code start */
if(pageDataLayer.content != undefined && pageDataLayer.content.kpi != undefined && pageDataLayer.content.kpi.activity != undefined){
  var formActivity = pageDataLayer.content.kpi.activity;
  if(formActivity == 'start'){
    if(s.ttcr != undefined){s.ttcr = undefined;}
    var ttcf = "start";
    ttcf = s.getTimeToComplete(ttcf, "TTC", 0);
  }
  if(formActivity == 'complete'){
    if(s.ttcr != undefined){s.ttcr = undefined;}
    ttcf = "stop";
    ttcf = s.getTimeToComplete(ttcf, "TTC", 0);
      if (ttcf.indexOf(",") > -1){
        var buck = ttcf.split(",")[0];
        var sec = ttcf.split(",")[1];
        s.prop66 = buck;
        s.events=s.apl(s.events,'event74='+sec,',',1);
    }
  }
}
/* Time to complete plugin code end */
