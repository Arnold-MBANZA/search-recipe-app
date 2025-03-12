export default function NotFound() {
  return (
    <div className="container">
      <div className="errorContent">
        <h2 className="errorMessage">404 - Page non trouvée</h2>
        <p className="errorText">Désolé, cette page n'existe pas.</p>
        <a href="/" className="return-button">🏠 Retour à l'accueil</a>
      </div>
    </div>
  );
}
