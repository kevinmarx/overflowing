/* Overflowing.js
 *
 * A plugin based on Elving Rodriguez's Overflowed
 * http://elvingrodriguez.com/overflowed
 *
 */
(function($){
  $.fn.overflowing = function(options, callback){
    var self = this
    var overflowed = []
    var hasCallback = callback && typeof callback === 'function' ? true : false;
    var status = false
    this.options = options || window

    this.each(function(){
      var $this = $(this)
      elPosition = $this.position()
      elWidth = $this.width()
      elHeight = $this.height()
      var parents = $this.parentsUntil(self.options)
      var $parentsTo = $(self.options)
      parents.push($parentsTo)

      for(var i=0; i<parents.length; i++){
        var parentPosition = $(parents[i]).position()
        var parentWidth = $(parents[i]).width()
        var parentHeight = $(parents[i]).height()
        if ( elPosition.top<0
        || elPosition.left<0
        || elPosition.top>(parentHeight+parentPosition.top)
        || elPosition.left>(parentWidth+parentPosition.left)
        || (elPosition.top + elHeight) > (parentHeight+parentPosition.top)
        || (elPosition.left+elWidth) > (parentWidth+parentPosition.left)){
          status = true
          $(parents[i]).addClass('overflowed')
          overflowed.push(parents[i])
          if (hasCallback) callback(parents[i])
        }
      }

      if($this.parents(self.options).hasClass('overflowed')) $this.addClass('overflowing')
    })

    if (!hasCallback) return overflowed.length > 1 ? overflowed : status
  }

})(jQuery)
