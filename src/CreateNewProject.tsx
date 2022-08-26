export default function CreateNewProject() {
    const seeImage = (e:any) =>{
        var image = new FileReader();
        image.readAsDataURL(e.target.files[0]);
        image.onload = function(e:any){
            const preview = document.getElementById("imagePreview") as HTMLImageElement;
            preview.src = e.target.result;
        }

    }
  return (
    <div className="flex justify-center mt-10">
        <div className="border-white border-2 flex flex-col p-5 w-1/2">
            <label htmlFor="name">Nome do Projeto:</label>
            <input type="text" name="" id="name" className="bg-gblack border-white border-b-2" />
            <br />
            <label htmlFor="">Banner do projeto:</label>
            <div className="hidden w-48 h-28 mt-2">
                <img src='' id="imagePreview" className="object-fit" />
            </div>
            <input type="file" name="" id="" onChange={seeImage} accept='.jpg, .jpeg, .png, .jfif'/>
            <br />

            <label htmlFor="">Descrição do projeto:</label>
            <textarea name="" id="" cols={30} rows={5} className='text-black p-1'></textarea>
            <button type="submit" className="bg-gpink rounded-full text-2xl h-10 w-1/4 mt-4">Enviar</button>
        </div>
    </div>
  );
}