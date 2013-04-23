Overflowing.js
===========

A small jQuery plugin that traverses up the dom and checks to see if it is overflowing any of its parent elements.

## Getting Started

Include jQuery and the plugin on a page. Then select an element and call the `overflowing` method, optionally passing in a limiting element and a callback function.
By default overflowing will traverse the dom up to and including the `window`. You can optionally pass in a parent element
in which Overflowing.js will stop at and include in the calculations.

If you are using the callback function you can use the `overflowed` argument to get the element being overflowed.
The callback is fired for each element that is overflowed.

```html
<body>
  <div class="parentElement">
    <div class="middleElement">
      <p class="targetElement"></p>
    </div>
  </div> 
  <script src="jquery.js"></script>
  <script src="jquery.overflowing.js"></script>
  <script>
    $('.targetElement').overflowing('.parentElement', function(overflowed) { 
      console.log('This element is being overflowed', overflowed)
    })
  </script>
</body>
```
This setup will check if `.targetElement` is overflowing any of its parents up to and including `.parentElement` and logging all the elements it overflows in the callback.

## License
Copyright © 2012 Kevin Marx
Licensed under the MIT license.

Based on Elving Rodriguez's Overflowed
http://elvingrodriguez.com/overflowed
