import { ImageSlider } from "../";
import './App.css';

function App() {
  return (
    <main>
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
      <h2 className="content">Image Slider 3D</h2>
    </main>
  );
}

export default App;
