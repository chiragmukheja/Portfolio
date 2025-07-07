import { useEffect, useRef } from "react";
import Head from "/memoji/head.svg";
import Body from "/memoji/body.svg";
import EyeLeft from "/memoji/eye-left.svg";
import EyeRight from "/memoji/eye-right.svg";
import PupilLeft from "/memoji/pupil-left.svg";
import PupilRight from "/memoji/pupil-right.svg";
import Ellipse from "/memoji/ellipse.svg";

const Memoji = () => {
  const headRef = useRef<SVGGElement>(null);
  const leftPupilRef = useRef<SVGImageElement | null>(null);
  const rightPupilRef = useRef<SVGImageElement | null>(null);

  // Cursor-following head
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!headRef.current) return;
      const rect = headRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angleX = (e.clientX - centerX) / 80;
      const angleY = (e.clientY - centerY) / 40;
      headRef.current.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Pupils follow mouse
  useEffect(() => {
    const movePupil = (ref: React.RefObject<SVGImageElement | null>, e: MouseEvent) => {
      if (!ref.current) return;
      const bounds = ref.current.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const dx = (e.clientX - centerX) / 150;
      const dy = (e.clientY - centerY) / 280;
      ref.current.setAttribute("transform", `translate(${dx}, ${dy})`);
    };

    const handleMouseMove = (e: MouseEvent) => {
      movePupil(leftPupilRef, e);
      movePupil(rightPupilRef, e);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  return (
     <svg
    className="relative z-10 p-4 "
    width="100%"
    height="100%"
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
    >
    <g
        transform="translate(0, 0) scale(1.2)"
        style={{ transformOrigin: "center center" }}
    >
        <image href={Ellipse} width="560" height="300" x="-25" y="137"  />
        <image href={Body} width="280" height="280" x="110" y="220" />
        <g ref={headRef} style={{ transformOrigin: "50% 50%" }}>
        <image href={Head} width="260" height="260" x="118" y="48" />
            <image href={EyeLeft} className="eyelid" width="43" height="38" x="270" y="169" />
            <image href={EyeRight} className="eyelid" width="44" height="38" x="188" y="169" />
            <image href={PupilLeft} ref={leftPupilRef} width="45" height="47" x="272" y="164" />
            <image href={PupilRight} ref={rightPupilRef} width="27" height="26" x="197" y="175" />
        </g>
    </g>
    </svg>
  );
};

export default Memoji;
