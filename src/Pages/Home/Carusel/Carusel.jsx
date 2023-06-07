
const Carusel = () => {
    return (
        <div>
            <div className="carousel w-full h-[700px] mt-5">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src='https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' className="w-full" />
                    <div className="absolute flex items-center justify-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-10/12 '>
                            <h1 className='text-6xl font-bold w-9/12'>Music is an expression of culture.</h1>
                            <p className='text-lg w-7/12 ml-5'>A musician should only sound like what they do, and no two musicians sound the same.Learn music durng summer camp & express your rythm </p>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-5 gap-3">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img src='https://images.unsplash.com/photo-1590377894621-65093facaef0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' className="w-full" />
                    <div className="absolute flex items-center justify-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-10/12 '>
                            <h1 className='text-6xl font-bold w-9/12'>Music is an expression of culture.</h1>
                            <p className='text-lg w-7/12 ml-5'>A musician should only sound like what they do, and no two musicians sound the same.Learn music durng summer camp & express your rythm </p>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-5 gap-3">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img src='https://images.unsplash.com/photo-1519683384663-c9b34271669a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' className="w-full" />
                    <div className="absolute flex items-center justify-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-10/12 '>
                            <h1 className='text-6xl font-bold w-9/12'>Music is an expression of culture.</h1>
                            <p className='text-lg w-7/12 ml-5'>A musician should only sound like what they do, and no two musicians sound the same.Learn music durng summer camp & express your rythm </p>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-5 gap-3">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <img src='https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' className="w-full" />
                    <div className="absolute flex items-center justify-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-10/12 '>
                            <h1 className='text-6xl font-bold w-9/12'>Music is an expression of culture.</h1>
                            <p className='text-lg w-7/12 ml-5'>A musician should only sound like what they do, and no two musicians sound the same.Learn music durng summer camp & express your rythm </p>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-5 gap-3">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Carusel;