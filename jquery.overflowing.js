/* Overflowing.js
 *
 * A plugin based on Elving Rodriguez's Overflowed
 * http://elvingrodriguez.com/overflowed
 *
 */
(function($) {
  $.fn.overflowing = function(callback) {
    var $this = this,
        $parent = $this.parent(),
        $overflowed = [],
        hasCallback = callback && typeof callback === 'function' ? true : false,
        status = false;

    $this.each(function() {
  var $this = $(this);
  elPosition = $this.position();
  elWidth = $this.width();
  elHeight = $this.height();
  parentWidth = $parent.width();
  parentHeight = $parent.height();
  if ( elPosition.top < 0 || elPosition.left < 0 || elPosition.top > parentHeight || elPosition.left > parentWidth || elPosition.top + elHeight > parentHeight || elPosition.left + elWidth > parentWidth) {
    status = true;
    $overflowed.push($this);
    if (hasCallback) callback($this);
    }
  });

    if (!hasCallback) return $overflowed.length > 1 ? $overflowed : status;
  };
})(jQuery);

//TODO: add options to set scope of how far up the DOM this script will search for the element overflowing parents.
