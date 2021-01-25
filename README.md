<p align="center">
  <img src="./dist/assets/eduglobe-logo.svg" alt="EduGlobe" height="250" />
</p>
<p align="center">
  <font size="5"><strong>EduGlobe</strong></font><br/>
  <strong> 🌏 CUNY Hackathon 2021 Finalist 🏅 3rd Place Overall 🏅 Best Presentation 🌏</strong><br/>
  <code>Created By: Jacob Pauls, Alex Lazcano, Grishma Bhattarai, and Jake Kim</code></br>
  <a href="https://www.eduglobe.space/" >Live Demo</a>
</p>
<p align="center">
  <img alt="Three.Js" src="https://img.shields.io/badge/Three%2Cjs-r124-blue" />
</p>
<p align="center">
  <img src="https://www.svgrepo.com/show/165969/html.svg" alt="HTML5" height="25" style="padding-right:5px;">
  <img src="https://www.svgrepo.com/show/102011/css-3.svg" alt="CSS3" height="25" style="padding-right:5px;">
  <img src="https://www.svgrepo.com/show/306259/javascript.svg" alt="JS" height="25" style="padding-right:5px;">
  <img src="https://ucarecdn.com/22a0a69b-689f-46c9-866b-57650f31fde9/" alt="Three.js" height="25" style="padding-right:5px;">
  <img src="https://www.svgrepo.com/show/306463/netlify.svg" alt="Netlify" height="25">
</p>

--- 

## Inspiration
- The realization that there isn't a single platform that provides visualization for a multitude of statistics and topics at once
- Something that is incredibly visual and intuitive could also be used as an education tool
- A strong desire to build something in [Three.js](https://threejs.org/) and work a little bit with 3D mathematics in a project

## What does it do?
- Provides real time data visualization for a COVID-19 API and an Earthquake API on a 3D globe as either bars or spheres
- Provides brief information on the issue visualized on the globe

## How did you guys build this?
- 3D globe, background, clouds, specular, and bump map rendering in [Three.js](https://threejs.org/)
- 3D plotted data as either SphereGeometry or BoxGeometry in [Three.js](https://threejs.org/)
      - Data was plotted by retrieving a latitude/longitude from the APIs and then converting it to a plot on the 3D globe using spherical geometry
- Basic HTML/CSS for UI components
- Deployed to [Netlify](https://www.netlify.com/)

## What were some of the challenges you encountered?
- Finding useful APIs that provided data for multiple continents/countries at once
      - Wanted to keep API call count low and still visualize lots of data
- Plotting the data points, as the calculations for the 3D vectors were confusing at first
- Rendering the globe in a way that would be performant for a web server, original implemntation took upwards of 10 seconds to load. Eventually this was minimized and the globe renders within 3-5 seconds on most machines

## What's next for EduGlobe?
- Updating this project would mean including more relevant statistical data to truly make it comprehensive against most of the world's issues

--- 

Made  with 💛 in 2021 