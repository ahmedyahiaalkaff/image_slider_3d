# 3D Image Slider React Wrapper

This 3D Image slider was inspired by the [video](https://www.youtube.com/watch?v=yqaLSlPOUxM) created by [Lun Dev Code](https://www.youtube.com/@lundeveloper)

This library is a react wrapper that allows the use of the slider in React and Next.js projects. There are number of options you can try changing to change the view and animation options.

View a Next.js Demo [here](https://codesandbox.io/p/devbox/tgt9w6)

## Installation

Install using npm

```
npm install react-image-slider-3d
```

## Usage

- Import the library
  ```
  import { ImageSlider } from "react-image-slider-3d";
  ```
- The following code is a usage example of library
```
        <ImageSlider
          images={[
            {src: 'https://picsum.photos/200/300?random=1&blur=2'},
            {src: 'https://picsum.photos/200/300?random=2'},
            {src: 'https://picsum.photos/200/300?random=3'},
            {src: 'https://picsum.photos/200/300?random=4'},
            {src: 'https://picsum.photos/200/300?random=5'}
          ]}
          xRotation="-30deg"
          perspective="1000px"
          zTranslation="200px"
          className="imageSlider"
        />
```
## Props

| Prop| Default Value | Required    | Description | Data Type |
|-----|---------------|-------------|-------------|-----------|
|images|N/A|Yes| An array of objects containing src attribute e.g. ```[{ src: 'url to image'}] ```| Array of objects with key src of type string |
|perspective|1000px|No|value of perspective transformation is the distance between z=0 and user| string|
|xRotation|20deg|No|value of rotation of the slider around the X axis| string|
|zTranslation|300px|No|distance between z=0 and items| string|
|className|imageSlider|No|className of the container div| string|
|animationDuration|3s|No|Duration of the animation|string|
|animationTimingFunction|linear|No|Timing function of the animation|string|
|animationIterationCount|infinite|No|Count of the animation's iterations|string|
|animationDirection|normal|No|direction of the animation|string|
|animationDelay|0s|No|delay before start of the animation|string|
|animationFillMode|0s|No|animation fill mode css: animation-fill-mode|string|
