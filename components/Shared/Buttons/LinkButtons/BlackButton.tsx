import Link from 'next/link'

interface Props {
  href: string
  text: string
}

function BlackButton({ href, text }: Props) {
  return (
    <Link href={href} className="p-4 rounded-xl bg-black text-white font-bold hover:scale-110">
      {text}
    </Link>
  )
}

export default BlackButton