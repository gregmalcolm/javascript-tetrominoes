var App = {};
App.View = App.View || {};
App.View.Game = {
  canvas: function () {
    return $('canvas#mainGame')[0];
  },

  context: function () {
    return this.canvas().getContext('2d');
  },

  clear: function(context) {
    context.fillStyle  = 'black'; 
    context.fillRect  (0, 0, this.canvas().width, this.canvas().height);
  },

  drawWell: function(context) {
    context.beginPath();

  },
  
  gameInit: function() {
    var context = this.context();

    this.clear(context);
    //App.Well.draw(context);

    //context.beginPath();
      
    //context.rect(20, 20, 20, 20);
    //context.fillStyle = 'red';
    //context.fill();

    //context.lineWidth = 3;
    //context.strokeStyle = 'black';
    //context.stroke();
  }
};
