import Image from "next/image";

const page = async (params) => {
  const slug = params.params.slug;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${slug}&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0d710168c8msha92e427e9b2e23ap1fcf5cjsn2971e17cace7",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;

  return (
    <>
      <div className="container mx-auto px-4 mt-5">
        <h2 className="font-bold text-xl mb-5">
          {" "}
          Netflix \ <span> {main_data.type} </span>{" "}
        </h2>
        <div>
          <div>
            <Image
              src={main_data.backgroundImage.url || "/Images/movies.jpeg"}
              alt={main_data.title}
              width={600}
              height={300}
            />
          </div>
          <div className="mt-3">
            <h1 className="font-bold text-2xl mb-2">{main_data.title}</h1>
            <p className="font-medium text-base mb-2">{main_data.synopsis}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
