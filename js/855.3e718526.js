"use strict";(self["webpackChunkideao"]=self["webpackChunkideao"]||[]).push([[855],{5102:(e,l,a)=>{a.r(l),a.d(l,{default:()=>Ue});a(71);var i=a(3673),t=a(2323);const o=e=>((0,i.dD)("data-v-372bfc22"),e=e(),(0,i.Cn)(),e),s={class:"wrapper"},u={class:"menu"},n=o((()=>(0,i._)("img",{class:"icon",src:"img/menu_50X50.svg"},null,-1))),c={class:"menu-wrapper"},v={class:"menu-item"},r=o((()=>(0,i._)("img",{src:"img/camera_45X45.svg"},null,-1))),d={class:"menu-item"},g=o((()=>(0,i._)("img",{src:"img/resolution_45X45.svg"},null,-1))),m={class:"menu-item"},p=o((()=>(0,i._)("img",{src:"img/zoom_45X45.svg"},null,-1))),h={class:"zoomInOut"},w={class:"text"},_={class:"menu-item"},f=o((()=>(0,i._)("img",{src:"img/rotation_45X45.svg"},null,-1))),b={class:"menu-item-right",style:{"justify-content":"start"}},y={class:"menu-item"},k=o((()=>(0,i._)("img",{src:"img/mirror_45X45.svg"},null,-1))),S={class:"menu-item"},V=o((()=>(0,i._)("img",{src:"img/flip_45X45.svg"},null,-1))),z={class:"menu-item"},C=o((()=>(0,i._)("img",{src:"img/freeze_45X45.svg"},null,-1))),x={class:"menu-item"},H=o((()=>(0,i._)("img",{src:"img/reset_45X45.svg"},null,-1))),X={class:"setting"},D=o((()=>(0,i._)("img",{class:"icon",src:"img/setting_50X50.svg"},null,-1))),I={class:"menu-wrapper"},O={class:"menu-item"},R=o((()=>(0,i._)("img",{src:"img/G_45X45.svg"},null,-1))),M={class:"menu-item-right"},L={class:"menu-item"},P=o((()=>(0,i._)("img",{src:"img/cloud-file-location_45X45.svg"},null,-1))),A={class:"menu-item"},T=o((()=>(0,i._)("img",{src:"img/microphone_45X45.svg"},null,-1))),F={class:"menu-item-right"},q={class:"menu-item"},U=o((()=>(0,i._)("img",{src:"img/video-resolution_45X45.svg"},null,-1))),W={class:"menu-item"},E=o((()=>(0,i._)("img",{src:"img/timer_45X45.svg"},null,-1))),j={class:"menu-item"},Z=o((()=>(0,i._)("img",{src:"img/refresh-rate_45X45.svg"},null,-1))),Y=o((()=>(0,i._)("div",{class:"menu-item div-fti"},[(0,i._)("img",{src:"img/fti-logo_H48.svg",class:"fti-logo"}),(0,i._)("span",null,"© Fun Technology Innovation Inc. All rights reserved.")],-1))),B={class:"logo"},Q=o((()=>(0,i._)("img",{class:"icon",src:"img/ideaocam_H35.svg"},null,-1))),G={key:0,class:"icon",src:"img/full-screen_50X50.svg"},N={key:1,class:"icon",src:"img/exit-full-screen_50X50.svg"},J=o((()=>(0,i._)("div",{class:"snapshot-record"},[(0,i._)("div",{class:"icon-wrapper"},[(0,i._)("img",{class:"icon",src:"img/snapshot_40X40.svg"})]),(0,i._)("div",{class:"text"},"Snapshot & Record")],-1))),K=o((()=>(0,i._)("div",{class:"icon-wrapper"},[(0,i._)("img",{class:"icon",src:"img/stop-motion_40X40.svg"})],-1))),$=o((()=>(0,i._)("div",{class:"text"},"Stop Motion",-1))),ee=[K,$],le={class:"countdown"},ae={class:"camera"},ie=o((()=>(0,i._)("div",null,null,-1))),te=o((()=>(0,i._)("div",null,null,-1))),oe={class:"camera-video-mic"},se={class:"camera"},ue={key:0,class:"video"},ne={key:1,class:"video-mode"},ce={class:"rec"},ve=o((()=>(0,i._)("div",{class:"dot"},null,-1))),re=o((()=>(0,i._)("div",{class:"text"},"REC",-1))),de={class:"time"},ge={key:0,class:"line"},me={key:1,class:"triangle"},pe=o((()=>(0,i._)("div",{class:"square"},null,-1))),he=[pe],we={class:"mic"},_e=["src"],fe=["src"],be=(0,i.Uk)(" Video stream not available. "),ye={ref:"canvas",style:{display:"none",position:"absolute",left:"0",top:"0",opacity:"0.5"}};function ke(e,l,a,o,K,$){const pe=(0,i.up)("q-resize-observer"),ke=(0,i.up)("combobox2"),Se=(0,i.up)("q-slider"),Ve=(0,i.up)("q-menu"),ze=(0,i.up)("q-toggle"),Ce=(0,i.up)("q-radio"),xe=(0,i.up)("router-link"),He=(0,i.up)("q-circular-progress");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i.Wm)(pe,{onResize:e.onResize},null,8,["onResize"]),(0,i._)("div",u,[n,(0,i.Wm)(Ve,{anchor:"bottom left",self:"top left",offset:[0,15],style:{"border-radius":"15px"}},{default:(0,i.w5)((()=>[(0,i._)("div",c,[(0,i._)("div",v,[r,(0,i._)("div",null,[(0,i.Wm)(ke,{options:e.cameraDeviceList,"option-label":"label","option-value":"value",modelValue:e.cameraDevice,"onUpdate:modelValue":l[0]||(l[0]=l=>e.cameraDevice=l),style:{width:"100%",height:"30px"}},null,8,["options","modelValue"])])]),(0,i._)("div",d,[g,(0,i._)("div",null,[(0,i.Wm)(ke,{options:e.resolutionList,"option-label":"label","option-value":"value",modelValue:e.resolution,"onUpdate:modelValue":l[1]||(l[1]=l=>e.resolution=l),style:{width:"100%",height:"30px"}},null,8,["options","modelValue"])])]),(0,i._)("div",m,[p,(0,i._)("div",h,[(0,i._)("div",w,(0,t.zw)(1==(e.zoomInOutSlider/10).toString().length?(e.zoomInOutSlider/10).toString()+".0":(e.zoomInOutSlider/10).toString())+" x ",1),(0,i._)("img",{class:"minus",src:"img/minus_20X20.svg",onClick:l[2]||(l[2]=(...l)=>e.zoomOut&&e.zoomOut(...l))}),(0,i.Wm)(Se,{modelValue:e.zoomInOutSlider,"onUpdate:modelValue":l[3]||(l[3]=l=>e.zoomInOutSlider=l),min:10,max:60,step:1,dark:"",color:"ideao",class:"menu-slider"},null,8,["modelValue"]),(0,i._)("img",{class:"plus",src:"img/plus_20X20.svg",onClick:l[4]||(l[4]=(...l)=>e.zoomIn&&e.zoomIn(...l))})])]),(0,i._)("div",_,[f,(0,i._)("div",b,[(0,i.Wm)(ke,{options:e.angleList,"option-label":"label","option-value":"value",modelValue:e.angle,"onUpdate:modelValue":l[5]||(l[5]=l=>e.angle=l),style:{width:"150px",height:"30px"}},null,8,["options","modelValue"]),(0,i._)("img",{src:"img/CW_25X25.svg",class:"cw",onClick:l[6]||(l[6]=(...l)=>e.nextRotate&&e.nextRotate(...l))}),(0,i._)("img",{src:"img/CCW_25X25.svg",class:"ccw",onClick:l[7]||(l[7]=(...l)=>e.previousRotate&&e.previousRotate(...l))})])]),(0,i._)("div",y,[k,(0,i._)("div",{class:"button",onClick:l[8]||(l[8]=l=>e.isMirror=!e.isMirror)},"Mirror")]),(0,i._)("div",S,[V,(0,i._)("div",{class:"button",onClick:l[9]||(l[9]=l=>e.isFlip=!e.isFlip)},"Flip")]),(0,i._)("div",z,[C,(0,i._)("div",{class:"button",onClick:l[10]||(l[10]=(...l)=>e.toggleFreeze&&e.toggleFreeze(...l))},"Freeze")]),(0,i._)("div",x,[H,(0,i._)("div",{class:"button",onClick:l[11]||(l[11]=(...l)=>e.reset&&e.reset(...l))},"Reset")])])])),_:1})]),(0,i._)("div",X,[D,(0,i.Wm)(Ve,{anchor:"bottom left",self:"top left",offset:[0,15],style:{"border-radius":"15px"}},{default:(0,i.w5)((()=>[(0,i._)("div",I,[(0,i._)("div",O,[R,(0,i._)("div",M,[(0,i._)("div",null,(0,t.zw)(e.username),1),e.googleOAuth2.isAuthorized.value?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",{key:0,class:"button",onClick:l[12]||(l[12]=(...l)=>e.googleSignIn&&e.googleSignIn(...l))}," Sign in ")),e.googleOAuth2.isAuthorized.value?((0,i.wg)(),(0,i.iD)("div",{key:1,class:"button",onClick:l[13]||(l[13]=(...l)=>e.googleSignOut&&e.googleSignOut(...l))}," Sign out ")):(0,i.kq)("",!0)])]),(0,i._)("div",L,[P,(0,i._)("div",null,[(0,i.Wm)(ke,{options:e.fileLocationList,"option-label":"label","option-value":"value",modelValue:e.fileLocation,"onUpdate:modelValue":l[14]||(l[14]=l=>e.fileLocation=l),style:{width:"100%",height:"30px"}},null,8,["options","modelValue"])])]),(0,i._)("div",A,[T,(0,i._)("div",F,[(0,i.Wm)(ze,{modelValue:e.isMic,"onUpdate:modelValue":l[15]||(l[15]=l=>e.isMic=l),class:"toggle-mic"},null,8,["modelValue"]),(0,i.Wm)(ke,{options:e.microDeviceList,"option-label":"label","option-value":"value",modelValue:e.microDevice,"onUpdate:modelValue":l[16]||(l[16]=l=>e.microDevice=l),style:{width:"300px",height:"30px"}},null,8,["options","modelValue"])])]),(0,i._)("div",q,[U,(0,i._)("div",null,[(0,i.Wm)(ke,{options:e.videoResolutionList,"option-label":"label","option-value":"value",modelValue:e.videoResolution,"onUpdate:modelValue":l[17]||(l[17]=l=>e.videoResolution=l),style:{width:"100%",height:"30px"}},null,8,["options","modelValue"])])]),(0,i._)("div",W,[E,(0,i._)("div",null,[(0,i.Wm)(ke,{options:e.cameraCountdownSettingList,"option-label":"label","option-value":"value",modelValue:e.cameraCountdownSetting,"onUpdate:modelValue":l[18]||(l[18]=l=>e.cameraCountdownSetting=l),style:{width:"100%",height:"30px"}},null,8,["options","modelValue"])])]),(0,i._)("div",j,[Z,(0,i._)("div",null,[(0,i.Wm)(Ce,{modelValue:e.refreshRate,"onUpdate:modelValue":l[19]||(l[19]=l=>e.refreshRate=l),val:50,label:"50 Hz",style:{"margin-right":"25px"},color:"orange"},null,8,["modelValue"]),(0,i.Wm)(Ce,{modelValue:e.refreshRate,"onUpdate:modelValue":l[20]||(l[20]=l=>e.refreshRate=l),val:60,label:"60 Hz",color:"orange"},null,8,["modelValue"])])]),Y])])),_:1})]),(0,i._)("div",B,[(0,i.Wm)(xe,{to:"/info"},{default:(0,i.w5)((()=>[Q])),_:1})]),(0,i._)("div",{class:"full-screen",onClick:l[21]||(l[21]=l=>e.isFullScreen=!e.isFullScreen)},[e.isFullScreen?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("img",G)),e.isFullScreen?((0,i.wg)(),(0,i.iD)("img",N)):(0,i.kq)("",!0)]),J,(0,i._)("div",{class:"stop-motion",onClick:l[22]||(l[22]=(...l)=>e.stopMotion&&e.stopMotion(...l))},ee),(0,i._)("div",le,[(0,i._)("div",ae,[e.cameraCountdown>0?((0,i.wg)(),(0,i.j4)(He,{key:0,"show-value":"",value:e.cameraCountdownProgress,"font-size":"30px",size:"60px",thickness:.15,color:"white"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,t.zw)(e.cameraCountdown),1)])),_:1},8,["value","thickness"])):(0,i.kq)("",!0)]),ie,te]),(0,i._)("div",oe,[(0,i._)("div",se,[(0,i._)("img",{class:"icon",src:"img/camera_round_80X80.svg",onClick:l[23]||(l[23]=(...l)=>e.useCamera&&e.useCamera(...l))})]),e.isVideoMode?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",ue,[(0,i._)("img",{class:"icon",src:"img/video_round_80X80.svg",onClick:l[24]||(l[24]=(...l)=>e.useVideoStart&&e.useVideoStart(...l))})])),e.isVideoMode?((0,i.wg)(),(0,i.iD)("div",ne,[(0,i._)("div",ce,[ve,re,(0,i._)("div",de,(0,t.zw)(e.videoMinutes)+":"+(0,t.zw)(e.videoSeconds),1)]),(0,i._)("div",{class:"play-pause",onClick:l[25]||(l[25]=(...l)=>e.useVideoPause&&e.useVideoPause(...l))},[e.isPause?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",ge)),e.isPause?((0,i.wg)(),(0,i.iD)("div",me)):(0,i.kq)("",!0)]),(0,i._)("div",{class:"stop",onClick:l[26]||(l[26]=(...l)=>e.useVideoStop&&e.useVideoStop(...l))},he)])):(0,i.kq)("",!0),(0,i._)("div",we,[e.isMic?((0,i.wg)(),(0,i.iD)("img",{key:0,class:"icon",src:"img/microphone_round_80X80.svg",onClick:l[27]||(l[27]=(...l)=>e.useMic&&e.useMic(...l))})):(0,i.kq)("",!0),e.isMic?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("img",{key:1,class:"icon",src:"img/microphone-off_round_80X80.svg",onClick:l[28]||(l[28]=(...l)=>e.useMic&&e.useMic(...l))}))])]),(0,i._)("div",{class:"thumbnail",onClick:l[29]||(l[29]=(...l)=>e.goViewer&&e.goViewer(...l))},[""!=e.thumbnail?((0,i.wg)(),(0,i.iD)("img",{key:0,src:e.thumbnail},null,8,_e)):(0,i.kq)("",!0),""!==e.outputVideoURL?((0,i.wg)(),(0,i.iD)("video",{key:1,src:e.outputVideoURL},null,8,fe)):(0,i.kq)("",!0)]),(0,i._)("div",{ref:"cameraWapper",class:(0,t.C_)({"camera-screen":!0,"full-screen-mode":e.isFullScreen})},[(0,i._)("video",{ref:"localVideo",autoplay:"",playsinline:"",muted:"",style:(0,t.j5)({transform:"scale("+(1==e.angle.value||3==e.angle.value?(e.zoomInOutSlider/10*.75).toString():(e.zoomInOutSlider/10*1).toString())+") rotate("+90*e.angle.value+"deg)"+(e.isMirror?" scaleX(-1)":"")+(e.isFlip?" scaleY(-1)":"")})},[(0,i.Wm)(pe,{onResize:e.onResize},null,8,["onResize"]),be],4)],2),(0,i._)("canvas",ye,null,512)])}a(7965),a(6016),a(979),a(6105),a(2396);var Se=a(1959),Ve=a(9582),ze=a(3617),Ce=a(8825),xe=a(958),He=a(3659),Xe=a(4898);const De=(0,i.aZ)({name:"PageIndex",components:{combobox2:Xe.Z},setup(){const e=(0,Ve.tv)(),l=(0,ze.oR)(),a=(0,Ce.Z)(),{guidHelper:t}=(0,xe.Z)(),o=(0,Se.iH)(!0),s=(0,Se.iH)(),u=(0,Se.iH)(),n=(0,Se.iH)(),c=(0,Se.iH)(""),v=(0,Se.iH)(!1),r=(0,Se.iH)(!1),d=(0,Se.iH)(!1),g=(0,Se.iH)("00"),m=(0,Se.iH)("00"),p=(0,Se.iH)(!1),h=(0,Se.iH)(!1),w=(0,Se.iH)(!0),_=(0,Se.iH)({label:"ideaocam files on google drive",value:"ideaocam files"}),f=(0,Se.iH)([{label:"ideaocam files on google drive",value:"ideaocam files"}]),b=(0,Se.iH)({label:"480 P",value:0}),y=(0,Se.iH)([{label:"480 P",value:0},{label:"720 P",value:1},{label:"1080 P",value:2}]),k=(0,Se.iH)({label:"Off",value:0}),S=(0,Se.iH)([{label:"Off",value:0},{label:"1s",value:1},{label:"2s",value:2},{label:"3s",value:3},{label:"4s",value:4},{label:"5s",value:5}]),V=(0,Se.iH)(0),z=(0,Se.iH)(0),C=(0,Se.iH)(""),x=(0,Se.iH)(),H=(0,Se.iH)([]),X=(0,Se.iH)(),D=(0,Se.iH)([]),I=(0,Se.iH)({label:"640 X 480",value:0}),O=(0,Se.iH)([{label:"640 X 480",value:0},{label:"800 X 600",value:1},{label:"1024 X 768",value:2},{label:"1280 X 720",value:3},{label:"1600 X 1200",value:4},{label:"1920 X 1080",value:5},{label:"1920 X 1440",value:5},{label:"2048 X 1536",value:6},{label:"2592 X 1458",value:7},{label:"2592 X 1944",value:8},{label:"3264 X 2448",value:9},{label:"4192 X 3104",value:10}]),R=(0,Se.iH)({label:"0°",value:0}),M=(0,Se.iH)([{label:"0°",value:0},{label:"90°",value:1},{label:"180°",value:2},{label:"270°",value:3}]),L=(0,Se.iH)(10),P=(0,Se.iH)(!1),A=(0,Se.iH)(!1),T=(0,Se.iH)(50),F=(0,Se.iH)("Link your Google account"),q=(0,Se.iH)({width:"calc(100vw - 180px)",height:"calc((100vw - 180px) / 4 * 3)",left:"calc(50% - calc(100vw - 180px) / 2)"}),U=(0,Se.iH)();let W=null,E=null,j=[],Z=null;const Y=(0,Se.Fl)((()=>l.getters["extension/viewers"])),B=e=>l.dispatch("extension/setViewers",e),Q=(0,Se.Fl)((()=>l.getters["extension/googleDriveFolder"])),G=e=>l.dispatch("extension/setGoogleDriveFolder",e);(0,i.YP)(He.googleOAuth2.isAuthorized,(async e=>{if(e)if(He.googleOAuth2.isAuthorized.value){var l=He.googleOAuth2.currentUser.getBasicProfile();F.value=l.getEmail()}else F.value="Link your Google account";else F.value="Link your Google account"})),(0,i.YP)(_,(async e=>{e&&G(e)})),(0,i.YP)(X,(async e=>{e&&!o.value&&await K()})),(0,i.YP)(x,(async e=>{e&&!o.value&&await K()})),(0,i.YP)(I,(async e=>{e&&!o.value&&await K()})),(0,i.YP)(T,(async e=>{e&&!o.value&&await K()})),(0,i.YP)(v,(async e=>{o.value||(v.value?a.fullscreen.request():a.fullscreen.exit())})),(0,i.YP)((()=>a.fullscreen.isActive),(e=>{v.value=a.fullscreen.isActive})),(0,i.bv)((async()=>{if(G(_.value),He.googleOAuth2.isAuthorized.value){var e=He.googleOAuth2.currentUser.getBasicProfile();F.value=e.getEmail()}else F.value="Link your Google account";await N(),await J(),await K(),oe(),navigator.mediaDevices.ondevicechange=async()=>{console.log("change"),await N(),await J()},o.value=!1}));const N=async()=>{let e=await navigator.mediaDevices.enumerateDevices(),l=e.filter((e=>"videoinput"===e.kind));H.value=[];for(let a in l)H.value.push({label:l[a].label,value:l[a].deviceId});x.value=H.value[0]},J=async()=>{let e=await navigator.mediaDevices.enumerateDevices(),l=e.filter((e=>"audioinput"===e.kind));D.value=[];for(let a in l)D.value.push({label:l[a].label,value:l[a].deviceId});X.value=D.value[0]},K=async()=>{null!=W&&W.getTracks().forEach((function(e){e.stop()}));let e=h.value?parseInt(b.value.label.split(" ")[0])/3*4:I.value.label.split(" X ")[0],l=h.value?parseInt(b.value.label.split(" ")[0]):I.value.label.split(" X ")[1];try{W=await navigator.mediaDevices.getUserMedia({audio:{deviceId:X.value.value},video:{deviceId:x.value.value,width:{exact:e},height:{exact:l},frameRate:{ideal:T.value}}})}catch(a){I.value=O.value[0],W=await navigator.mediaDevices.getUserMedia({audio:{deviceId:X.value.value},video:{deviceId:x.value.value,width:{ideal:I.value.label.split(" X ")[0]},height:{ideal:I.value.label.split(" X ")[1]},frameRate:{ideal:T.value}}})}s.value.srcObject=W,s.value.onloadedmetadata=function(e){s.value.play()},E=new MediaRecorder(W),E.addEventListener("dataavailable",$),E.addEventListener("stop",ee)},$=e=>{j.push(e.data)},ee=async e=>{var l=new Blob(j,{type:"video/webm; codecs=vp9"});j=[],C.value=URL.createObjectURL(l),c.value="";let a=_e()+".webm",i=Object.assign([],Y.value);i.push({id:t(),type:"video",mimeType:"video/webm",filename:a,src:C.value,createTime:new Date}),B(i),se(a,"",l,"video/webm",null),await K()};let le=null,ae=10737418240,ie=0,te=window.requestFileSystem||window.webkitRequestFileSystem;const oe=()=>{navigator.webkitPersistentStorage.requestQuota(ae,(function(e){ie=e,te(window.PERSISTENT,e,(function(e){le=e}),(function(e){console.log(e)}))}),(function(e){console.log(e)}))},se=(e,l="",a,i,t=null)=>{let o;o=""!=l?l:le.root,o.getFile(e,{create:!0},(function(e){e.createWriter((function(e){e.seek(e.length),e.onwriteend=function(e){null!=t&&t()},e.onerror=function(e){console.log("Error occured: "+e.toString()+"\n File couldn't saved")};let l=new Blob([a],{type:i});e.write(l)}))}))},ue=async(e,l,a,i)=>{var t={name:e,mimeType:l,parents:[i]},o=gapi.auth.getToken().access_token,s=new FormData;s.append("metadata",new Blob([JSON.stringify(t)],{type:"application/json"})),s.append("file",a);let u=await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id",{method:"POST",headers:new Headers({Authorization:"Bearer "+o}),body:s});return u.json()},ne=async e=>{let l={role:"reader",type:"anyone"};var a=gapi.auth.getToken().access_token;await fetch("https://www.googleapis.com/drive/v3/files/"+e+"/permissions",{method:"POST",headers:new Headers({Authorization:"Bearer "+a,"Content-Type":"application/json"}),body:JSON.stringify(l)})},ce=async e=>{let l="trashed=false and 'me' in owners and mimeType='application/vnd.google-apps.folder'";l+=" and '"+e+"' in parents";let a=await He.googleOAuth2.instanceClient.drive.files.list({fields:"nextPageToken, files(id, name, mimeType, modifiedTime, parents)",q:l,orderBy:"name"});return a},ve=async()=>{u.value.width=W.getVideoTracks()[0].getSettings().width,u.value.height=W.getVideoTracks()[0].getSettings().height;let e=u.value.getContext("2d");e.mozImageSmoothingEnabled=!1,e.webkitImageSmoothingEnabled=!1,e.msImageSmoothingEnabled=!1,e.imageSmoothingEnabled=!1,e.imageSmoothingQuality="high",1===R.value.value||3===R.value.value?(u.value.width=W.getVideoTracks()[0].getSettings().height,u.value.height=W.getVideoTracks()[0].getSettings().width,e.translate(u.value.width/2,u.value.height/2),e.rotate(90*R.value.value*Math.PI/180),L.value>10&&e.scale(L.value/10,L.value/10),P.value&&e.scale(-1,1),A.value&&e.scale(1,-1),e.translate(-u.value.height/2,-u.value.width/2)):(e.translate(u.value.width/2,u.value.height/2),e.rotate(90*R.value.value*Math.PI/180),L.value>10&&e.scale(L.value/10,L.value/10),P.value&&e.scale(-1,1),A.value&&e.scale(1,-1),e.translate(-u.value.width/2,-u.value.height/2)),e.drawImage(s.value,0,0);let l=u.value.toDataURL("image/jpeg");c.value=l,C.value="";let a="",i="image/jpeg",o=_e()+".jpg";if(He.googleOAuth2.isAuthorized.value){const e=atob(l.split(",")[1]),t=[];for(let l=0;l<e.length;l++)t.push(e.charCodeAt(l));let s=new Blob([new Uint8Array(t)],{type:i}),u=await ce("root"),n=u.result.files.find((e=>e.name==Q.value.value)),c=await ue(o,i,s,n.id);await ne(c.id),a="https://drive.google.com/thumbnail?authuser=0&sz=w640&id="+c.id}else a=l;let n=Object.assign([],Y.value);n.push({id:t(),type:"image",mimeType:i,filename:o,src:a,createTime:new Date,isUpload:He.googleOAuth2.isAuthorized.value}),B(n)},re=async()=>{if(!h.value){if(p.value=!0,k.value.value>0){V.value=k.value.value,z.value=1;let e=setInterval((async()=>{V.value-=1,z.value=1/(k.value.value-1)*(k.value.value-V.value)*100,0==V.value&&(clearInterval(e),await K(),setTimeout((()=>{ve()}),100))}),1e3)}else await K(),setTimeout((()=>{ve()}),100);p.value=!1}},de=()=>{g.value="00",m.value="00",Z=setInterval((()=>{if(d.value)return;let e=parseInt(m.value)+1;if(m.value=("0"+e).slice(-2),0==e){let e=parseInt(g.value)+1;g.value=("0"+e).slice(-2)}}),1e3)},ge=async()=>{p.value||(h.value=!0,await K(),r.value=!0,d.value=!1,setTimeout((()=>{E.start(10),de()}),100))},me=async()=>{r.value=!1,E.stop(),clearInterval(Z),h.value=!1},pe=async()=>{d.value=!d.value,"recording"===E.state?E.pause():"paused"===E.state&&(videoStartTime=new Date,E.resume())},he=()=>{w.value=!w.value,W.getAudioTracks().forEach((e=>{e.enabled=w.value}))},we=()=>{W.getTracks().forEach((function(e){e.stop()})),W=null,e.push({path:"/viewer"})},_e=()=>{let e=new Date,l=e.getFullYear(),a=("00"+(e.getMonth()+1)).slice(-2),i=("00"+e.getDate()).slice(-2),t=("00"+e.getHours()).slice(-2),o=("00"+e.getMinutes()).slice(-2),s=("00"+e.getSeconds()).slice(-2),u=("00"+e.getMilliseconds()).slice(-3),n=l+"-"+a+"-"+i+"_"+t+"-"+o+"-"+s+"-"+u;return n},fe=()=>{let e=(0==R.value.value?3:R.value.value-1)%M.value.length;R.value=M.value.find((l=>l.value==e))},be=()=>{let e=(R.value.value+1)%M.value.length;R.value=M.value.find((l=>l.value==e))},ye=()=>{60!=L.value&&(L.value=L.value+1)},ke=()=>{10!=L.value&&(L.value=L.value-1)},De=()=>{s.value.paused?s.value.play():s.value.pause()},Ie=()=>{L.value=10,R.value=M.value[0],P.value=!1,A.value=!1,s.value.play()},Oe=async()=>{He.googleOAuth2.handleAuthClick()},Re=async()=>{await He.googleOAuth2.handleDisconnectClick()},Me=e=>{e.width<1024||(e.width-180>=(window.innerHeight-100)/3*4?(q.value.width="calc((100vh - 100px) / 3 * 4)",q.value.height="calc(100vh - 100px)",q.value.left="calc(50% - calc((100vh - 100px) / 3 * 4) / 2)"):(q.value.width="calc(100vw - 180px)",q.value.height="calc((100vw - 180px) / 4 * 3)",q.value.left="calc(50% - calc(100vw - 180px) / 2)"))},Le=()=>{e.push({path:"/stopMotion"})};return{combobox2:Xe.Z,viewers:Y,localVideo:s,canvas:u,outputVideo:n,thumbnail:c,isFullScreen:v,isVideoMode:r,isPause:d,videoMinutes:g,videoSeconds:m,isMic:w,fileLocation:_,fileLocationList:f,videoResolution:b,videoResolutionList:y,cameraCountdownSetting:k,cameraCountdownSettingList:S,cameraCountdown:V,cameraCountdownProgress:z,outputVideoURL:C,cameraDevice:x,cameraDeviceList:H,microDevice:X,microDeviceList:D,resolution:I,resolutionList:O,angle:R,angleList:M,zoomInOutSlider:L,isMirror:P,isFlip:A,refreshRate:T,username:F,googleOAuth2:He.googleOAuth2,useCamera:re,useVideoStart:ge,useVideoStop:me,useVideoPause:pe,useMic:he,cameraScreenStyle:q,cameraWapper:U,goViewer:we,previousRotate:fe,nextRotate:be,zoomIn:ye,zoomOut:ke,toggleFreeze:De,reset:Ie,googleSignIn:Oe,googleSignOut:Re,onResize:Me,stopMotion:Le}}});var Ie=a(4260),Oe=a(5151),Re=a(6335),Me=a(5153),Le=a(4620),Pe=a(7991),Ae=a(6122),Te=a(7518),Fe=a.n(Te);const qe=(0,Ie.Z)(De,[["render",ke],["__scopeId","data-v-372bfc22"]]),Ue=qe;Fe()(De,"components",{QResizeObserver:Oe.Z,QMenu:Re.Z,QSlider:Me.Z,QToggle:Le.Z,QRadio:Pe.Z,QCircularProgress:Ae.Z})}}]);