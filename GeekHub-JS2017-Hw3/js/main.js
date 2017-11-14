//make the object

var goods = {
    
      kind: 'high',
      price: 56,
      name: 'Jackson'
      
    
};

// variable for getter
var color = 'black';

// define a new property "weight" in the object "goods"
// and set it getter and setter

Object.defineProperty(goods, 'weight', {
    get: function () {
        return color;
    },
    set: function (weight) {

        // when property  "weight" set in goods,
        // notify about changes
        Object.getNotifier(this).notify({
            type: 'update',
            name: 'weight',
            oldValue: 'color'
        });

        //log out the value anytime when it gets changes
        console.log('set', weight);

        color = weight;
    }
});

// declare function observer
function observer(changes) {
    changes.forEach(function (change, i) {
        console.log(change);
    })
}
