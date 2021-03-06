/* START: Jssor slider https://www.jssor.com/*/
/* Slider with thumbnails */



jssor_1_slider_init = function() {

var jssor_1_SlideshowTransitions = [
    {$Duration:800,x:1,$Easing:{$Left:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$Brother:{$Duration:800,x:-1,$Easing:{$Left:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2}}
];

var jssor_1_options = {
    $AutoPlay: 1,
    $SlideshowOptions: {
    $Class: $JssorSlideshowRunner$,
    $Transitions: jssor_1_SlideshowTransitions,
    $TransitionsOrder: 1
    },
    $ArrowNavigatorOptions: {
    $Class: $JssorArrowNavigator$
    },
    $BulletNavigatorOptions: {
    $Class: $JssorBulletNavigator$
    },
    $ThumbnailNavigatorOptions: {
    $Class: $JssorThumbnailNavigator$,
    $SpacingX: 5,
    $SpacingY: 5
    }
};

var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

/*#region responsive code begin*/

var MAX_WIDTH = 1200;

function ScaleSlider() {
    var containerElement = jssor_1_slider.$Elmt.parentNode;
    var containerWidth = containerElement.clientWidth;

    if (containerWidth) {

        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

        jssor_1_slider.$ScaleWidth(expectedWidth);
    }
    else {
        window.setTimeout(ScaleSlider, 30);
    }
}

ScaleSlider();

$Jssor$.$AddEvent(window, "load", ScaleSlider);
$Jssor$.$AddEvent(window, "resize", ScaleSlider);
$Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
/*#endregion responsive code end*/
};

    
/* END: Jssor slider */

/* START: Jssor slider https://www.jssor.com/*/
/* Slider with NO thumbnails */
jssor_2_slider_init = function() {

    var jssor_2_SlideshowTransitions = [
        {$Duration:800,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
        {$Duration:800,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
    ];

    var jssor_2_options = {
      $AutoPlay: 1,
      $SlideshowOptions: {
        $Class: $JssorSlideshowRunner$,
        $Transitions: jssor_2_SlideshowTransitions,
        $TransitionsOrder: 1
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $ThumbnailNavigatorOptions: {
        $Class: $JssorThumbnailNavigator$,
        $Orientation: 2,
        $NoDrag: true
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };

    var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_2_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 1200;

    function ScaleSlider() {
        var containerElement = jssor_2_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_2_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};
/* END: Jssor slider */

/* START: lazy load- http://jquery.eisbehr.de/lazy/ */
$(function() {
    $('.lazy').lazy();
});

/* END: lazy load */