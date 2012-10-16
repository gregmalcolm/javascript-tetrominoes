define(function() {
  var gameView = {
    canvas : $('canvas#mainGame')[0],
   
    clear: function(context) {
      self.context.fillStyle  = 'black'; 
      self.context.fillRect  (0, 0, self.canvas.width, self.canvas.height);
    },

    render : function() {
      self.context = self.canvas.getContext('2d');
      self.clear();
    }
  }

  var self = gameView;

  return { 
    render : self.render
  };
});

