$.fn.gauge = function(options ) {

    // This is the easiest way to have default options.

    var $body=document.querySelector('body');

    // console.log()
    // this.
  //this.
    console.log(this.attr('id'))
    //console.log(document.querySelector(this).getAttribute('id'))



    var $element=document.querySelectorAll('.circle');
    $body.classList.add('load')
    console.log(options)
    var settings = $.extend({
        // These are the defaults.
        limit: 120,
        duration:2000,
        colorRange:['#8bc53f','#86ae3f','#8bc53f']

    }, options);
   // alert('lll')
   /// console.log($(event.target).attr('id'))
    window.onload=function () {
       // alert();
    }
    setTimeout(function () {
        $body.classList.remove('load')



    },2000)

    fillGauge=function () {
        for(i=0;i<$element.length;i++){
            radius=$element[i].getAttribute('r')
            var cf = 2 * Math.PI * radius;
            var semi_cf = cf / 2;
            stockWidth=$element[i].getAttribute('stroke-width');
            var percent=(settings.limit/1.5);
            strokeDasharray= ((percent * semi_cf) / 100)+','+cf;
            $element[i].setAttribute('stroke-dasharray',strokeDasharray);
        }
        if(settings.limit==150){
            for(i=0;i<document.querySelectorAll('.range').length;i++){
                document.querySelectorAll('.range')[i].setAttribute('stroke',settings.colorRange[i]);
            }
            document.querySelectorAll('.lock')[0].classList.add('unlock');

        }
        meter_needle.style.transform = "rotate(" +
            (450 - ((percent * 180) / 100)) + "deg)";
    }
    fillGauge();
};