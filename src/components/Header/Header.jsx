
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex items-center justify-between py-5 border-b border-b-slate-500'>
            <h1 className='text-3xl text-center font-bold text-slate-800'>Knowledge Cafe</h1>
            <div>
                <img className='w-16 rounded-full' src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;