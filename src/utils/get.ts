export const getRecipes = async () => {
    const reponse = await fetch("https://dummyjson.com/recipes", {next:{revalidate:60}});
    const data = await reponse.json();
    return data;
};

export const getTags = async () => {
    const reponse = await fetch("https://dummyjson.com/recipes/tags", {next:{revalidate:60}});
    const data = await reponse.json();
    return data;
};

export const searchRecipe = async (query: string) => {
    const reponse = await fetch(`https://dummyjson.com/recipes/search?query=${query}`, {next:{revalidate:60}});
    const data = await reponse.json();
    return data;
}