# *Micha³ Cho³ka, 186444*

---

## Do przyk³adów wykorzysta³em bazy car_market oraz kody_pocztowe

## Map reduce

### Iloœæ modeli poszczególnych marek dro¿szych ni¿ 30k dolarów

### Funkcja map

```js

var map = function() {
    emit(this.make, this.price);
};

```

### Funkcja reduce

```js

var reduce = function(key, values) {
var count = 0;
    for(i in values) {
        if(values[i] > 30000) {
            count++;
        }
    }
    return count;
}

```

### Wywo³anie mapReduce

```js

var result = db.car_market.mapReduce(map, reduce, {out: {inline: 1}});

```

### Wyniki agregacji

```json
{
        "results" : [
                {
                        "_id" : "acura",
                        "value" : 4
                },
                {
                        "_id" : "audi",
                        "value" : 7
                },
                {
                        "_id" : "bmw",
                        "value" : 15
                },
                {
                        "_id" : "buick",
                        "value" : 2
                },
                {
                        "_id" : "cadillac",
                        "value" : 8
                },
                {
                        "_id" : "chevrolet",
                        "value" : 3
                },
                {
                        "_id" : "chrysler",
                        "value" : 0
                },
                {
                        "_id" : "daewoo",
                        "value" : 0
                },
                {
                        "_id" : "dodge",
                        "value" : 2
                },
                {
                        "_id" : "ford",
                        "value" : 2
                },
                {
                        "_id" : "honda",
                        "value" : 1
                },
                {
                        "_id" : "hyundai",
                        "value" : 0
                },
                {
                        "_id" : "infiniti",
                        "value" : 3
                },
                {
                        "_id" : "jaguar",
                        "value" : 11
                },
                {
                        "_id" : "kia",
                        "value" : 0
                },
                {
                        "_id" : "lexus",
                        "value" : 6
                },
                {
                        "_id" : "lincoln",
                        "value" : 6
                },
                {
                        "_id" : "mazda",
                        "value" : 1
                },
                {
                        "_id" : "mercedes-ben
                        "value" : 20
                },
                {
                        "_id" : "mercury",
                        "value" : 0
                },
                {
                        "_id" : "mitsubishi",
                        "value" : 0
                },
                {
                        "_id" : "nissan",
                        "value" : 0
                },
                {
                        "_id" : "oldsmobile",
                        "value" : 0
                },
                {
                        "_id" : "plymouth",
                        "value" : 1
                },
                {
                        "_id" : "pontiac",
                        "value" : 2
                },
                {
                        "_id" : "porsche",
                        "value" : 6
                },
                {
                        "_id" : "saab",
                        "value" : 11
                },
                {
                        "_id" : "saturn",
                        "value" : 0
                },
                {
                        "_id" : "subaru",
                        "value" : 0
                },
                {
                        "_id" : "suzuki",
                        "value" : 0
                },
                {
                        "_id" : "toyota",
                        "value" : 1
                },
                {
                        "_id" : "volkswagen",
                        "value" : 0
                },
                {
                        "_id" : "volvo",
                        "value" : 12
                }
        ],
        "timeMillis" : 11,
        "counts" : {
                "input" : 416,
                "emit" : 416,
                "reduce" : 33,
                "output" : 33
        },
        "ok" : 1,
}

```

## Iloœæ kodów pocztowych w poszczególnych województwach

### Funkcja map

```js

var map = function() {
    emit({wojewodztwo: this.wojewodztwo}, 1);
};

```

### Funkcja reduce

```js

var reduce = function (key, values) {
    return Array.sum(values);
};

```

### Wywo³anie mapReduce

```js

var result = db.car_market.mapReduce(map, reduce, {out: {inline: 1}});

```

### Wyniki agregacji

```json
{
        "results" : [
                {
                        "_id" : {
                                "wojewodztwo" : "dolnoœl¹skie"
                        },
                        "value" : 9529
                },
                {
                        "_id" : {
                                "wojewodztwo" : "kujawsko-pomorskie"
                        },
                        "value" : 7544
                },
                {
                        "_id" : {
                                "wojewodztwo" : "lubelskie"
                        },
                        "value" : 6522
                },
                {
                        "_id" : {
                                "wojewodztwo" : "lubuskie"
                        },
                        "value" : 2687
                },
                {
                        "_id" : {
                                "wojewodztwo" : "mazowieckie"
                        },
                        "value" : 25182
                },
                {
                        "_id" : {
                                "wojewodztwo" : "ma³opolskie"
                        },
                        "value" : 8063
                },
                {
                        "_id" : {
                                "wojewodztwo" : "opolskie"
                        },
                        "value" : 3823
                },
                {
                        "_id" : {
                                "wojewodztwo" : "podkarpackie"
                        },
                        "value" : 5865
                },
                {
                        "_id" : {
                                "wojewodztwo" : "podlaskie"
                        },
                        "value" : 6610
                },
                {
                        "_id" : {
                                "wojewodztwo" : "pomorskie"
                        },
                        "value" : 8454
                },
                {
                        "_id" : {
                                "wojewodztwo" : "warmiñsko-mazurskie"
                        },
                        "value" : 5460
                },
                {
                        "_id" : {
                                "wojewodztwo" : "wielkopolskie"
                        },
                        "value" : 12440
                },
                {
                        "_id" : {
                                "wojewodztwo" : "zachodniopomorskie"
                        },
                        "value" : 7575
                },
                {
                        "_id" : {
                                "wojewodztwo" : "³ódzkie"
                        },
                        "value" : 9968
                },
                {
                        "_id" : {
                                "wojewodztwo" : "œl¹skie"
                        },
                        "value" : 15535
                },
                {
                        "_id" : {
                                "wojewodztwo" : "œwiêtokrzyskie"
                        },
                        "value" : 4819
                }
        ],
        "timeMillis" : 3339,
        "counts" : {
                "input" : 140076,
                "emit" : 140076,
                "reduce" : 1019,
                "output" : 16
        },
        "ok" : 1,
}

```

### Link do skryptu: [mapreduce_mcholka.js](../scripts/mapreduce_mcholka.js)
