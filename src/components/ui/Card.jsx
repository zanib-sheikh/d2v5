const Card = ({ title, value, children }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 w-full">
        <h3 className="text-gray-400 text-md font-semibold">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
        {children}
      </div>
    );
  };
  
  export default Card;
  