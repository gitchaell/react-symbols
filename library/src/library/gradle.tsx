import { ComponentProps, FC } from "react"

const Gradle: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#2DD4BF"
      d="M20.022 6.23a2.854 2.854 0 00-3.966-.07.277.277 0 00-.088.196c0 .074.03.145.081.197l.356.368a.272.272 0 00.355.025c.282-.213.626-.327.98-.326A1.634 1.634 0 0118.9 9.41c-2.266 2.266-5.29-4.082-12.154-.816a.933.933 0 00-.416 1.307l1.176 2.035a.933.933 0 001.262.347l.03-.017-.024.017.522-.293c.582-.361 1.13-.771 1.642-1.226a.29.29 0 01.376 0 .267.267 0 01.102.207.276.276 0 01-.09.208 12.31 12.31 0 01-1.73 1.285h-.017l-.522.29c-.22.126-.47.191-.723.19a1.502 1.502 0 01-1.295-.742L5.927 10.28c-2.137 1.51-3.434 4.417-2.738 8.107a.274.274 0 00.266.22h1.268a.27.27 0 00.268-.237 1.856 1.856 0 013.684 0 .272.272 0 00.27.237h1.235a.27.27 0 00.268-.237 1.859 1.859 0 013.685 0 .27.27 0 00.268.237h1.22a.27.27 0 00.27-.266c.03-1.719.493-3.694 1.815-4.683 4.58-3.425 3.376-6.363 2.316-7.429zm-4.67 5.181l-.874-.438a.549.549 0 11.873.44v-.002z"
    ></path>
  </svg>
)

export default Gradle
