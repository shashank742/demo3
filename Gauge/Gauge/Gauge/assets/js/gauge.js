$.fn.gauge = function(options ) {

    // This is the easiest way to have default options.

    var $body=document.querySelector('body');
    var $element=document.querySelectorAll('.circle');
    $body.classList.add('load')
    console.log(options)
    var settings = $.extend({
        // These are the defaults.
        limit: 120,
        duration:2000

    }, options);
   // alert('lll')
   /// console.log($(event.target).attr('id'))
    window.onload=function () {
       // alert();
    }
    setTimeout(function () {
        $body.classList.remove('load')



    },2000)

    demo=function () {
        for(i=0;i<$element.length;i++){
            radius=$element[i].getAttribute('r')
            var cf = 2 * Math.PI * radius;
            var semi_cf = cf / 2;
            stockWidth=$element[i].getAttribute('stroke-width')
          //  console.log($element[i].getAttribute('r'))
          // (settings.limit/100);

            var percent=(settings.limit/1.5);
            strokeDasharray= ((percent * semi_cf) / 100)+','+cf;
            $element[i].setAttribute('stroke-dasharray',strokeDasharray)
           // $element[0].setAttribute('stroke-dasharray',"412,943")
           // console.log($element[i].getAttribute('stroke-width'))

        }
        meter_needle.style.transform = "rotate(" +
            ((450 - (settings.limit))) + "deg)";
        //console.log($element[0].getAttribute('r'))
        console.log( $element[0].getAttribute('stroke-dasharray'))
    }
    demo()
    console.log(JSON.stringify(settings))



};