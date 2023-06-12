import { Link } from "react-router-dom";


const Features = () => {
    return (
        <section className="p-4 lg:p-8 bg-gray-100 text-gray-800">
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://img.freepik.com/free-photo/portrait-attractive-hispanic-brunette-teaching-music-group-preschool-pupils_662251-2635.jpg?w=740&t=st=1686584682~exp=1686585282~hmac=7dab9ff8eef05a823b842a731e54641575416a10bd1eff4e2e98b5cd0d7ab6e5" alt="" className="h-80 bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                        <span className="text-xs uppercase text-gray-600">Join, with us</span>
                        <h3 className="text-3xl font-bold">Amaizing envoirment to learn music.</h3>
                        <p className="my-6 text-gray-600">The good news is that you can learn on your own and still develop your skills quite well. If you want a more professional level of expertise,</p>
                        <Link to={'/classes'}>
                            <button className="btn btn-primary">Enroll Now</button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <img src="https://img.freepik.com/free-photo/drum-kit-drums-studio-beautiful-background-close-up_169016-6584.jpg?w=740&t=st=1686584816~exp=1686585416~hmac=d40bada3b324a93debc9124b9da8c3f982060e568c0210769fe2a02440f2d822" alt="" className="h-80 bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                        <span className="text-xs uppercase text-gray-600">tunning your dream!</span>
                        <h3 className="text-3xl font-bold">We have many update instrument musical features</h3>
                        <p className="my-6 text-gray-600">flute, oboe, clarinet, bassoon, horn, trumpet, harp, celesta, violin, viola, cello, and double bass..</p>

                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://img.freepik.com/free-photo/medium-shot-man-playing-instrument_23-2148845414.jpg?w=900&t=st=1686584579~exp=1686585179~hmac=2faa27ff0e504360fc79e9e8e517b718af8c4c0a61d6209d566100e01f57d704" alt="" className="h-80 bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                        <span className="text-xs uppercase text-gray-600">Meet our instructors</span>
                        <h3 className="text-3xl font-bold">We offered world class music instructorsl</h3>
                        <p className="my-6 text-gray-600">A music teacher is a professional who teaches music as a subject in the school curriculum. Music teachers instruct students in practical methods and theory </p>
                        <Link to={'/instructor'}>
                            <button className="btn btn-primary">More Info +</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;