
import MealSearchInput from "./components/MealSearchInput";

export const metadata = {
    title: "All Meals",
    description: "Meals loaded form themealdb API",  
};

export default async function MealsPage({ searchParams }) {
    const query = await searchParams;

    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`);
            const data = await res.json();
            return data.meals || [];
        } catch (error) {
            console.error("Error fetching meals:", error);
            return [];
        }
    };

    const meals = await fetchMeals();

    return (
        <div>
            <div className="p-4 flex justify-center">
                <MealSearchInput />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4'>
                {meals.length > 0 ? (
                    meals.map((singleMeal) => (
                        <div key={singleMeal.idMeal} className='border border-gray-300 p-4 space-y-5 rounded-xl'>
                            <img src={singleMeal.strMealThumb} alt={singleMeal.strMeal} className="w-full h-48 object-cover rounded" />
                            <p className='text-2xl font-bold'>{singleMeal.strMeal}</p>
                            <p>{singleMeal.strInstructions}</p>
                        </div>
                    ))
                ) : (
                    <p className="col-span-3 text-center text-gray-500">No meals found.</p>
                )}
            </div>
        </div>
    );
}