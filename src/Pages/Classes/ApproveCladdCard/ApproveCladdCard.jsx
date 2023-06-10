const ApproveCladdCard = ({ clss }) => {
    const { name, Imge, seat, price } = clss

    return (
        <div className="card w-full h-100 bg-base-100 shadow-xl">
            <figure><img src={Imge} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Class Name : {name}</h2>
                <p>Available Seat:{seat}</p>
                <p>Price:${seat}</p>
                <p>Available Seat:{price}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default ApproveCladdCard;