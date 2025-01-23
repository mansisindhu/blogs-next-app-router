import Link from 'next/link'

export function Footer() {
    return (
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-gray-600">© 2024 InkWave. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-gray-700 hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-700 hover:text-blue-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    )
  }