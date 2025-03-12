import { Recipe } from '@/types/recipe.model'
import React from 'react'
import Image from 'next/image'

type Props = {
    recipe: Recipe
}

export default function RecipeCard({recipe}: Props) {
  return (
    <div className="recipe-card">
        <Image src={recipe.image} alt={recipe.name} className='recipe-card_image' width={200} height={160}/>
        <div className='recipe-card-content'>
            <h2 className='recipe-card_title'>{recipe.name}</h2>
            <p className='recipe-card_details'>
                <span>Prep: {recipe.prepTimeMinutes} mins</span>
                <span>Cook: {recipe.cookTimeMinutes} mins</span>
                <span>Servings: {recipe.servings}</span>
            </p>

            <p className='recipe-card_difficulty'>Difficulty: {recipe.difficulty}</p>
            <div className='recipe-card_tags'>
                {recipe.tags.map((tag, index) => (
                    <span key={index} className='recipe-card_tag'>{tag}</span>
                ))}
            </div>
            <div className='recipe-card_footer'>
                <span className='recipe-card_rating'>
                    {recipe.rating} ({recipe.reviewCount} review)
                </span>
                <span className='recipe-card_cuisine'>{recipe.cuisine}</span>
            </div>
        </div>     
    </div>
  )
}