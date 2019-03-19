var MetricApplicationId = @@id,
	isLocalStorageSupported = checkIfLocalStorageIsSupported(),
	sessionEnded = false,
	serverName = '@@env';

function endSession()
{
	sessionEnded = true;
}

function createCookie(name, value, days) {
	if (isLocalStorageSupported)
	{
		localStorage.setItem(name, value);
		return;
	}
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	}
	else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	if (isLocalStorageSupported)
	{
		return localStorage.getItem(name);
	}

	var nameEQ = name + "=",
		ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eraseCookie(name) {
	if (isLocalStorageSupported)
	{
		try {
			localStorage.removeItem(name);
		}
		catch (e) {
		}
		return;
	}
	createCookie(name, "", -1);
}

function isOnline() {
	var xhr = new XMLHttpRequest(),
		file = 'http://ncd.nucleuscentral.com/js/metrics.js',
		randomNum = Math.round(Math.random() * 10000),
		isOnline = false;

	xhr.open('HEAD', file + '?rand=' + randomNum, true);
	xhr.send();

	xhr.addEventListener('readystatechange', function(){
		if(xhr.readyState == 4) {
			if(xhr.status >= 200 && xhr.status < 304) {
				isOnline = true;
			}
		}
	}, false);

	console.log(isOnline);
	return isOnline;
}

function guid() {
	function _p8(s) {
		var p = (Math.random().toString(16) + "000000000").substr(2, 8);
		return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
	}
	return _p8() + _p8(true) + _p8(true) + _p8();
}

function getUniqueId() {
	var uniqueId = readCookie("UniqueMetricID");
	if (uniqueId == null) {
		uniqueId = guid();
	}
	createCookie("UniqueMetricID", uniqueId, 360);
	return uniqueId;
}

function buildMetricJSON(metricId, pageRequested) {
	var currentdate = new Date(),
	datetime = (currentdate.getMonth() + 1) + "/" + currentdate.getDate() + "/" + currentdate.getFullYear() + " " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds(),
	sessionId = getSessionId(),
	sessionStart = readCookie("SessionStart"),
	uniqueId = getUniqueId(),
	jsondata =
    {
       "ApplicationID" : MetricApplicationId ,
       "UniqueID" : uniqueId,
       "MetricID" : metricId ,
       "PageRequested" : pageRequested ,
       "RequestDateTime" :  datetime ,
       "ScreenWidth" : screen.width ,
       "ScreenHeight" : screen.height,
       "MetricSessionID" : sessionId ,
       "SessionStart" : sessionStart
      }
      return jsondata;
}

function getSessionId() {
	var uniqueId = readCookie("MetricSessionID");
	if (uniqueId == null) {
		uniqueId = guid();
		var currentdate = new Date(),
			datetime = (currentdate.getMonth() + 1) + "/" + currentdate.getDate() + "/" + currentdate.getFullYear() + " " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
		createCookie("SessionStart", datetime);
		createCookie("MetricSessionID", uniqueId);
	}
	return uniqueId;
}

function checkIfLocalStorageIsSupported() {
	var mod = 'testStorage';
	try {
		localStorage.setItem(mod, mod);
		localStorage.removeItem(mod);
	}
	catch (e) {
		return false;
	}

	return true;
}

function submitMetricsToServer(metricData) {
    var jsonparsed = {};
    try {
           jsonparsed = JSON.parse(metricData);
         }
    catch (e) {
        localStorage.removeItem("CachedMetrics");
        return;
       };

    var metricjson =  JSON.stringify(jsonparsed),
    	requestSent = false,
	 	request = new XMLHttpRequest();

	request.open('POST', serverName, true);
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	request.onreadystatechange = function() {
		if(request.readyState === 4 && request.status === 200) {
			if (isLocalStorageSupported) {
	            localStorage.removeItem("CachedMetrics");
	        }
		}
	};
	request.onerror = function() {
		console.log(request.statusText);
	}
	request.send(metricjson);
}

function cacheMetric(jsonString) {
	var metricstore = [],
		cachedData = localStorage.getItem("CachedMetrics");
	if (cachedData != null) {
        try {
                 metricstore = JSON.parse(cachedData);
         	}
        catch (e) {
           localStorage.removeItem("CachedMetrics");
           return;
        };
		metricstore.push(jsonString);
	}
	else {
	    metricstore.push(jsonString);
	}

	try {
		localStorage.setItem("CachedMetrics", JSON.stringify(metricstore));
	}
	catch (e) {
	}
}

function addMetric(metricId, pageRequested) {
	if (metricId == 1) {
		eraseCookie("MetricSessionID");
	}
	else if (sessionEnded || (readCookie("MetricSessionID") == null)) {
		addMetric(1, '');
		sessionEnded = false;
	}

	var jsonString = buildMetricJSON(metricId, pageRequested);
	if (isLocalStorageSupported) {
		cacheMetric(jsonString);
		jsonString = localStorage.getItem("CachedMetrics");
	}

	if(isOnline) {
		console.log('online');
		console.log('jsonstring 291: ' + jsonString);
		if(metricId == 2) {
   			submitMetricsToServer(jsonString);
        }
	}
}
