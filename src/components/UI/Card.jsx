const Card = ({ children, title }) => {
  return (
    <div className="bg-white w-96 rounded shadow-lg p-8">
      <h2 className="text-3xl font-semibold mb-6">{title}</h2>
      {children}
    </div>
  );
};
export default Card;
