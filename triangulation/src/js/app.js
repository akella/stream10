import 'pixi.js';
import Delaunator from 'delaunator';

var app = new PIXI.Application(800, 600, { transparent: true });
document.body.appendChild(app.view);
app.stage.interactive = true;

var container = new PIXI.Container();

app.stage.addChild(container);

var imageSprite = PIXI.Texture.fromImage('img/2.jpg');

// var texture = new PIXI.Sprite(imageSprite);
// texture.width = 800;
// texture.height = 600;
// app.stage.addChild(texture);
var graphics = new PIXI.Graphics();
var tri = new PIXI.Graphics();
graphics.beginFill(0xFF6600, 1);

var vertice = [[0,0],[800,0],[800,600],[0,600]];
for (var i = 10; i >= 0; i--) {
  vertice.push(
    [800*Math.random(),600*Math.random()]
  );
}
vertice.forEach( function(el, index) {
  graphics.drawRect(el[0], el[1], 20, 20);
});
console.log(vertice);

var delaunay = new Delaunator(vertice);
console.log(delaunay.triangles);
var mesh = delaunay.triangles;




for (var i = 0; i <mesh.length; i = i+3) {
  tri.beginFill(0x007700, 0.5);
  tri.lineStyle(1);
  tri.moveTo(vertice[mesh[i]][0],vertice[mesh[i]][1]);
  tri.lineTo(vertice[mesh[i+1]][0],vertice[mesh[i+1]][1]);
  tri.lineTo(vertice[mesh[i+2]][0],vertice[mesh[i+2]][1]);
  tri.endFill();
  tri.closePath();
}




app.stage.addChild(graphics);
app.stage.addChild(tri);


app.ticker.add(function() {
  var mousePosition = app.renderer.plugins.interaction.mouse.global;
  
  // count += 0.01;
});
