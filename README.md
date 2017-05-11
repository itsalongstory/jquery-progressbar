# JQuery ProgressBar

![JQuery ProgressBar](https://raw.githubusercontent.com/libuchao/jquery-progressbar/master/demo.png)

### HTML

```html
<div class="progressbar"></div>
```

### JavaScript

```js
jQuery(document).ready(function($) {
  $(".progressbar").progressbar({
    steps: ['Setp 1', 'Setp 2', '~Step 3 Failed', '@Step 4 ( Current )', 'Step 5', 'Step 6']
  });
});
```

### Explanation

* `~` means **Failed**
* `@` means **Current**