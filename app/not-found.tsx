import { FaceFrownIcon } from '@heroicons/react/24/outline'
import BackButton from './BackButton'

export default function NotFound() {
  return (
    <main className="global h-screen flex items-center justify-center gap-2">
      <div className="flex h-full flex-col items-center justify-center gap-2">
        <FaceFrownIcon className="w-10 text-gray-400" />
        <h2 className="text-xl font-semibold">404 Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <BackButton />
      </div>
    </main>
  )
}
