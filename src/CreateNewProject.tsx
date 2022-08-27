import { app, fireStore } from './firebaseObjs';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection, query } from 'firebase/firestore';
const data = {
    title: '',
    description: '',
    image: null as File | null,
};
export default function CreateNewProject() {
    const seeImage = (e: any) => {
        var image = new FileReader();
        const imgFile = e.target.files[0] as File;
        data.image = imgFile;

        image.readAsDataURL(imgFile);
        image.onload = function (e: any) {
            const preview = document.getElementById(
                'imagePreview'
            ) as HTMLImageElement;
            preview.src = e.target.result;
        };
    };
    const createProject = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(data);
        if (!data.image) {
            alert('Selecione uma imagem');
            return;
        }
        uploadBytes(
            ref(getStorage(app), '/projectThumbs/' + data.image.name),
            data.image
        )
            .then((e) => {
                addDoc(collection(fireStore, 'projects'), {
                    title: data.title,
                    description: data.description,
                    image: e.ref.fullPath,
                });
            })
            .catch((e) => alert(e.message));
    };
    return (
        <div className='flex justify-center mt-10'>
            <form
                className='border-white border-2 flex flex-col p-5 w-1/2'
                onSubmit={createProject}>
                <label htmlFor='name'>Nome do Projeto:</label>
                <input
                    type='text'
                    name=''
                    id='name'
                    className='bg-gblack border-white border-b-2'
                    onChange={(e) => (data.title = e.target.value)}
                />
                <br />
                <label htmlFor=''>Banner do projeto:</label>
                <div className='hidden w-48 h-28 mt-2'>
                    <img src='' id='imagePreview' className='object-fit' />
                </div>
                <input
                    type='file'
                    name=''
                    id=''
                    onChange={seeImage}
                    accept='.jpg, .jpeg, .png, .jfif'
                />
                <br />

                <label htmlFor=''>Descrição do projeto:</label>
                <textarea
                    name=''
                    id=''
                    cols={30}
                    rows={5}
                    className='text-black p-1'
                    onChange={(e) =>
                        (data.description = e.target.value)
                    }></textarea>
                <button
                    type='submit'
                    className='bg-gpink rounded-full text-2xl h-10 w-1/4 mt-4'>
                    Enviar
                </button>
            </form>
        </div>
    );
}
