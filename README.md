# Readme

## Setup Guide

### If you're comfortable with GIT

1. Fork it
2. Clone it
3. Commit changes to your own fork
4. Send us the link to you fork for review

### If you're not comfortable with GIT

1. Learn GIT
2. See "If you're comfortable with GIT"

## Test Instructions
Using a single JSON feed as the data source we would like you to build a page using Javascript, HTML and CSS to render the data. We would like to see a Javascript framework used if possible (React or vue.js preferably).

We would like you to spend no more than 1-2 hours on this tasks and fully appreciate that it may not be completed within that time. Please ensure you structure you code in a clean way and comment where appropriate so that we can see where you were going!

`https://titan.asset.tv/api/channel-view-json/2240`

* The page should parse GET parameters to call the JSON url specified above (as an example) but work equally well if we provide an alternative ID
* Style the page using basic Bootstrap (3 or 4beta) but including style attributes as specified in the JSON
* Render the videos on a paginated thumbanil grid exposing, the video thumbnail, title and date
* The user should be able to filter the rendered results based on people and terms
* A search box would also be good
* When the user clicks on a thumbnail a modal should appear showing the video description and should iframe a video player as per the below URL:

`https://titan.asset.tv/site/ms592fcd270cfe7/$vid?chid=2240`

* Content should be organised via the tabs outlined in the JSON

## Bonus points
* Lazy load images
* Show related videos when in the video detail view based on people and terms
* Unit Testing

## Additional Notes
Approach this as if it were a production job, ensure you use npm and task runners where appropriate and document your work as if it were being handed over to another team or developer.

A working example currently in production use and written using AngularJS can be seen [here](https://channel.asset.tv/default/index.html?id=2240&region=UK&secureCode=ms592fcd270cfe7)