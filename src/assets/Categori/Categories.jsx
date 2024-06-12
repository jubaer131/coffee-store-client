
import { CategoryData } from './CategoryData';
import CategoriBox from './CategoriBox';

const Categories = () => {
    return (
        <div className='pt-4 flex items-center justify-between overflow-x-auto'>
            {CategoryData.map(item => (
                <CategoriBox key={item.label} label={item.label} icon={item.icon} />
            ))}
        </div>
    );
};

export default Categories;

