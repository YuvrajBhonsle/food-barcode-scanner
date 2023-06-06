const toggleTorch = (videoRef, torchEnabled, setTorchEnabled) => {
  const videoElement = videoRef.current;

  if (
    videoElement.srcObject &&
    videoElement.srcObject.getVideoTracks().length > 0
  ) {
    const track = videoElement.srcObject.getVideoTracks()[0];

    // Check if the track supports torch control
    if ("applyConstraints" in track && "getCapabilities" in track) {
      const capabilities = track.getCapabilities();

      // Check if torch control is supported
      if (capabilities.torch) {
        const constraints = { advanced: [{ torch: !torchEnabled }] };

        // Check if the requested constraints are supported
        if ("applyConstraints" in track && "getConstraints" in track) {
          track
            .applyConstraints(constraints)
            .then(() => setTorchEnabled(!torchEnabled))
            .catch((error) =>
              console.error("Error applying constraints:", error)
            );
        } else {
          console.error("applyConstraints not supported");
        }
      } else {
        console.error("Torch control not supported");
      }
    } else {
      console.error("Torch capabilities not available");
    }
  } else {
    console.error("Video track not found");
  }
};

export default toggleTorch;