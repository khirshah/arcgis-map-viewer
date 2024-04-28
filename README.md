# arcgis-map-viewer

## Description
Small webapp with embedded ArcGIS maps.

The project showcases how to embed an ArcGIS map in a webapp using React+TypeScript and the ArcGIS Maps JavaScript SDK.
Powered by vite and testing is done in vitest.

### Map of New Zealand 
A topographic map, overlayed with a TileLayer and a FeatureLayer from ArcGIS

The tile layer is a base terrain layer displaying shaded relief imagery, bathymetry, and coastal water features.
https://www.arcgis.com/home/item.html?id=c61ad8ab017d49e1a82f580ee1298931

The feature layer displays urban areas
https://www.arcgis.com/home/item.html?id=2853306e11b2467ba0458bf667e1c584

## Running the app locally

### Prerequisites
1. You will need to create an ArcGIS developer account and generate an API key for yourself
Here is the link: https://developers.arcgis.com/dashboard/

2. Add a .env file to your project root folder and add the API key as follows:
VITE_ARCGIS_API_KEY= `<your api key here without quotaion marks>`

### Install
Clone the repository and in the project root folder run the following command from the terminal:

`npm i`

### Run
After installation, in the project root folder run the following command from the terminal:

`npm run dev`

## Live version
The app is deployed here if you just would like to have a look:
https://agi-arcgis-map-viewer.vercel.app/
