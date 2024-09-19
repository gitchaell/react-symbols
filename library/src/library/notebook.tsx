import type { ComponentProps, FC } from "react"

const Notebook: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#60A5FA"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 4a1 1 0 00-1-1H8a3 3 0 00-3 3v12a3 3 0 003 3h10a1 1 0 001-1V4z"
    ></path>
    <rect width="14" height="2" x="5" y="16" fill="#60A5FA" rx="1"></rect>
  </svg>
)

export default Notebook
