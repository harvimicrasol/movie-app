

const Movie = async () => {
  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0d710168c8msha92e427e9b2e23ap1fcf5cjsn2971e17cace7",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const data = await fetch(url,options);
  const response = await data.json();
  console.log(response.titles);

  return (
    <>
      <div className="container mx-auto px-4 mt-5">Movie</div>
    </>
  );
};

export default Movie;
