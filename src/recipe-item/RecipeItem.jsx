import styles from './RecipeItem.module.css';
import { useSelector, useDispatch } from 'react-redux';

const RecipeItem = ({ recipe }) => {
  const { favorites } = useSelector((state) => state);

  const dispatch = useDispatch();

  const isExist = favorites.some((r) => r.id === recipe.id);

  return (
    <div className={styles.item}>
      {/* <img src="" alt="img" /> */}
      <h3>{recipe.name}</h3>
      <button onClick={() => dispatch(actions.toggleFavorites(recipe))}>
        {isExist ? 'Remove from' : 'Add to'} favorites
      </button>
    </div>
  );
};

export default RecipeItem;
