//FIRST THING FIRST

//DESCRIPTORS



function Body(figure) {
    Object.defineProperty(this, "Figure", {
        value: figure,
        writable: false,
        enumerable: true,
        configurable: false
    });
    Object.defineProperty(this, "Mole", {
        value: false,
        enumerable: false
    });
 
    function isSkinColor(color) {
        return color in ['black', 'white', 'yellow', 'brown'];
    }
    var skinColor;
    Object.defineProperty(this, "SkinColor", {
        enumerable: false,
        get: function() {
            return skinColor;
        },
        set: function(val) {
            if (!isSkinColor(val)) {
                return;
            }
            skinColor = val;
        }
    });
    Object.defineProperty(this, "Waist", {
        enumerable: true,
        value: function() {
            alert("Thin and sexy.")
        }
    });
}
 
var herBody = new Body("Feminine");
herBody.Figure = "Slim";
herBody.SkinColor = "brown";
herBody.Mole = "On chick!";
herBody.Waist(); // alerts "Thin and sexy."
  for (var name in herBody)
    alert(name + ": " + herBody[name]); // alerts "Figure" and "Waist", but not SkinColor




// SECOND THING SECOND



// The constructor to decorate

function ZazVida() { 

  this.cost = function() { return 253050; }; 
  this.bodyType = function() { return "sedan"; }; 

} 

// 2015 year model Decorator; i think that this one isn't a decorator. you just created a new function wich will just take an object property and change it
function lowerPrice(zazVida) { 

  var v = zazVida.cost(); 
  zazVida.cost = function() { 
    return v - 24100; 
  }; 

} 

// Lux Decorator 
function Lux(zazVida){

  var v = zazVida.cost(); 
  zazVida.cost = function(){
    return  v + 21690;
  };

}
 
// 2015 year Lux Decorator
function LowerLux(zazVida){

  var v = zazVida.cost(); 
  zazVida.cost = function(){
     return  v + 2410;
  };

}

var zv = new ZazVida(); // here you create new Object 
lowerPrice(zv); // here you just call the function which will change the value of zv.prop 
Lux(zv);
LowerLux(zv);

// Outputs: 253050
console.log(zv.cost());

// Outputs: sedan
console.log(zv.bodyType());







//LAST THING LAST



// toString


function people(city, population) {
	return {
		city: city,
		population: population,
		
		toString: function () {
			return "[People " + "\"" + city + "\" " + population +  "]";
		}
	}
}

var cherkasyPopulation = people("CHERKASY", 283e3);
alert(cherkasyPopulation); // [cherkasyPopulation "Cherkasy" 283000]



// valueOf

function people(city, population) {
	return {
		city: city,
		population: population,
		
		toString: function () {
			return "[People " + 
				"\"" + city + "\" " +
				population +
			"]";
		},
		
		valueOf: function () {
			return population;
		}
	};
}

var cherkasyPopulation = people("Cherkasy", 283e3);
var kyivPopulation = people("Kyiv",  280e4);
var kharkivPopulation = people("Kharkiv", 143e4);

alert(cherkasyPopulation); // [cherkasyPopulation "Cherkasy" 283000

var threeCitiesPopulation = cherkasyPopulation + kyivPopulation + kharkivPopulation;

alert(threeCitiesPopulation); // 4513000


// JSON.stringify

var cityName = {"city":"Cherkasy", "population":283000};
JSON.stringify(cityName);


















