export function appendGoogleMap() {
  const containerEl = document.getElementById(
    "map-container"
  ) as HTMLDivElement;
  const link =
    "https://www.google.com/maps/d/embed?mid=1OyGbFn2oTktdK5UZIIVizFW2tnM&hl=ru&ehbc=2E312F";

  const iframe = document.createElement("iframe");
  iframe.src = link;
  iframe.width = "100%";
  iframe.height = "480";
  containerEl.appendChild(iframe);
}
