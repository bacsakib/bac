
import img from '../../../public/img/ah.jpg'
const TrainerSection = () => {
    return (
        <div className='text-center lg:w-5/12 w-full rounded-lg lg:px-24 bg-gradient-to-r from-cyan-50 to-blue-50 h-96 py-12 '>
            <div className='flex justify-center'>
                <img className='w-40' src={img} alt="" />
            </div>
            <div className='my-2'>
                <p>Instuctor</p>
                <h1 className='text-3xl font-bold'>Ahsanullah Shaon</h1>
            </div>
        </div>
    );
};

export default TrainerSection;