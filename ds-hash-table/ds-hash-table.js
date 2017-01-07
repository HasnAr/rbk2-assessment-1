var makeHashTable = function() {
  //Do not change the max!
  var max = 4;
  var container={}
  return {
    _storage: [],
    retrieve: function(key) {
      //your code is here
      var index = hashFn(key, max);
      var tempRes;
      
      if(container[index])
        _.each(container[index], function(elem){
          if(elem[key])
            tempRes = elem[key];
        });
      return tempRes;

    },

    insert: function(key, value) {
      //your code is here
      var index = hashFn(key, max);
      var temp = {};
      temp[key] = value;
      this._storage.push(temp);
      if(!container[index])
        container[index]
      container[index] = this._storage; 
  }
};

};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};