import { ComponentProps, FC } from "react"

const CPlus: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <g fill="#60A5FA" clipPath="url(#clip0_20556_569)">
      <path d="M16.633 14.185v-4.37h1.105v4.37h-1.105zM15 12.552v-1.104h4.37v1.104H15zM21.599 14.185v-4.37h1.105v4.37h-1.105zm-1.633-1.633v-1.104h4.37v1.104h-4.37zM14.6 9.938h-2.49a2.436 2.436 0 00-.278-.858c-.14-.254-.32-.47-.54-.648a2.375 2.375 0 00-.761-.41 2.912 2.912 0 00-.926-.141c-.602 0-1.127.15-1.574.449-.447.295-.794.727-1.04 1.295-.246.564-.37 1.25-.37 2.057 0 .83.124 1.526.37 2.09.25.565.599.991 1.046 1.28.447.287.964.431 1.55.431.33 0 .635-.044.916-.13.284-.088.536-.215.755-.381.22-.17.402-.377.546-.62.147-.242.25-.519.307-.83l2.488.012a4.642 4.642 0 01-1.511 2.87 4.84 4.84 0 01-1.534.92c-.591.223-1.26.335-2.006.335-1.038 0-1.966-.235-2.784-.704-.814-.47-1.458-1.15-1.932-2.04-.47-.89-.704-1.968-.704-3.233 0-1.27.238-2.349.716-3.239.477-.89 1.125-1.568 1.943-2.034.818-.47 1.738-.704 2.761-.704.674 0 1.3.094 1.875.284.58.189 1.093.466 1.54.83.447.359.81.8 1.09 1.323.285.523.467 1.121.546 1.796z"></path>
    </g>
    <defs>
      <clipPath id="clip0_20556_569">
        <path fill="#fff" d="M0 0H24V24H0z" transform="translate(.336)"></path>
      </clipPath>
    </defs>
  </svg>
)

export default CPlus
