import { FaArrowRight } from "react-icons/fa"
import './Button.scss'
import { Link } from "react-router-dom"

type ButtonProps = {
  text: string
  label: string
  href?: string
  className?: string
}

const Button = ({
  text,
  label,
  href,
  className,
}: ButtonProps) => {
  return (
    <>
      {
        href ?
          <Link
            aria-label={label}
            to={href}
            className={`button ${className}`}
          >
            {text}
            <FaArrowRight className="icon"/>
          </Link>
          :
          <button
            aria-label={label}
            className={`button ${className}`}
          >
            {text}
            <FaArrowRight className="icon"/>
          </button>
      }
    </>
  )
}

export default Button
