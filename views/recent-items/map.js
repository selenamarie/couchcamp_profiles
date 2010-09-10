function(doc) {
/* 
  var all = {};
  all['urls'] = [];
  for (x in doc) {
    if (x == "urls") { // loop through
			all['urls'] = doc[x];
    } else if (x == "bio") {
			all['bio'] = doc[x]; 
		}
  }
*/
  emit(doc._id, doc);
}
