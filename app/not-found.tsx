import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/404.webp"
        alt="404 Background"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Oops! Page not found</p>
        <Link
          href="/"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}