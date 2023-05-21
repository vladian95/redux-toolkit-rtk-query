import './index.css';
import RecipeItem from './recipe-item/RecipeItem';

function App() {
  return (
    <>
      <RecipeItem
        recipe={{
          id: 1,
          name: 'ЛАЗАНЬЯ',
        }}
      />
      <RecipeItem
        recipe={{
          id: 2,
          name: 'КАША',
        }}
      />
      <RecipeItem
        recipe={{
          id: 2,
          name: 'ПАСТА',
        }}
      />
    </>
  );
}

export default App;
