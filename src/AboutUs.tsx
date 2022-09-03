import { useParams } from 'react-router-dom';
export default function AboutUs() {
    const { who } = useParams();
    const us =
        'Nossa equipe é composta por estudantes da ETEC Jaraguá, todos são alunos de Análise e Desenvolvimento de Sistemas integrado ao ensino médio, cursando o 3 ano. A origem dessa plataforma se deu através de um problema enfrentado por nós, em uma matéria específica (TCC). Aonde tivemos problemas em achar problemáticas funcionais e que fossem reais, algo que era cobrado de nós alunos pela instituição de ensino. Diante deste problema, procuramos por meios aonde tivéssemos a chance de achar boas ideias para nossos projetos, mas não achamos nem uma plataforma com este  recurso, ou que tivesse alguma funcionalidade parecida. Em consequência disso, quando vimos que a ODS 8 tinha um sub-tópico no qual é incentivado a criatividade e geração de novas oportunidades de emprego, pensamos em criar uma plataforma que se propõe a resolver este problema.';
    const business =
        'Olá, Prazer em conhecê-lo! Nós somos a Edu. Inspiration. Uma empresa fundada com o objetivo de criar uma conexão entre alunos e empresas. Um de nossos objetivos é fazer com que essa conexão seja benéfica para ambos os lados. Fazemos isso dando espaço em nossa plataforma, para que empresas com os mais diversos tipos de problemas, entrem em contato com as ideias e serviços de nossos alunos cadastrados. Alunos esses, que buscam em nossa plataforma, a experiência de ter uma problemática real para os seus projetos de TCC.';
    const school =
        'Olá, Prazer em conhecê-lo! Nós somos a Edu. Inspiration. Uma empresa fundada com o objetivo de criar uma conexão entre alunos e empresas. Um de nossos objetivos, é o de criar um ranking onde as escolas mais bem colocadas ganharam doações e até mesmo a oportunidade de firmarem contratos com empresas parceiras da nossa plataforma. Para subir no Ranking, é preciso realizar entregas bem sucedidas as empresas, quanto mais entregas maior será a sua posição no Ranking.';
    return (
        <div className='flex flex-col mt-4 gap-6 px-48 animate-fade-in'>
            <h1 className='text-center text-2xl'>
                {who === 'business'
                    ? 'Para empresas'
                    : who === 'school'
                    ? 'Para escolas'
                    : 'Sobre nós'}
            </h1>
            <p className='text-xl text-center'>
                {who === 'business' ? business : who === 'school' ? school : us}
            </p>
        </div>
    );
}
