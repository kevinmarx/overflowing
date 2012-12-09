/* Overflowing.js
 *
 * A plugin based on Elving Rodriguez's Overflowed
 * http://elvingrodriguez.com/overflowed
 *
 */
(function($){
  $.fn.overflowing = function(options, callback){
    var self = this,
        overflowed = [],
        hasCallback = callback && typeof callback === 'function' ? true : false,
        status = false
    this.options = options || {}
    this.options.parentsTo = this.options.parentsTo || window

    this.each(function(){
      var $this = $(this)
      elPosition = $this.position()
      elWidth = $this.width()
      elHeight = $this.height()
      var parents = $this.parentsUntil(self.options.parentsTo)
      var $parentsTo = $(self.options.parentsTo)
      parents.push($parentsTo)

      for(var i=0; i<parents.length; i++){
        var parentWidth = $(parents[i]).width()
        var parentHeight = $(parents[i]).height()
        if ( elPosition.top < 0 || elPosition.left < 0 || elPosition.top > parentHeight || elPosition.left > parentWidth || elPosition.top + elHeight > parentHeight || elPosition.left + elWidth > parentWidth) {
          status = true
          overflowed.push(parents[i])
          if (hasCallback) callback(parents[i])
        }
      }

      for(var i=0; i<overflowed.length; i++){
        $(overflowed[i]).addClass('overflowed')
      }

      if($this.parents(self.options.parentsTo).hasClass('overflowed')) $this.addClass('overflowing')
    })

    if (!hasCallback) return overflowed.length > 1 ? overflowed : status
  }

})(jQuery)
