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
      if ($.isWindow(this)) return false
      var $this = $(this)
      elPosition = $this.position()
      elWidth = $this.width()
      elHeight = $this.height()
      var parents = $this.parentsUntil(self.options)
      var $parentsTo = $(self.options)
      parents.push($parentsTo)

      for(var i=0; i<parents.length; i++){
        var $parent = $(parents[i])
        if ($.isWindow($parent[0])) break
        var absPosition = !!~['absolute', 'fixed'].indexOf($parent.css('position'))
        var parentPosition = $parent.position()
        var parentWidth = $parent.width()
        var parentHeight = $parent.height()
        var parentToBottom = absPosition ? parentHeight : (parentHeight+parentPosition.top)
        var parentToRight = absPosition ? parentWidth : (parentWidth+parentPosition.left)

        if ( elPosition.top < 0
        || elPosition.left < 0
        || elPosition.top > parentToBottom
        || elPosition.left > parentToRight
        || (elPosition.top + elHeight) > parentToBottom
        || (elPosition.left + elWidth) > parentToRight) {
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
