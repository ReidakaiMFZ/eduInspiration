import Header from "./Header";
export default function ProjectView() {
  return (
    <div className="flex flex-nowrap flex-row items-stretch">
        <nav className="grid h-96 w-1/2 justify-center">
            <div className="flex justify-center mt-10">
                <img src="https://static.poder360.com.br/2020/11/bolsonaro-twitter-meme-18-nov.gif" alt="problema" className=''/>
            </div>
            <div className="h-22/100 flex flex-row mt-10 gap-x-1 rounded-lg justify-center">
                <img src="https://static.poder360.com.br/2020/11/bolsonaro-twitter-meme-18-nov.gif" alt="biblioteca" className=' rounded'/>
                <img src="https://static.poder360.com.br/2020/11/bolsonaro-twitter-meme-18-nov.gif" alt="biblioteca" className=' rounded'/>
                <img src="https://static.poder360.com.br/2020/11/bolsonaro-twitter-meme-18-nov.gif" alt="biblioteca" className=' rounded'/>
                <img src="https://static.poder360.com.br/2020/11/bolsonaro-twitter-meme-18-nov.gif" alt="biblioteca" className=' rounded'/>
            </div>
        </nav>

        <div className="h-full w-1/2 flex flex-col gap-y-2 mt-8">
            <h1 className="bold text-5xl">Problema</h1>
            <h6 className="mt-2 mb-5">curso/profissão</h6>
            <p className="break-all h-full">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat consequatur veniam porro eaque, cupiditate alias consequuntur? Dolorem laborum provident repudiandae, magni voluptatum cupiditate nisi iusto voluptas quasi eligendi molestiae repellendus.</p>
            <div className="flex flex-row-reverse mb-10 mr-10">
                <button type="submit" className="bg-gpink w-64 h-16 mt-8 rounded-lg">Casar com o projeto</button>
            </div>
        </div>
    </div>
  );
}