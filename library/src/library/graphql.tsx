import { ComponentProps, FC } from "react"

const Graphql: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#F472B6"
      fillRule="evenodd"
      d="M11.9 5.564c.173 0 .34-.025.5-.071l5.385 9.329a1.78 1.78 0 00-.5.864H6.514a1.78 1.78 0 00-.499-.864l5.387-9.33c.158.047.326.072.499.072zM6.513 16.532a1.78 1.78 0 01-.02.076l4.12 2.378c.324-.339.78-.55 1.287-.55.506 0 .963.211 1.287.55l4.12-2.378a1.618 1.618 0 01-.021-.076H6.513zm3.676 3.187L6.07 17.34a1.782 1.782 0 11-1.71-2.963V9.622A1.783 1.783 0 116.07 6.66l4.12-2.378A1.785 1.785 0 0111.9 2a1.782 1.782 0 011.71 2.281l4.12 2.378a1.782 1.782 0 111.71 2.963v4.756a1.782 1.782 0 11-1.71 2.963l-4.12 2.378a1.782 1.782 0 11-3.42 0zM5.206 9.622a1.783 1.783 0 001.287-2.23l4.12-2.378.055.055-5.386 9.33a1.922 1.922 0 00-.076-.021V9.622zm13.312 4.776l.076-.02V9.622a1.783 1.783 0 01-1.288-2.23l-4.119-2.378a1.818 1.818 0 01-.055.055l5.386 9.33z"
      clipRule="evenodd"
    ></path>
  </svg>
)

export default Graphql
