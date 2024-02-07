import notFoundImg from '../../assets/404-animation.gif'

const Error = () => {
    return (
        <div>
            <img className='w-screen h-screen' src={notFoundImg} alt="" />
        </div>
    );
};

export default Error;