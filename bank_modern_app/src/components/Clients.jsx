import { clients } from "../constants";

const Clients = () => {
  return (
    <section id="clients" className="flex justify-center items-center my-12">
      <div className="flex justify-center items-center flex-wrap w-full">
        {clients.map((client) => {
          return (
            <div className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px]">
              <img
                src={client.logo}
                alt="client"
                className="sm:w-[192px] w-[100px] object-contain filter-glow ease-out duration-300"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
