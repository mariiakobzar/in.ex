;
(function ($) {
  $(document).ready(function () {

    var container = $("#shop-container");
    var arrivalsContainer = $("#arrivals");

    $.ajax({
      url: "products.json"
    }).done(function (data) {
      console.log(data);

      var source = $("#container").html(),
        template = Handlebars.compile(source),
        html = template(data);
        container.append(html);
        arrivalsContainer.append(html);
    })

    Handlebars.registerHelper('if_eq', function (a, b, opts) {
      if (a == b) {
        return opts.fn(this);
      } else {
        return opts.inverse(this);
      }
    });

    Handlebars.registerHelper('eachForIndex', function(context, options) {
      var ret = "";
      var counter = 0;
      for(var i=0, j=context.length; i<j; i++) {
        if(context[i].tag == "New Arrival"){
          ret = ret + options.fn(context[i]);
          counter++;
          if(counter == 4)
          break;
        }
      }
      return ret;
    });
  })
})(jQuery);