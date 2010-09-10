function(data) {

// 	$.log(data);
	var items = [];
  for (var i=0; i < data.rows.length; i++) {
	  var r = data.rows[i].value, item = {};
		item.bio = r.bio || "";
		item.urls = [];
		item.name = data.rows[i].id;
	
		if (r.url) {
				item.urls.push({url:r.url, label:"www"});
		}

// TODO: handle those people who handed us STRINGS or ARRAYS
		if (r.urls) {
			  if (typeof(r.urls) == 'string') {
					item.urls.push({url:r.urls, label:"www"});
				} else {
					var u = r.urls;
					for (var k in u) {
						item.urls.push({url:u[k], label:k});
					}
				}
		}

		if (r._attachments) {
			item.attachments = [];
			var v = r._attachments;
			for (var w in v) {
				item.attachments.push({src:[encodeURIComponent(data.rows[i].id), encodeURIComponent(w)].join('/')});
			}
		}
		items.push(item);
	};
  return {
    items: items
	};
};
