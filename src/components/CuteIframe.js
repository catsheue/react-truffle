import { useRef } from "react";

export default function CuteIframe() {
  const ref = useRef();
  const setStyle = () => {
    const selection = document.getElementsByTagName("iframe");
    const iframes = Array.prototype.slice.call(selection);
    // if (!ref.current.contentDocument) return;
    // ref.current.contentDocument.head.appendChild(style);
    console.log(8787);
    try {
      for (let x in iframes) {
        const style = document.createElement("style");
        const css = `*{ color: red; }`;
        style.appendChild(document.createTextNode(css));

        iframes[x].contentDocument.head.appendChild(style);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   const selection = document.getElementsByTagName("iframe");
  //   const iframes = Array.prototype.slice.call(selection);
  //
  //   if (!ref.current.contentDocument) return;
  //
  //
  //   // ref.current.contentDocument.head.appendChild(style);
  //
  //
  //
  //   try {
  //     for (let x in iframes) {
  //       const style = document.createElement("style");
  //       const css = `*{ color: red; }`;
  //       style.appendChild(document.createTextNode(css));
  //
  //       iframes[x].contentDocument.head.appendChild(style);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, []);

  return (
    <iframe
      title="testit"
      ref={ref}
      src="http://react-truffle.pinkjelly.org/"
      width="100%"
      height="310px"
      onLoad={setStyle}
    />
  );
}
