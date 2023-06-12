
const AllInstructosData = ({ instructors }) => {
    const { name, image, email, role } = instructors
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-50 text-gray-900">
            <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xl font-large tracking-widest uppercase text-cyan-600">{name}</span>
                <h2 className="text-sm font-semibold tracking-wide">Email :{email}</h2>
                <h2 className="text-sm font-semibold tracking-wide">Profassion :Music {role}</h2>
            </div>
            <p className="text-gray-800">hey may also lead rehearsals in preparation for the schools musical performances.</p>
        </div>
    );
};

export default AllInstructosData;