export default function FrontPageLogged(){
    return(
        <div className="">
                <div className="">
                    <img src='https://i.pinimg.com/originals/68/a6/e0/68a6e0d38a46cd07501461643b484e6e.jpg' alt='Home' className='h-36 w-screen' />
                </div>
            <div className="h-3/4 w-screen flex items-baseline flex-wrap justify-center">
                <Project
                    title="Project 1"
                    profission="Profission 1"
                    image="https://static.poder360.com.br/2020/11/bolsonaro-twitter-meme-18-nov.gif"
                    description=""
                />
                <Project
                    title="Project 1"
                    profission="Profission 1"
                    image="https://static.poder360.com.br/2020/11/bolsonaro-twitter-meme-18-nov.gif"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
                    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
                />
                <Project
                    title="Project 1"
                    profission="Profission 1"
                    image="https://static.poder360.com.br/2020/11/bolsonaro-twitter-meme-18-nov.gif"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
                />
                <Project
                    title="Project 1"
                    profission="Profission 1"
                    image="https://static.poder360.com.br/2020/11/bolsonaro-twitter-meme-18-nov.gif"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
                />
                <Project
                    title="Project 1"
                    profission="Profission 1"
                    image="https://static.poder360.com.br/2020/11/bolsonaro-twitter-meme-18-nov.gif"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
                />
                <Project
                    title="Project 1"
                    profission="Profission 1"
                    image="https://static.poder360.com.br/2020/11/bolsonaro-twitter-meme-18-nov.gif"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
                />
                <Project
                    title="Project 1"
                    profission="Profission 1"
                    image="https://static.poder360.com.br/2020/11/bolsonaro-twitter-meme-18-nov.gif"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
                    lorem ipsum lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
                    
                />
                <Project
                    title="Project 1"
                    profission="Profission 1"
                    image="https://static.poder360.com.br/2020/11/bolsonaro-twitter-meme-18-nov.gif"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
                />
                
            </div>
        </div>
    )
}

interface interProject{
    image: string;
    profission: string;
    title: string;
    description: string;

}
function Project(props: interProject){
    return(
        <div className="flex flex-col w-1/5 mx-2 my-1 bg-neutral-900">
            <img src={props.image} alt='' className='object-scale-down' />
            <div className="m-2">
                <p>{props.profission}</p>
                <h3 className="text-2xl bold my-2">{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}