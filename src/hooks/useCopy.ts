import { toast } from "keep-react"
import { useRef, useState } from "react"
import { BorderRadiusTemplate } from "../types"

interface Props {
  borderRadius: BorderRadiusTemplate
}

export const useCopy = ({ borderRadius }: Props) => {
  const [isCopied, setIsCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const value = `border-radius: ${borderRadius};`

  const copy = () => {
    inputRef.current?.select()
    navigator.clipboard.writeText(value)
    setIsCopied(true)
    toast.success("css copied successfully!")

    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
  }

  return {
    value,
    copy,
    inputRef,
    isCopied,
  }
}
