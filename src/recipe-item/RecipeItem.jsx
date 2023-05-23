import styles from './RecipeItem.module.css';
import { useSelector } from 'react-redux';

const RecipeItem = ({ recipe }) => {
  const { favorites } = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div className={styles.item}>
      {/* <img src="" alt="img" /> */}
      <h3>{recipe.name}</h3>
      <button>Add to favorites</button>
    </div>
  );
};

export default RecipeItem;
