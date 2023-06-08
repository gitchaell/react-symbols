import { ComponentProps, FC } from "react"

const Rust: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="#EA580C"
      fillRule="evenodd"
      d="M12.58 2.136a.287.287 0 00-.488 0l-.526.85a8.974 8.974 0 00-.232.022l-.683-.73a.287.287 0 00-.478.096l-.35.935c-.075.021-.15.044-.224.067l-.812-.583a.287.287 0 00-.45.187l-.162.989a9.088 9.088 0 00-.204.11l-.913-.417a.287.287 0 00-.406.272l.036 1.005a9.099 9.099 0 00-.175.144l-.98-.231a.287.287 0 00-.345.345l.231.98a9.125 9.125 0 00-.144.175L4.27 6.316a.287.287 0 00-.271.406l.416.913a9.036 9.036 0 00-.11.203L3.317 8a.287.287 0 00-.187.45l.584.813a8.953 8.953 0 00-.068.223l-.935.35a.287.287 0 00-.095.479l.73.682a8.966 8.966 0 00-.023.233l-.85.526a.287.287 0 000 .488l.85.526c.007.078.014.156.023.233l-.73.682a.287.287 0 00.095.479l.935.35.068.223-.584.812a.287.287 0 00.187.451l.99.162c.035.068.072.135.109.203l-.416.913a.287.287 0 00.271.406l1.006-.036c.047.059.095.117.143.174l-.23.981a.287.287 0 00.344.345l.981-.23c.057.048.115.095.174.142l-.036 1.006a.287.287 0 00.406.272l.914-.417c.067.038.135.074.203.11l.161.99a.287.287 0 00.451.186l.813-.584c.074.024.148.046.223.068l.35.935a.287.287 0 00.478.095l.683-.73c.077.01.154.017.232.023l.526.85a.287.287 0 00.489 0l.526-.85c.078-.006.155-.014.232-.023l.682.73a.287.287 0 00.479-.095l.35-.935c.075-.022.15-.044.223-.068l.813.584a.287.287 0 00.45-.187l.162-.99a8.77 8.77 0 00.203-.109l.913.417a.287.287 0 00.406-.272l-.035-1.006c.058-.047.116-.094.174-.143l.98.231a.287.287 0 00.346-.345l-.231-.98.143-.175 1.006.036a.287.287 0 00.271-.406l-.416-.913a9.4 9.4 0 00.109-.203l.99-.162a.287.287 0 00.187-.45l-.584-.813a8.43 8.43 0 00.067-.223l.935-.35a.287.287 0 00.096-.479l-.73-.682c.009-.077.016-.155.023-.233l.85-.526a.287.287 0 000-.488l-.85-.526a8.844 8.844 0 00-.023-.233l.73-.682a.287.287 0 00-.096-.479l-.934-.35a9.246 9.246 0 00-.068-.223l.584-.812A.287.287 0 0021.357 8l-.99-.162a8.92 8.92 0 00-.11-.203l.417-.913a.287.287 0 00-.271-.406l-1.006.036a9.178 9.178 0 00-.143-.174l.23-.981a.287.287 0 00-.345-.345l-.98.23a9.43 9.43 0 00-.174-.142l.035-1.006a.287.287 0 00-.405-.272l-.914.417a9.11 9.11 0 00-.203-.11l-.162-.99a.287.287 0 00-.45-.186l-.813.584a9.088 9.088 0 00-.223-.068l-.35-.935a.287.287 0 00-.479-.095l-.682.73a9.062 9.062 0 00-.232-.023l-.526-.85zm-.257 1.62a.592.592 0 01.578.596.595.595 0 11-.578-.595zm1.363.98A7.324 7.324 0 0118.7 8.309l-.702 1.585a.547.547 0 00.275.717l1.352.6c.041.422.047.847.015 1.27h-.752c-.075 0-.106.05-.106.123v.344c0 .812-.457.99-.859 1.034-.383.044-.806-.161-.86-.394-.22-1.24-.583-1.526-1.152-1.975l-.041-.033c.736-.467 1.502-1.158 1.502-2.08 0-.998-.683-1.625-1.148-1.934-.655-.43-1.379-.516-1.574-.516H6.88a7.324 7.324 0 014.098-2.312l.916.96a.54.54 0 00.766.018l1.026-.978zm-8.46 4.407a.595.595 0 11-.034 1.19.595.595 0 01.034-1.19zm14.192.026a.595.595 0 11-.035 1.19.595.595 0 01.035-1.19zm-13.07.096h1.037v4.678H5.291a7.324 7.324 0 01-.237-2.797l1.282-.57a.542.542 0 00.276-.716l-.264-.595zm4.33.05h2.47c.128 0 .901.147.901.727 0 .48-.593.653-1.081.653h-2.293l.002-1.38zm0 3.36h1.892c.172 0 .924.05 1.164 1.011.026.104.064.291.107.503.078.389.174.861.247 1.06.113.345.57 1.034 1.058 1.034h3.089c-.207.277-.433.54-.677.785l-1.258-.27a.544.544 0 00-.645.417l-.298 1.394a7.323 7.323 0 01-6.108-.03l-.298-1.392a.542.542 0 00-.643-.418l-1.23.264a7.32 7.32 0 01-.636-.75h5.984c.067 0 .113-.011.113-.074v-2.117c0-.061-.046-.075-.113-.075h-1.75l.001-1.341zm-2.763 4.848a.595.595 0 11-.034 1.19.595.595 0 01.034-1.19zm8.814.027a.596.596 0 11-.035 1.19.596.596 0 01.035-1.19z"
      clipRule="evenodd"
    ></path>
  </svg>
)

export default Rust
