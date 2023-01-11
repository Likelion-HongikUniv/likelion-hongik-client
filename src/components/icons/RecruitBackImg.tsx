export function RecruitBackImg() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // xlink="http://www.w3.org/1999/xlink"
        width="100%" //1920
        height="100%" //900
        fill="none"
      >
        <mask id="a" width="100%" height="100%" x="0" y="0" maskUnits="userSpaceOnUse">
          <path fill="#D9D9D9" d="M0 0h1920v900H0z" />
        </mask>
        <g mask="url(#a)">
          <path fill="url(#b)" d="M89 0h1920v911H89z" />
        </g>
        <defs>
          <pattern id="b" width="1" height="1" patternContentUnits="objectBoundingBox">
            <use href="#c" transform="scale(.00052 .0011)" />
          </pattern>
          <image
            id="c"
            width="100%"
            height="100%" //911
          />
        </defs>
      </svg>
    </>
  );
}