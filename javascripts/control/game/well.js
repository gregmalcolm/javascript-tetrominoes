define(function() { 
  var well = {
    init : function(view) {
      well.view = view;
      view.Game.WellView.init();
    }
  };

  return { 
    init : well.init 
  };
});


