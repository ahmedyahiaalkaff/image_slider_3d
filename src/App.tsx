import { useReducer } from "react";
import { ImageSlider } from "../";
import "./App.css";

type ControlsState = {
  perspective: number;
  zTranslation: number;
  xRotation: number;
};
type ActionType =
  | {
      type: "PERSPECTIVE";
      perspective: number;
    }
  | {
      type: "ZTRANSLATION";
      zTranslation: number;
    }
  | {
      type: "XROTATION";
      xRotation: number;
    };

function reducer(state: ControlsState, action: ActionType): ControlsState {
  switch (action.type) {
    case "PERSPECTIVE":
      return { ...state, perspective: action.perspective };
    case "ZTRANSLATION":
      return { ...state, zTranslation: action.zTranslation };
    case "XROTATION":
      return { ...state, xRotation: action.xRotation };
  }
  throw new Error("unknown action");
}

const initialState: ControlsState = { perspective: 1000, zTranslation: 200, xRotation: -30 };

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <main>
      <ImageSlider
        images={[
          { src: "https://picsum.photos/200/300?random=1&blur=2" },
          { src: "https://picsum.photos/200/300?random=2" },
          { src: "https://picsum.photos/200/300?random=3" },
          { src: "https://picsum.photos/200/300?random=4" },
          { src: "https://picsum.photos/200/300?random=5" },
        ]}
        xRotation={`${state.xRotation}deg`}
        perspective={`${state.perspective}px`}
        zTranslation={`${state.zTranslation}px`}
        className="imageSlider"
      />
      <h2 className="content">Image Slider 3D</h2>
      <footer className="controls">
        <div className="perspectiveInput">
          <label htmlFor="perspectiveInput">
            Perspective:
            <input
              type="range"
              id="perspectiveInput"
              value={state.perspective}
              min={0}
              max={3000}
              onChange={(e) =>
                dispatch({
                  type: "PERSPECTIVE",
                  perspective: Number(e.currentTarget.value),
                })
              }
            />
          </label>
          {state.perspective} px
        </div>
        <div className="zTranslationInput">
          <label htmlFor="zTranslationInput">
            zTranslation:
            <input
              type="range"
              id="zTranslationInput"
              value={state.zTranslation}
              min={-state.perspective}
              max={state.perspective}
              onChange={(e) =>
                dispatch({
                  type: "ZTRANSLATION",
                  zTranslation: Number(e.currentTarget.value),
                })
              }
            />
          </label>
          {state.zTranslation} px
        </div>
        <div className="xRotationInput">
          <label htmlFor="xRotationInput">
            xRotation:
            <input
              type="range"
              id="xRotationInput"
              value={state.xRotation}
              min={-360}
              max={360}
              onChange={(e) =>
                dispatch({
                  type: "XROTATION",
                  xRotation: Number(e.currentTarget.value),
                })
              }
            />
          </label>
          {state.xRotation} deg
        </div>
      </footer>
    </main>
  );
}

export default App;
