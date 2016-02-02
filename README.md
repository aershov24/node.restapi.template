# Longtail Banner Admin Template #

To modify this solution for a new client you will need:

1. Add new S3 Bucket to the AWS named as a new client
2. Add folders to the bucket represented client's Campaigns
3. Add folders inside created folders represented campaign's sections
4. To each section add two files: demo.js and live.js
5. Create a new AWS user for the new bucket with right permissions or use an existing one
6. Get the new user's credential details: accessKeyId, secretAccessKey
7. Choose a content's format for demo and live js files
 7.1 define an ad model (basic ad has: title, url, img)
 7.2 define a wrapper string for json objects array inside js file like window.feed([ad1, ad2,...]);

8. Change back-end configuration:
 8.1 Add the new AWS user's credentials to the /config.js
 8.2 Add a new admin users (email, password and choosen client name (must be like created bucket name)) inside /models/users.js

9. implement specific logic for the client on a back-end side:
 9.1 implement specific feeder's logic inside /controllers/feeder.js based on the choosen ad model (reading rss, html parsing and so on)
 9.1 implement js file content modification logic during publishing process for the client inside /helpers/adsmapper.js, prepareContent method
 9.2 implement post-puplish file logic (like rewriting src urls) for client's iframes and banners inside /helpers/adsmapper.js, postPublish
 9.3 implement getting ads array logic from js files for client inside /helpers/adsmapper.js, getAdsFromFile method

10. implement specific logic for the client on a fron-end side:
 10.1 Change a client's logo /public/img/logo.png
 10.2 Change logo position inside /views/login.jade and /views/navbar.jade
 10.3 Change background image for banners preview /public/img/bg.jpg
 10.4 Put client's banners inside /public/iframes folder, basic banners are: Banner, Skyscrapper, Preview 
 10.5 Change iframe properties (like iframe's index.html file location) (or add additional iframes with src) inside /view/ads.jade (line 63)
 10.6 Change banner (or banners) position in css. See classes .frames #Banner, #Skyscrapper, #Preview inside /public/css/style.css
 10.7 Change js file http location if using not the ap-southeast-2 region inside /views/sections.jade, /views/ads.jade
 10.8 Change favicon file /public/favicon.ico
 10.9 Implement logic for choosen ads model inside /public/libs/ads.js in the following methods
 	- CompleteAddItemToTable (match ad property with data-* attributes) 
 	- GetAdsArrayFromTable (it's method where the ads array prepared for publishing)
 	- GenerateTableFromAds 
 	- BeginAddItemToAdsTable
 	- HandleAjaxFeedResponse
 	- AddAdToList
 	- GetSelectedItems
 	- AddFeedItems
 	- $(document).on('click', '#AddUrlButton')
 	- $(document).on('click', '#SaveButton')
 10.10 Implement logic for iframes refreshing inside /public/libs/ads.js IFramesRefresh method