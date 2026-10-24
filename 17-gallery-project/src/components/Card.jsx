const Card = ({ e }) => {
  return (
    <div>
      <a href={e.url} target="_blank" rel="noopener noreferrer">
        <div className="w-full rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/50 hover:-translate-y-0.5">
          <img
            src={`https://picsum.photos/id/${e.id}/600/400`}
            alt={`Photo by ${e.author}`}
            loading="lazy"
            className="h-60 w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </a>
      <div className="py-4 gap-2 flex flex-col">
        <h3 className="text-lg font-bold">{e.author}</h3>
        <p className="text-sm text-gray-400">
          {e.width} × {e.height} — click to open the full image.
        </p>
      </div>
    </div>
  );
};

export default Card;
