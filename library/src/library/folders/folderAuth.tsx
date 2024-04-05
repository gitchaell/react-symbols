import type { ComponentProps, FC } from "react"

const FolderAuth: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M15.667 14.889h5.555c.92 0 1.667.746 1.667 1.667v2.777c0 .92-.746 1.667-1.667 1.667h-5.555c-.92 0-1.667-.746-1.667-1.667v-2.777c0-.92.746-1.667 1.667-1.667zm0 1.111a.556.556 0 00-.556.556v2.777c0 .307.249.556.556.556h5.555a.556.556 0 00.556-.556v-2.777a.556.556 0 00-.556-.556h-5.555z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M20.816 12.073c-.508-.733-1.438-1.031-2.175-1.069-.778-.039-1.778.187-2.427 1.019-.275.353-.39.782-.45 1.104a6.73 6.73 0 00-.096 1.104c-.006.396.01.812.039 1.213h1.114c-.082-1.105-.074-2.298.27-2.738.703-.902 2.343-.676 2.812 0 .235.339.234 1.582.175 2.738h1.113c.022-.444.035-.904.03-1.327a8.68 8.68 0 00-.062-1.017c-.033-.248-.104-.682-.343-1.027z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M5 4a3 3 0 00-3 3v10a3 3 0 003 3h8v-2H5a1 1 0 01-1-1V7a1 1 0 011-1h2.784a1 1 0 01.635.227l2.393 1.966a3 3 0 001.904.682H19a1 1 0 011 1V10h2v-.125a3 3 0 00-3-3h-6.284a1 1 0 01-.635-.227L9.688 4.682A3 3 0 007.784 4H5z"
      clipRule="evenodd"
    ></path>
  </svg>
)

export default FolderAuth
