/**
 * Created by Administrator on 2016/10/26.
 */
function mapTwo(collection, collection1, iteratee){
    var func = Array.isArray(collection)&&Array.isArray(collection1)? arrayMap : baseMap;
    return func(collection, collection1, iteratee);
}

function arrayMap(collection, collection1, iteratee){
    var length = collection.length,
        length1 = collection1.length;
    
    if(length < length1){
        var t = collection;
        collection = collection1;
        collection1 = t;
    }
    var result = Array(collection.length);
    for(var i = 0; i< collection.length; i++){
        if (collection1[i] === undefined){
            collection1[i] = 0;
        }
        result[i] = iteratee(collection[i], collection1[i], i);
    }
    
    return result;
}

var baseEach = createBaseEach();

function baseMap(collection, collection1, iteratee){
    var index = -1;
    if(collection.length < collection1.length){
        var t = collection;
        collection = collection1;
        collection1 = t;
    }
    var result = isArrayLike(collection) ? Array(collection.length) : [];
    baseEach(collection, collection1, function(value, value1, key){
        result[++index] = iteratee(value, value1, key);
    });
    return result;
}

function createBaseEach(eachFunc){
    return function(collection, collection1, iteratee){
        if(collection == null || collection1 == null){
            return [];
        }
        if(!isArrayLike(collection)|| isArrayLike(!collection1)){
            return eachFunc;
        }
        var length = collection.length,
            index = -1,
            iterable = Object(collection),
            iterabl1 = Object(collection1);
        iterable = Array.prototype.slice.call(iterable);
        iterabl1 = Array.prototype.slice.call(iterabl1);
        while(++index < length){
            if(iterabl1[index] === undefined){
                iterabl1[index] = 0;
            }
            
            iteratee(iterable[index], iterabl1[index], index);
        }
    }
}


function isArrayLike(value){
    return value != null && isLength(value.length)
}

function isLength(value){
    return typeof  value == 'number' && value >-1 && value % 1 == 0;
}

exports.mapTwo = mapTwo;