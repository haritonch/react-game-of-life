(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(3),l=n(4),r=n(9),s=n(8),o=n(0),u=n.n(o),i=n(5),c=n.n(i),d=(n(15),n(18)),f=function(e){return u.a.createElement("div",{className:"center"},u.a.createElement(d.a,null,u.a.createElement("button",{className:"btn btn-default btn-secondary",onClick:e.playButton,styles:"width: 20px;"},e.paused?"Play":"Pause"),u.a.createElement("button",{className:"btn btn-default btn-secondary",onClick:e.nextButton},"Step"),u.a.createElement("button",{className:"btn btn-default btn-secondary",onClick:e.clearButton},"Clear"),u.a.createElement("button",{className:"btn btn-default btn-secondary",onClick:e.seedButton},"Seed")))},p=function(e){return u.a.createElement("div",{className:e.cellClass,id:e.id,onClick:function(){e.selectCell(e.row,e.col)}})},v=function(e){for(var t=14*e.cols,n=[],a=0;a<e.rows;a++)for(var l=0;l<e.cols;l++){var r=a+"_"+l,s=e.gridFull[a][l]?"cell alive":"cell dead";n.push(u.a.createElement(p,{cellClass:s,key:r,cellId:r,row:a,col:l,selectCell:e.selectCell}))}return u.a.createElement("div",{className:"grid",style:{width:t}},n)},m=function(e){return JSON.parse(JSON.stringify(e))},h=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).selectCell=function(t,n){var a=m(e.state.gridFull);a[t][n]=!a[t][n],e.setState({gridFull:a})},e.clear=function(){for(var t=m(e.state.gridFull),n=0;n<e.rows;n++)for(var a=0;a<e.cols;a++)t[n][a]=!1;e.setState({generation:0,gridFull:t}),e.pauseButton()},e.seed=function(){for(var t=m(e.state.gridFull),n=0;n<e.rows;n++)for(var a=0;a<e.cols;a++)t[n][a]=!1,1===Math.floor(4*Math.random())&&(t[n][a]=!0);e.setState({generation:0,gridFull:t}),e.pauseButton()},e.playButton=function(){e.intervalId?(clearInterval(e.intervalId),e.intervalId=null,e.setState({paused:!0})):(e.intervalId=setInterval(e.play,e.speed),e.setState({paused:!1}))},e.pauseButton=function(){clearInterval(e.intervalId),e.intervalId=null,e.paused=!0},e.faster=function(){e.pauseButton(),e.speed-=50,e.playButton()},e.slower=function(){e.pauseButton(),e.speed+=50,e.playButton()},e.inbounds=function(t,n){return t>0&&t<e.rows&&n>0&&n<e.cols},e.isAlive=function(t,n){return e.state.gridFull[t][n]},e.aliveNeighbors=function(t,n){for(var a=0,l=-1;l<2;l++)for(var r=-1;r<2;r++){var s=t+l,o=n+r;s===t&&o===n||e.inbounds(s,o)&&e.isAlive(s,o)&&a++}return a},e.play=function(){for(var t=m(e.state.gridFull),n=0;n<e.rows;n++)for(var a=0;a<e.cols;a++){var l=e.aliveNeighbors(n,a);t[n][a]=!1,e.isAlive(n,a)?2<=l&&l<=3&&(t[n][a]=!0):3===l&&(t[n][a]=!0)}e.setState({generation:e.state.generation+1,gridFull:t})},e.speed=1e3,e.rows=30,e.cols=50,e.state={generation:0,gridFull:Array(e.rows).fill().map((function(){return Array(e.cols).fill(!1)})),paused:!1},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.seed(),this.playButton()}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("h1",null,"Conway's Game of Life"),u.a.createElement(f,{playButton:this.playButton,pauseButton:this.pauseButton,clearButton:this.clear,seedButton:this.seed,nextButton:this.play,paused:this.state.paused}),u.a.createElement(v,{gridFull:this.state.gridFull,rows:this.rows,cols:this.cols,selectCell:this.selectCell}),u.a.createElement("h2",null,"Generations: ",this.state.generation))}}]),n}(u.a.Component);c.a.render(u.a.createElement(h,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.a5d908d5.chunk.js.map