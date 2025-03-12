import Link from 'next/link'

export default function Page() {
  return (
    <div className="test-page-container">
      <h1 className="test-title">Ceci est une page test</h1>
      <Link href="/" className="return-button">Retourner</Link>
    </div>
  )
}
