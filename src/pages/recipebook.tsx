import { useState, useEffect } from "react";
import recipes from "../data/recipes.json";

export default function RecipeBook() {
    return (
        <div className="w-[90%] max-w-7xl py-6">
            {recipes.map((recipe) => (
                <div
                    className="bg-orange-300 text-coffee-bean-800 border-2 p-2 m-2 rounded-lg shadow-lg drop-shadow-2xl"
                    key={recipe.id}>
                    <h1 className="text-2xl">{recipe.name}</h1>
                    <div className="h-px border-t border-green-600 w-[80%] mx-4" />
                    <ul key={recipe.name}>
                        {recipe.ingredients.map((item) => (
                            <li className="text-black pl-2">
                                {item.amount} {item.unit} {item.item}{" "}
                                {item.note && (
                                    <p className="pl-7 pb-1">{item.note}</p>
                                )}
                            </li>
                        ))}

                        <li>
                            <h3 className="text-lg">Directions:</h3>{" "}
                            <ol className="list-decimal pl-6">
                                {recipe.steps.map((step, i) => (
                                    <li key={i}>{step}</li>
                                ))}
                            </ol>
                        </li>
                        <li>Makes: {recipe.makes}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
}
