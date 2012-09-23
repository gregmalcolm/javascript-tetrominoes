define(['javascripts/control.js', 
        'javascripts/view.js'
        ], function(Control, View) { 
  var app = {
    init : function() {
      Control.Game.Well.init(View);
    }
  };

  return { 
    Control : Control,
    View : View,
    init : app.init 
  };
});
