// Ilo�� kod�w pocztowych w poszczeg�lnych wojew�dztwach

var map = function() {
    emit({wojewodztwo: this.wojewodztwo}, 1);
};

var reduce = function (key, values) {
    return Array.sum(values);
};

var result = db.kody_pocztowe.mapReduce(map, reduce, {out: {inline: 1}});

// Ilo�� modeli poszczeg�lnych marek dro�szych ni� 30k > dolar�w
var map1 = function() {
    emit(this.make, this.price);
};

var reduce1 = function(key, values) {
var count = 0;
    for(i in values) {
        if(values[i] > 30000) {
            count++;
        }
    }
    return count;
}
var result1 = db.car_market.mapReduce(map1, reduce1, {out: {inline: 1}});