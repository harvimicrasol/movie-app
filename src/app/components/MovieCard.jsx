import Image from "next/image";
import Link from "next/link";

const MovieCard = (item) => {
  const { id, synopsis, title } = item.jawSummary;
  return (
    <>
      <div className="px-8 py-10">
        <Image
          src={item.jawSummary.backgroundImage.url || "/Images/movies.jpeg"}
          alt="movie-img"
          width={1000}
          height={350}
          className="w-full h-full cursor-pointer"
        />
        <h2 className="text-xl font-bold my-3 line-clamp-1">{title}</h2>
        <p className="text-base line-clamp-3 font-medium mb-6">{synopsis}</p>
        <Link href={`/Pages/Movies/${id}`}  className="capitalize text-sm font-medium bg-black text-white px-4 py-3 rounded-full ">
          Read More
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
