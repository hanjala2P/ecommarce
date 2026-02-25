
import PlantCards from './PlantCards';
import { useLoaderData } from 'react-router';
const Home = () => {
    // const [plants, setPlants]=useState([])
    // useEffect(()=>{
    //     fetch('https://openapi.programming-hero.com/api/plants')
    //     .then(res=>res.json())
    //     .then(data=> setPlants(data?.plants))
    // },[])
    const {plants} = useLoaderData()

    return (
        <div className='mx-10 my-10'>
              
                <p className="text-left text-3xl font-bold">Plant Cards</p>
               <div className='grid grid-cols-1 gap-4 mt-2 justify-items-center my-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                 {
                    plants.map(plant => <PlantCards key={plant.id} plant={plant}></PlantCards>)
                }
               </div>
        </div>
    );
};

export default Home;