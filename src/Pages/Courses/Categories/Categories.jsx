import { categories } from './CategoriesData';
import CategoryCard from './CategoryCard';

const Categories = () => {
    return (
        <div>
            <div className='grid grid-cols-5 px-24 '>
                {categories.map(category =>
                    <CategoryCard key={category.label}
                        icon={category.icon}
                        label={category.label}
                    ></CategoryCard>)}

            </div>
          
        </div>


    );
};

export default Categories;