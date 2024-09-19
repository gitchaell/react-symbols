import type { ComponentProps, FC } from "react"

const CloudflareWorkers: FC<ComponentProps<"svg">> = (props) => (
 <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  {...props}
 >
  <path
   fill="#FEF3C7"
   d="M8.623 20.131a2.3 2.3 0 01-.995-.23l4.163-7.508a.777.777 0 000-.753L7.628 4.135c.31-.153.65-.233.995-.233H12l4.198 7.57a1.125 1.125 0 010 1.09L12 20.132H8.623z"
  ></path>
  <path
   fill="#F59E0B"
   fillRule="evenodd"
   d="M20.698 10.891l-3.376-5.864a2.25 2.25 0 00-1.947-1.125h-3.376l4.198 7.57a1.125 1.125 0 010 1.09L12 20.132h3.376a2.25 2.25 0 001.947-1.126l3.376-5.864a2.248 2.248 0 000-2.25zM7.628 4.135l.214.386h.002L9.75 7.96 7.8 11.468a1.126 1.126 0 000 1.095l1.948 3.514-2.121 3.826a2.25 2.25 0 01-.952-.896L3.3 13.142a2.26 2.26 0 010-2.25l2.393-4.158-.06.102.108-.186.914-1.587.02-.036.003-.003c.22-.382.547-.691.941-.889l.002.004.007-.004z"
   clipRule="evenodd"
  ></path>
 </svg>
)

export default CloudflareWorkers
