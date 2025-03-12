"use client";

type Props = {
    error: Error;
    reset: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <div className="container">
      <div className="errorContent">
        <h2 className="errorMessage">❌ Oups, une erreur est survenue !</h2>
        <p className="errorText">{error.message || "Impossible de charger la page."}</p>
        
        <div className="flex gap-4">
          <button onClick={reset} className="retryButton">
            🔄 Réessayer
          </button>
          <a href="/" className="return-button">
            🏠 Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
}
