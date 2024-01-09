import MovieCard from "@/app/components/MovieCard";

const Movie = async () => {
  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0d710168c8msha92e427e9b2e23ap1fcf5cjsn2971e17cace7",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const data = await fetch(url, options);
  const response = await data.json();
  const main_data = response.titles;
  console.log(main_data);

  return (
    <>
      <div className="container mx-auto px-4 mt-10">
       
        <div className="grid grid-cols-3 gap-5">
          {main_data?.slice(0,12)?.map((item, index) => (
            <div className=" border-[1px] rounded-lg border-black border-solid w-full ">
              <MovieCard key={index} {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movie;
