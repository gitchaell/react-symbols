import type { ComponentProps, FC } from "react"

const Gulp: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#F87171"
      d="M8.562 16.042c-.167-1.66-.327-3.321-.48-4.983.001-.042-.226-.076-.506-.076h-.508V9.05h3.966V5.3l1.871-1.125c1.14-.685 1.978-1.125 2.144-1.125.4 0 .866.506.866.94 0 .189-.057.421-.127.517-.07.095-.722.53-1.45.965l-1.321.793-.028 1.392-.029 1.393h3.972v1.933h-.98l-.494 4.983-.495 4.983H9.047l-.485-4.907z"
    ></path>
  </svg>
);

export default Gulp;
