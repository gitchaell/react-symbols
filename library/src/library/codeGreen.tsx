import type { ComponentProps, FC } from "react"

const CodeGreen: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#16A34A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6.778 8.519L3 12.297l3.778 3.779M17.222 8.519L21 12.297l-3.778 3.779M9.271 18.595L14.73 6"
    ></path>
  </svg>
)

export default CodeGreen
