import Link from 'next/link'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='flex items-center'>
      <Image
        src='/images/logo/xave-logo.png'
        alt='Xave Tech Logo'
        width={120}
        height={40}
        priority
      />
    </Link>
  )
}

export default Logo