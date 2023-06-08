import { ComponentProps, FC } from "react"

const Exe: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#64748B"
      d="M8.97 9.56c.295 1.064-.32 2.17-1.356 2.437l-.55.14a5.797 5.797 0 00.006 1.764l.508.127c1.046.262 1.668 1.379 1.364 2.45l-.176.616c.413.377.884.682 1.396.9l.464-.507a1.835 1.835 0 012.728 0l.469.513a4.943 4.943 0 001.394-.89l-.186-.67c-.296-1.064.32-2.17 1.356-2.437l.549-.14a5.788 5.788 0 00-.006-1.764l-.507-.127c-1.047-.261-1.669-1.379-1.364-2.45l.175-.616a4.939 4.939 0 00-1.396-.9l-.464.507c-.742.809-1.986.809-2.727 0L10.177 8a4.939 4.939 0 00-1.394.89l.186.67zM12 14.464c-.753 0-1.364-.655-1.364-1.464 0-.808.61-1.464 1.364-1.464.753 0 1.364.656 1.364 1.464 0 .809-.61 1.464-1.364 1.464z"
    ></path>
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M4 20V6h16v14H4zM2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4z"
      clipRule="evenodd"
    ></path>
  </svg>
)

export default Exe
