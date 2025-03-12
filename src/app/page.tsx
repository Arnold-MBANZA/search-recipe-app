import RecipeList from "@/components/recipe-list";
import RecipesTags from "@/components/recipes-tags";
import SearchRecipe from "@/components/search-recipe";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <main className="main-container">
      <h1 className="main-title">Bienvenue dans mon application!</h1>
      <SearchRecipe />
      <Suspense fallback={<Loading />}>
        <RecipesTags />
      </Suspense>
      <Link href="/test" className="button-link">
        Visiter la page test
      </Link>

      <h2 className="secondary-title">Recherche des données en NextJs</h2>
      <Suspense fallback={<Loading />}>
        <RecipeList />
      </Suspense>
    </main>
  );
}
