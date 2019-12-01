lighthouse:

Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles
-lataa/defer  leaflet.css, nopeuttais
-sama title fontille

<link rel="canonical" href="https://fraasi.github.io/" />


Web app manifest does not meet the installability requirementsFailures: Manifest does not have a PNG icon of at least 192px.

Is not configured for a custom splash screenFailures: Manifest does not have a PNG icon of at least 512px.
A themed splash screen ensures a high-quality experience when users launch your app from their homescreens.

Does not provide a valid apple-touch-icon
For ideal appearance on iOS when users add to the home screen, define an apple-touch-icon. It must point to a non-transparent 192px (or 180px) square PNG

Add a description tag to the <head> of each of your pages.
<meta name="Description" content="Harjulla tuulee, Tampereen Pispalan tapahtumat yhdellä sivustolla.">
Include clearly-tagged facts in the descriptions. The descriptions don't have to be in sentence format. They can contain structured data.
<meta name="Description" content="Author: A.N. Author,
    Illustrator: P. Picture, Category: Books, Price: $17.99,
    Length: 784 pages">





icons

{
  "short_name": "Maps",
  "name": "Google Maps",
  "icons": [
    {
      "src": "/images/icons-192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "/images/icons-512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": "/maps/?source=pwa",
  "background_color": "#3367D6",
  "display": "standalone",
  "scope": "/maps/",
  "theme_color": "#3367D6"
}
