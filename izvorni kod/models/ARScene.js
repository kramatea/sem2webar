import React, { useEffect } from "react";
import ReactDOM from "react-dom";

function ARScene() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1000,
      }}
    >
      <a-scene
        embedded
        arjs="sourceType: webcam; debugUIEnabled: true;"
        vr-mode-ui="enabled: false"
      >
        <a-marker preset="hiro">
          {/* <a-box position="0 0.5 0" material="color: red;"></a-box> */}
          <a-entity
            position="0 1 0"
            rotation="0 0 0"
            scale="1 1 1"
            gltf-model="/lowpoly_origami_penguin.glb"
          ></a-entity>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

// Main app component
function App() {
  return (
    <div>
      <ARScene />
    </div>
  );
}

// Render the React app once the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const arContainer = document.getElementById("ar-container");
  if (arContainer) {
    ReactDOM.render(<App />, arContainer);
  }
});

export default App;
