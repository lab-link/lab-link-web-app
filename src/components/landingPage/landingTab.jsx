import ModelViewer from "./ModelViewer";
import HomeButton from "./homeButton";
function landingTab() {
  return (
    <>
      <ModelViewer
        scale="40"
        modelPath={"src/components/landingPage/scene.glb"}
      />
      <HomeButton></HomeButton>
    </>
  );
}

export default landingTab;
