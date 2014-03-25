See the demo [here](http://marvelapp.github.io/devices.css/)

# Usage
In order to use a device, visit the index.html file and pick which one you want, copying the 'device' class
and all it's children. The CSS is set up so that class has to be a wrapped in an element of ID which
corresponds to the device you're picking.

Similarly if you want a different colour or to toggle it to be landscape, just add the respective colour
class to the wrapping element, eg. 'red' or 'gold' or 'white' and the landscape class 'landscape':

# Possible combinations:
```
#iphone5s (black by default) - .landscape, .white + .gold
#iphone5c (black by default, could be an iPhone 5) - .landscape, .white + .red + .yellow + .green
#ipad (black by default) - .landscape, .silver
#iphone4s (black by default) - .landscape, .silver
#nexus5 - .landscape
#lumia920 (yellow by default) - .landscape, .black + .white + .yellow + .red + .blue
#s5 (white by default) - .landscape, .black
#htc-one - .landscape
```

# Example
```
#iphone5s.landscape.gold
        .device
                .inner
                .sleep
                .volume
                .camera
                .top-bar
                .sensor
                .speaker
                .screen
                        Screen content goes here
                .bottom-bar
                .home
```

Will give you a gold landscape iPhone 5S! The CSS is quite messy (taken directly from the Prototype view of Marvel),
so use it, tweak it and improve however you want! Also sign up for [Marvel](http://marvelapp.com) if you haven't already because it's great
