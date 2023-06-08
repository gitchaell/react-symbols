import type { ComponentProps, FC } from "react"

const Next: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M19.576 21.775l-2.204-3.34-5.518-8.365a595.829 595.829 0 00-3.383-5.087c-.146-.157-.24-.18-.794-.18-.472 0-.519.005-.63.058a.955.955 0 00-.204.169.42.42 0 00-.082.249l-.011 5.345-.006 5.365a.513.513 0 00.239.445.504.504 0 00.284.088h.317c.414 0 .49-.012.578-.059a.496.496 0 00.245-.245c.046-.092.046-.253.058-4.079v-.12c.004-1.528.01-2.868.018-3.571.004-.33.123-.363.309-.092.849 1.236 1.69 2.476 2.526 3.72l2.805 4.148 2.24 3.028c1.16 1.568 2.147 2.89 2.264 3.042.008.01.022.017.021.03M16.985 4.608a.554.554 0 00-.172-.132c-.088-.053-.158-.053-.566-.053-.432 0-.467 0-.584.059a.56.56 0 00-.268.344c-.018.064-.03 1.365-.03 3.675v3.284a1 1 0 00.164.547l.706 1.08c.26.396.875.212.875-.262V9.82c.006-3.43 0-4.953-.017-5.023a.553.553 0 00-.108-.189z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Next;
