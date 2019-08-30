define({
  "name": "Hotel Link Channel Manager – REST API",
  "version": "2.0.0",
  "description": "",
  "title": "Hotel Link Channel Manager – REST API",
  "url": "https://api.hotellinksolutions.com/external",
  "sampleUrl": "http://hbe-api.whl-staging.com/external",
  "header": {
    "title": "Overview",
    "content": "<h1>Overview</h1>\n<p>This API is used by Online Travel Agencies (OTAs) to connect to Hotel Link System (HLS).</p>\n<h2><span id=\"api-overview-submenu-entry1\"> Contact Information</span></h2>\n<p>All enquiries should be sent to <strong><a href=\"support@hotellinksolutions.com\">support@hotellinksolutions.com</a></strong></p>\n<h2><span id=\"api-overview-submenu-entry2\"> Best Practice for OTA partners</span></h2>\n<p>You use the following functions to retrieve rooms and rate plans from HLS, map them in your extranet system and push new/modified bookings back to HLS.</p>\n<ul>\n<li><strong><a href=\"#api-Ota-OtaGetRatePlans\">GetRatePlans</a></strong>: to retrieve a list of rooms and rate plans from HLS and map them in your extranet.</li>\n<li><strong><a href=\"#api-Ota-OtaGetInventory\">GetInventory</a></strong>: to retrieve rate, allotment and restriction data such as Min Night, Max Night, Stop Sale, etc. from HLS.</li>\n<li><strong><a href=\"#api-Ota-OtaSaveBooking\">SaveBooking</a></strong>: to save booking into HLS.</li>\n</ul>\n<h2><span id=\"api-overview-submenu-entry4\"> Credential Accounts</span></h2>\n<p>In order to call our functions, you are provided the following credential info.</p>\n<ul>\n<li>ChannelManagerUsername: <code>ota</code></li>\n<li>ChannelManagerPassword: <code>ota</code></li>\n<li>HotelId: <code>5994c2db-cd76-401c-ba2e-e178ae118a8d</code></li>\n<li>HotelAuthenticationChannelKey: <code>74dd9b27c6d1fb5fb1289fae19878cac</code></li>\n</ul>\n<p>Please note that the below account is only on our TEST environment. After you pass our integration test, we will provide account on our LIVE environment.</p>\n<p>ChannelManagerUsername and ChannelManagerPassword will be provided with Live account when you are ready to go live. It will be used for multiple hotels.</p>\n<p>HotelId will be provided by us when it is required. Each hotel will have different id.</p>\n<p>HotelAuthenticationChannelKey is MD5 key and we will advise how to generate it when you are ready to go live.</p>\n<p>Below is account to access our extranet on TEST environment which you can access to test during your implementation process.</p>\n<p><strong><a href=\"http://new-hls-manage.whl-staging.com/\">http://new-hls-manage.whl-staging.com/</a></strong></p>\n<ul>\n<li>Username: <code>api-test</code></li>\n<li>Password: <code>api-test</code></li>\n</ul>\n<p>Please note that from time to time we might clean up data created in this test hotel account without notification.</p>\n"
  },
  "footer": {
    "title": "",
    "content": "<p>@ 2019 Hotel Link Solutions Ltd. All Rights Reserved</p>\n"
  },
  "template": {
    "withGenerator": false,
    "withCompare": false
  },
  "order": [
    "Endpoints",
    "oAuthGetToken",
    "Error_Handling",
    "Data Type References",
    "oAuthError",
    "GetInventoryError",
    "GetRatePlansError",
    "SaveBookingError"
  ],
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2019-08-30T07:31:46.255Z",
    "url": "http://apidocjs.com",
    "version": "0.17.7"
  }
});
