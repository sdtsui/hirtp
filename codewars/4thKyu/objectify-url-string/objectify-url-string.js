function convertQueryToMap(query) {
  var obj = {};
  query.split('&').map(function(params) {
    var parts = params.split('=');
    if (!parts[1]) return {};
    parts[0].split('.').reduce(function(cur, next, i, arr) {
      if (!cur[next]) cur[next] = {};
      if (i === arr.length - 1) cur[next] = decodeURIComponent(parts[1]);
      return cur[next];
    }, obj);
  });
  return obj;
}

//overall point: Can use map when something needs
//This is interesting: map vs each vs reduce...
//Reduce is needed to round things up, like comparing a query string...


//Reduce pattern: Current accu, next elm, index, array
//forEach: run the function for each element
//map: run the function, collate the results into an array
