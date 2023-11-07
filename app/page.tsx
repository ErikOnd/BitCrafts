import ServiceTable from '@/app/_components/ServiceTable';

export default function Home() {
  return (
    <div className="px-10">
      <main className="mb-20">
        <div className="flex flex-col items-center">
          <div className="mt-32 max-w-md text-center">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-10">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div>
            <div className="join mr-5">
              <input
                type="text"
                placeholder="Was suchen sie?"
                className="input input-bordered w-full mb-5"
              />
            </div>
            <div className="join mr-5">
              <div>
                <div>
                  <input
                    className="input input-bordered join-item mb-5"
                    placeholder="PLZ oder Ort"
                  />
                </div>
              </div>
              <select className="select select-bordered join-item">
                <option disabled selected>
                  Radius
                </option>
                <option>5km</option>
                <option>10km</option>
                <option>20km</option>
                <option>50km</option>
                <option>100km</option>
                <option>200km</option>
              </select>
            </div>
            <button className="btn btn-primary">Finden</button>
          </div>
        </div>
      </main>
      <ServiceTable />
    </div>
  );
}
