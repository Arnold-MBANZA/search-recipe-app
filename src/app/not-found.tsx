import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container">
      <div className="errorContent">
        <h2 className="errorMessage">404 - Page non trouvée</h2>
        <p className="errorText">Désolé, cette page n&apos;existe pas.</p>
        <Link href="/" className="return-button">🏠 Retour à l&apos;accueil</Link>
      </div>
    </div>
  );
}
