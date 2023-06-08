import { ComponentProps, FC } from "react"

const Yarn: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#60A5FA"
      fillRule="evenodd"
      d="M5.724 20.594c-.175-.02-.35-.108-.526-.196a1.006 1.006 0 01-.201-.13c-.228-.192-.262-.45-.1-.773 0-.05.025-.1.05-.15.025-.05.05-.1.05-.151-.401 0-.602-.2-.702-.502-.502-1.304-.402-2.308.602-3.31.027-.055.053-.101.078-.144.069-.119.122-.212.122-.359 0-1.304.201-2.508 1.104-3.612a4.278 4.278 0 011.204-1.103c.2-.1.2-.201.1-.402-.4-.502-.602-1.003-.702-1.605-.08-.402.096-.803.273-1.204.044-.1.088-.201.128-.301.1-.1.201-.201.301-.201.295-.074.535-.255.761-.426.082-.062.163-.123.243-.176.702-.702 1.505-1.003 2.508-1.003.195 0 .295-.095.301-.192v-.01c.01-.037.02-.076.032-.114.053-.18.126-.358.22-.538a3.866 3.866 0 01.35-.551l.301-.301c.154-.154.367-.19.503-.063a.39.39 0 01.1.163c.205.343.364.686.508.997l.012.025a14.383 14.383 0 00.184.388l.004.007c.098.189.197.186.295.088.356-.152.531-.228.644-.173.11.053.16.229.259.575a8.883 8.883 0 01.205 1.268c.137 1.648-.248 3.232-1.209 4.752-.05.1-.125.2-.2.3-.076.101-.15.202-.201.302-.1.2-.1.3.1.502a5.338 5.338 0 011.706 3.11 7.262 7.262 0 01.058.564 8.394 8.394 0 01-.058 1.643c-.025.1-.037.175-.037.23 0 .166.112.147.338.072a8.193 8.193 0 00.552-.18A7.538 7.538 0 0017 17.253a6.38 6.38 0 00.439-.267l.254-.146c.427-.249.83-.483 1.281-.629a3.11 3.11 0 01.572-.128c.104 0 .197-.012.285-.023l.072-.01c.058-.006.116-.012.176-.011a.755.755 0 01.771.747c0 .3-.2.502-.501.602a5.171 5.171 0 00-.803.229 7.12 7.12 0 00-1.353.69c-.19.121-.374.25-.553.385a9.713 9.713 0 01-1.71.943 11.807 11.807 0 01-1.602.562c-.1 0-.3.1-.401.201-.314.235-.628.287-.99.346-.1.016-.205.033-.314.055l-.255.024c-1.005.092-1.938.177-2.956.177l-.214-.001a1.077 1.077 0 01-.081.06l-.006-.009.03-.053a3.242 3.242 0 01-.732-.098 1.534 1.534 0 01-.235-.1 1.275 1.275 0 01-.167-.106.954.954 0 01-.199-.199.724.724 0 01-.102-.196c-.072-.287-.04-.522.092-.707a.825.825 0 01.209-.197.623.623 0 00.247-.053l.023-.01c.048-.02.09-.037.131-.037a.778.778 0 01-.4-.401c-.101-.1-.101-.1-.202 0a.965.965 0 00-.05.124l-.001.002a2.32 2.32 0 00-.049.175c-.025.1-.05.2-.1.3-.144.48-.333.798-.6.979a.986.986 0 01-.213.109 1.38 1.38 0 01-.523.075 2.807 2.807 0 01-.47-.058.635.635 0 01-.076-.005zm-.181 1.991a3.434 3.434 0 01-1.215-.385l-.025-.013c-.476-.238-1.102-.702-1.379-1.533a2.491 2.491 0 01-.115-.528 2.866 2.866 0 01-.394-.75c-.316-.831-.52-1.773-.358-2.774.14-.855.52-1.59 1.05-2.225.054-1.384.364-2.914 1.52-4.344.136-.18.29-.363.46-.543a5.78 5.78 0 01-.252-.978c-.14-.746.033-1.382.168-1.768a7.327 7.327 0 01.25-.614c.04-.093.068-.155.094-.221a2 2 0 01.45-.679c.04-.04.185-.187.358-.316.114-.086.382-.276.77-.384a7.11 7.11 0 00.151-.112l.004-.004.152-.112a5.194 5.194 0 012.627-1.35c.136-.248.292-.485.461-.711.057-.076.12-.147.186-.214l.301-.301c.425-.425 1.124-.806 1.974-.712.87.097 1.511.648 1.83 1.323.047.08.092.163.136.246.17.028.348.078.532.159.793.353 1.088 1.038 1.17 1.234a5.442 5.442 0 01.226.707c.585 2.455.284 4.856-.986 7.099a7.377 7.377 0 011.385 3.104c.563-.314 1.326-.675 2.224-.787.073-.01.146-.014.22-.015h.002l.044-.006.032-.004a5.11 5.11 0 01.152-.018c.288-.03.722-.04 1.233.13a2.754 2.754 0 011.87 2.6c0 1.451-1.065 2.23-1.87 2.5a2.008 2.008 0 01-.24.063c-.606.121-1.234.443-1.901.943a1.99 1.99 0 01-.053.039c-1.186.83-2.55 1.403-3.782 1.754-.776.523-1.71.64-1.94.669a.953.953 0 00-.05.006c-.07.014-.14.025-.211.031l-.266.024c-.991.091-2.012.185-3.126.185h-.023c-.32 0-.824 0-1.466-.16a1.986 1.986 0 01-.147-.043 3.533 3.533 0 01-.571-.25c-.6.16-1.186.122-1.662.038zm3.508-1.41c.002 0 .001 0-.001.001zM15.304 3.73a1.6 1.6 0 00.01.022c0-.002-.003-.01-.01-.022zm-8.434.838zM6.498 8.38l.013-.006h-.002a1.268 1.268 0 00-.01.006z"
      clipRule="evenodd"
    ></path>
  </svg>
)

export default Yarn
