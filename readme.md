#Akamai V1 ARL Deprecation Plan
Access to Akamai Net Storage via the V1 ARL (`https://a248.e.akamai.net`) will be shut down in August 2016.  This documentation is a resource outlining the deprecation plan as well as providing useful information on the new CDN.

###Akamai V1 ARL
Akamai V1 ARL configuration applies to one access point for Akamai Net Storage.

Any assets accessed via `//a248.e.akamai.net` fall under the V1 configuration.

Moving assets that are aquired via the V1 ARL need to be accessed in through other means. 
 
###Ramsey Solutions CDN Mappings
Use the [CDN Mapping Tool](http://gjthoman.github.io/cdn-converter/) to map Akamai V1 ARLs to `cdn.ramseysolutions.net`.

`cdn.ramseysolutions.net` URLs are mapped to Akamai Net Storage.

Ramsey CDN  | Net Storage Location
------------- | -------------
cdn.ramseysolutions.net/media | /23572/daveramsey.com/media
cdn.ramseysolutions.net/resources | /23572/daveramsey.com/resources
cdn.ramseysolutions.net/npm | /23572/npm
cdn.ramseysolutions.net/personality_bar | /23572/personality_bar
cdn.ramseysolutions.net/image | /23572/image
cdn.ramseysolutions.net/vendor | /23572/vendor
cdn.ramseysolutions.net/force_download | /23572/force_download
cdn.ramseysolutions.net/smart\_kids_launchpad | /23572/daveramsey.com/smart\_kids_launchpad
cdn.ramseysolutions.net/html | /23572/html
cdn.ramseysolutions.net/publishing | /23572/publishing
cdn.ramseysolutions.net/extensions | /23572/extensions
cdn.ramseysolutions.net/greatrecovery.com | /23572/greatrecovery.com
cdn.ramseysolutions.net/jonacuff.com | /23572/jonacuff.com
cdn.ramseysolutions.net/pdf | /23572/pdf
cdn.ramseysolutions.net/video | /23572/video

###What is CloudFront Doing?
CloudFront is set up between the browser requesting assets and Akamai Net Storage. So instead of browsers making requests to Net Storage via V1 ARLs, the asset requests are made to CloudFront. CloudFront is using Akamai Net Storage as it's origin server.

![CloudFront Workflow](https://raw.githubusercontent.com/gjthoman/cdn-converter/master/workflow.png)

###Deprecation Plan Outline
* Setup Amazon CloudFront and map locations to Akamai Net Storage
* Change asset URLs for Smart Kids Launchpad and DR Show
* Create online tool for mapping Akamai V1 ARLs to CloudFront
* Email Marketing starts using new CDN
* Present rollout plan to dev leaders and dev teams

###Process changes
* Email Marketing
* Creative Script
