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
  <img alt="Threejs" src="https://img.shields.io/badge/Threejs-r124-blue" />
</p>

--- 

## Inspiration
- The realization that there isn't a single platform that provides visualization for a multitude of statistics and topics at once
- Something that is incredibly visual and intuitive could also be used as an education tool
- A strong desire to build something in [three.js](https://threejs.org/) and work a little bit with 3D mathematics in a project

## What does it do?
- Provides real time data visualization for a COVID-19 API and an Earthquake API on a 3D globe as either bars or spheres
- Provides brief information on the issue visualized on the globe

## How did you guys build this?
- 3D globe, background, clouds, specular, and bump map rendering in [three.js](https://threejs.org/)
- 3D plotted data as either SphereGeometry or BoxGeometry in [three.js](https://threejs.org/)
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