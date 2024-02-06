import React, { useContext } from 'react';
import banner from '../../../assets/img/home-img-02.png';
import service1 from '../../../assets/img/hatha-yoga.png';
import HomeNavbar from '../../HomeNavbar/HomeNavbar';
import { AuthContext } from '../../../AuthProvider/AuthProvider';


const Home = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>;
    }
    return (
        <div>
            <div className='container-full mx-auto'>
                <HomeNavbar />
            </div>

            <div className='bg-blend-screen bg-gradient-to-r from-blue-500 to-green-500'>
                <div className="hero min-h-screen bg-hero-pattern bg-cover opacity-60">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        {/* Other content here */}
                        <div></div>
                        <div>
                            <h1 className="text-2xl text-black">Start Doing Yoga</h1>
                            <h1 className="text-5xl text-[#40e09b] font-bold leading-tight">Start A Healthy <br /> Way Of Life, <br /> Today!</h1>
                            <p className="py-6 text-black lg:pr-[45rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.​</p>
                            <button className="btn btn-primary rounded-full">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Sectin  */}
            <div className="min-h-screen bg-[#CBD5E1] py-28">
                <div className="flex-col lg:flex-row flex justify-between">
                    <img src={banner} />
                    <div className='grid lg:grid-cols-3'>
                        <div className="card w-96">
                            <figure className="px-10 pt-10">
                                <img src={service1} />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card w-96">
                            <figure className="px-10 pt-10">
                                <img src={service1} />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card w-96">
                            <figure className="px-10 pt-10">
                                <img src={service1} />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card w-96">
                            <figure className="px-10 pt-10">
                                <img src={service1} />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card w-96">
                            <figure className="px-10 pt-10">
                                <img src={service1} />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card w-96">
                            <figure className="px-10 pt-10">
                                <img src={service1} />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
