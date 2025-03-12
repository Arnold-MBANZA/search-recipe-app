"use client";

import { Recipe } from "@/types/recipe.model";
import { getRecipes, searchRecipe } from "@/utils/get";
import { notFound, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import RecipeCard from "./recipe-card";

export default function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    async function fetchRecipes() {
      setLoading(true);
      try {
        const result = query ? await searchRecipe(query) : await getRecipes();
        console.log("Résultat des recettes:", result); // 🔍 Vérifie les résultats des recettes
        if (!result || !result.recipes || result.recipes.length === 0) {
          notFound(); // 🔹 Redirige vers la page 404 si aucune recette n'est trouvée
        } else {
          setRecipes(result.recipes);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des recettes:", error);
      }
      setLoading(false);
    }
    fetchRecipes();
  }, [query]);

  return (
    <div className="recipe-container">
      {loading ? (
        <p>Chargement des recettes...</p>
      ) : recipes.length === 0 ? (
        <p className="text-red-500">🚫 Aucune recette trouvée</p>
      ) : (
        recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
      )}
    </div>
  );
}
