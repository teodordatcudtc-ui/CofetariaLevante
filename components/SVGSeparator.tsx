export default function SVGSeparator() {
  return (
    <div className="w-full h-24 relative">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-full absolute inset-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
          fill="currentColor"
          className="text-white"
        />
        <path
          d="M0,60 Q300,20 600,60 T1200,60"
          stroke="#87355d"
          strokeWidth="2"
          fill="none"
          strokeDasharray="1200"
          strokeDashoffset="1200"
          className="animate-[drawLine_2s_ease-out_forwards]"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}

