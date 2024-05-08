import Link from 'next/link'

interface Props {
  href: string
  text: string
}

function OpacityButton({ href, text }: Props) {
  return (
    <Link href={href} className="bg-opacity-10 p-4 font-bold rounded-xl bg-black hover:scale-110 hover:underline hover:underline-offset-2">
      {text}
    </Link>
  )
}

export default OpacityButton