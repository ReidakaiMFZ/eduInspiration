import { useParams } from 'react-router-dom';
export default function AboutUs() {
    const { who } = useParams();
    const us =
        'Nossa equipe é composta por estudantes da ETEC Jaraguá, todos são alunos de Análise e Desenvolvimento de Sistemas integrado ao ensino médio, cursando o 3 ano. A origem dessa plataforma se deu através de um problema enfrentado por nós, em uma matéria específica (TCC). Aonde tivemos problemas em achar problemáticas funcionais e que fossem reais, algo que era cobrado de nós alunos pela instituição de ensino. Diante deste problema, procuramos por meios aonde tivéssemos a chance de achar boas ideias para nossos projetos, mas não achamos nem uma plataforma com este  recurso, ou que tivesse alguma funcionalidade parecida. Em consequência disso, quando vimos que a ODS 8 tinha um sub-tópico no qual é incentivado a criatividade e geração de novas oportunidades de emprego, pensamos em criar uma plataforma que se propõe a resolver este problema.';
    const business =
        'Olá, nós somos a Edu. Inspiration. Somos uma empresa criada para conectar alunos a empresas e fazer com que essa conexão seja benéfica para ambos, nós permitimos que empresas entrem em nosso site e coloque as suas problemáticas. Os alunos cadastrados em nossa plataforma poderá desenvolver um TCC baseado na problemática proposta pela empresa e a empresa poderá escolher dentre todos os projetos o que ela prefere.';
    const school =
        'Olá, nós somos a Edu. Inspiration. Somos uma empresa criada para conectar alunos a empresas e fazer com que essa conexão seja benéfica para ambos, nós pretendemos ranquear as escolas que tiverem mais entregas aceitas e temos como objetivo fazer com que as empresas beneficiadas façam algumas doações para as escolas dos alunos que finalizaram o projeto.';
    return (
        <div className='flex flex-col gap-6 px-48 animate-fade-in'>
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
