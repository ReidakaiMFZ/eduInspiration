import ReactLoading from 'react-loading';

export default function Loading() {
    return (
        <div className='flex justify-center items-center h-max mt-32'>
            <ReactLoading type='spin' color='#901636' />
        </div>
    );
}
