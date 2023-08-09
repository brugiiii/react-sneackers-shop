import Card from "../components/Card/Card";
function Favorites({
  items,
  onAddToFavorite,
  onAddToCart,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {items.map((item, index) => (
          <Card
            key={index}
            favorited={true}
            onClickFav={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
export default Favorites;
