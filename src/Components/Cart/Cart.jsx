import PropTypes from 'prop-types';

const Cart = ({select, time, price}) => {

    return (
        <div className="w-[24%]">
            <div className="bg-slate-300 p-4 space-y-2 rounded-lg shadow-xl">
                <div className="bg-white py-4 px-2 text-sm rounded-lg">
                    <h1 className="mb-4">Courses Name :</h1>
                    <div>
                        {/* <p><span className="text-xl">1.</span> Pythone Crash Course</p> */}
                        {
                            select.map((sel, idx) => <p 
                                key={idx}
                                className='p-2 mb-2 bg-slate-200 rounded-sm'>{sel.name}</p>)
                        }
                    </div>
                </div>
                <div className="bg-white py-4 px-2 text-sm rounded-lg">
                    <h3>Total credit hour : {time}</h3>
                </div>
                <div className="bg-white py-4 px-2 text-sm rounded-lg">
                    <h3>Total Price : ${price}</h3>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    select: PropTypes.array,
    time: PropTypes.number,
    price: PropTypes.number
}

export default Cart;