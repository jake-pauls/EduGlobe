<p align="center">
  <img src="./dist/assets/eduglobe-logo.svg" alt="Legacy Edition" height="250" />
</p>
<p align="center">
  <strong>EduGlobe</strong>
  <strong>Created By: Jacob Pauls, Alex Lazcano, Grishma Bhattarai, and Jake Kim</strong></br>
  <a href="https://www.eduglobe.space/" >Live URL</a>
</p>
<p align="center">
  <img alt="Three.Js" src="https://img.shields.io/badge/Three%2Cjs-r124-blue" />
</p>

--- 

## What inspired you to create this project?
We didn’t enjoy looking up data and information on different websites about important topics which is time-consuming and inconvenient. We realized that there is not a single platform that gives you immediate statistical data and information about the world's emerging issues. As such, we felt as though we should create a platform that could successfully pull data and provide visualization for all of these in one place.

While simultaneously displaying statistics for health, environment, and other world-related concerns, we also hoped that EduGlobe could be a platform promoting education and awareness of these issues.

## What does it do?
It is a 3D educational and interactive website that provides information and immediate statistical data on the world’s emerging issues. The goal is to promote global awareness so people are informed and continuously conscientiousness about the state of the world.

## How did you guys build this?
We used a JavaScript library named [Three.js](https://threejs.org/) to create and render the globe using texture, bump, specular maps and phong lighting. 

Once we retrieved data from our desired APIs, we created a function to plot the converted coordinates into 3D vectors which we could then visualize on the globe with sphere or box geometries. From here, Three.js allows us to decide different colours, opacities, and other visual features in order for us to determine how to meaningfully represent the retrieved data.

Finally, we deployed our webapp to [Netlify](https://www.netlify.com/) and used a custom domain from [domain.com](https://www.domain.com/).

## What were some of the challenges you encountered?
We had a difficult time finding useful APIs (particularly ones that returned data for multiple countries or continents at once) to implement when appending data to the map. This was so important, because we wanted the data to be truly global - without making too many API calls. Furthermore, plotting this data involved a lot of debugging within formulas pertaining to spherical geometry. As said above, the calculations for the 3D vectors sometimes got fairly involved, making it confusing.

## Notable Accomplishments
One of the best accomplishments is when we figured out how to plot points in 3D from a coordinate onto a map.
We really enjoyed seeing the final product of our globe. Whenever we load the website, we find it really eye-catching and creative. 

Another accomplishment was rendering the globe and its data in a performant way. One of our original implementations took upwards of 5-10 seconds to load. Eventually, we found textures and maps for the globe that provide a high-quality feel while keeping the load times small.

## What did you learn?
We learned that through collaboration we could generate more ideas and solutions which helped us see multiple perspectives. As well, we respected each other’s ideas and persisted throughout the process. The mistakes we made along the way improved each of our skillsets in our desired disciplines.

## What's next for EduGlobe?
We want to include more relevant statistical data so we can have a more comprehensive amount of data on our very own website. One idea was also to include an audio feature so people can hear the information and statistics out loud. As well, we'd really love to expand upon the UI and match our mockups to a greater extent - so EduGlobe is more of a data visualization 'experience'. Another worthwhile implementation would be to view the live statistics/metrics on or around the map, as opposed to only the currently represented bars/spheres. This way, our data can truly be represented to its fullest extent and EduGlobe can persist as a fast way to stay up to date on the world's most relevant issues.

--- 

Made  with 💛 in 2021 
