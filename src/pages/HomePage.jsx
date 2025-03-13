import { useState } from "react";
import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { getRandomColor } from "../lib/utils";

const sampleRecipes = [
  {
    uri: "recipe_1",
    label: "Spaghetti Carbonara",
    image: "https://via.placeholder.com/400x300?text=Spaghetti+Carbonara",
    source: "Homemade Delights",
    healthLabels: ["High-Protein", "Low-Carb"],
    cuisineType: ["Italian"],
    yield: 4,
  },
  {
    uri: "recipe_2",
    label: "Classic Cheeseburger",
    image: "https://via.placeholder.com/400x300?text=Cheeseburger",
    source: "BBQ Masters",
    healthLabels: ["High-Protein", "Gluten-Free"],
    cuisineType: ["American"],
    yield: 2,
  },
  {
    uri: "recipe_3",
    label: "Vegetable Stir Fry",
    image: "https://via.placeholder.com/400x300?text=Vegetable+Stir+Fry",
    source: "Healthy Eats",
    healthLabels: ["Vegan", "Low-Fat"],
    cuisineType: ["Asian"],
    yield: 3,
  },
  {
    uri: "recipe_4",
    label: "Chicken Curry",
    image: "https://via.placeholder.com/400x300?text=Chicken+Curry",
    source: "Spicy Kitchen",
    healthLabels: ["Gluten-Free", "High-Protein"],
    cuisineType: ["Indian"],
    yield: 5,
  },
  {
    uri: "recipe_5",
    label: "Sushi Rolls",
    image: "https://via.placeholder.com/400x300?text=Sushi+Rolls",
    source: "Sushi World",
    healthLabels: ["Omega-3", "Low-Carb"],
    cuisineType: ["Japanese"],
    yield: 6,
  },
  {
    uri: "recipe_6",
    label: "French Onion Soup",
    image: "https://via.placeholder.com/400x300?text=French+Onion+Soup",
    source: "Parisian Bites",
    healthLabels: ["Gluten-Free", "Low-Fat"],
    cuisineType: ["French"],
    yield: 3,
  },
  {
    uri: "recipe_7",
    label: "Greek Salad",
    image: "https://via.placeholder.com/400x300?text=Greek+Salad",
    source: "Mediterranean Fresh",
    healthLabels: ["Vegan", "Low-Calorie"],
    cuisineType: ["Greek"],
    yield: 2,
  },
  {
    uri: "recipe_8",
    label: "Tacos al Pastor",
    image: "https://via.placeholder.com/400x300?text=Tacos+al+Pastor",
    source: "Mexican Delights",
    healthLabels: ["High-Protein", "Spicy"],
    cuisineType: ["Mexican"],
    yield: 4,
  }
];

const HomePage = () => {
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [loading, setLoading] = useState(false);

  const handleSearchRecipe = (e) => {
    e.preventDefault();
    const query = e.target.search.value.toLowerCase();
    setLoading(true);
    setTimeout(() => {
      const filteredRecipes = sampleRecipes.filter((recipe) =>
        recipe.label.toLowerCase().includes(query)
      );
      setRecipes(filteredRecipes);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSearchRecipe}>
          <label className="input shadow-md flex items-center gap-2">
            <Search size={"24"} />
            <input
              name="search"
              type="text"
              className="text-sm md:text-md grow"
              placeholder="What do you want to cook today?"
            />
          </label>
        </form>

        <h1 className="font-bold text-3xl md:text-5xl mt-4">Recommended Recipes</h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">Popular choices</p>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            [...Array(8)].map((_, index) => (
              <div key={index} className="flex flex-col gap-4 w-full">
                <div className="skeleton h-32 w-full"></div>
                <div className="flex justify-between">
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-24"></div>
                </div>
                <div className="skeleton h-4 w-1/2"></div>
              </div>
            ))
          ) : (
            recipes.map((recipe, index) => (
              <RecipeCard key={recipe.uri || index} recipe={recipe} bg={getRandomColor()} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
