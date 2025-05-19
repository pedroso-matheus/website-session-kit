import HeaderSection from '../src/lpSections/HeaderSection';
import IconListSection from '../src/lpSections/IconListSection';
import TextHighLightSection from '../src/lpSections/TextHighLightSection';
import ProfileSection from '../src/lpSections/ProfileSection';
import CtaWithItemsAndPriceSection from '../src/lpSections/CtaWithItemsAndPriceSection';
// import TestimonialSection from '../src/lpSections/TestimonialSection'; // TODO: Verificar disponibilidade


const title = 'Aprenda a Aprender';
const ctaHighligh = 'Inscrições abertas';

const outcomes = [
  'Saber como o cérebro e as memórias humanas funcionam e como utilizar esses conhecimentos na prática para acelerar seus aprendizados',
  'Entender a diferença entre aprendizados semânticos e processuais',
  'Conhecer as fases e os estágios do aprendizado',
  'Ser capaz de aplicar técnicas e estratégias práticas para potencializar e acelerar qualquer tipo de aprendizado',
];

const targetAudience = [
  'Profissionais que desejam otimizar seu tempo e esforço, aprendendo a adquirir novos conhecimentos e habilidades de maneira mais rápida e eficiente',
  'Profissionais que estão em início ou mudança de carreira e desejam se adaptar mais rapidamente a novos desafios através de uma aprendizagem mais objetiva e acelerada',
  'Profissionais que desejam aprender a adquirir soft skills de maneira mais rápida',
  'Pessoas com dificuldades de aprendizagem ou com intuito de maximizar seu potencial de aprendizado',
  'Pessoas que querem tornar o processo de aprendizagem menos estressante, mais rápido e mais natural',
];

const professorCurriculum = [
  'Pós-graduado em Neurociência Aplicada à Educação e Aprendizagem',
  'Pós-graduado em Psicologia do Desenvolvimento e da Aprendizagem',
  'Pós-graduado Neuropsicopedagogia',
  'Neurociências Aplicada à Educação',
  'Psicologia Social',
];

const faq = [
  {
    question: 'Como vou ter acesso ao curso?',
    answer:
      'Assim que o sistema reconhecer o pagamento, você já receberá as instruções de acesso à plataforma do curso.',
  },
  {
    question: 'Por quanto tempo vou ter acesso ao curso?',
    answer: 'Por 1 ano, a contar a partir da confirmação do pagamento.',
  },
  {
    question: 'E se eu me arrepender da compra?',
    answer:
      'Você tem direito a 7 dias de garantia. Se desistir da compra por qualquer motivo, é só solicitar o reembolso que seu dinheiro será totalmente (100%) devolvido.',
  },
];

const PageAprendaAprender = () => {
  return (
    <>
      <HeaderSection
        title={title}
        descriptionAfter="Neurociência e Psicologia Aplicadas à Aprendizagem"
        extra="(100% Prático e aplicável)"
        type="Curso"
      />

      <IconListSection title="Ao final do curso você vai:" items={outcomes} responsive />

      <TextHighLightSection text="APRENDER NÃO PRECISA SER DIFÍCIL E DESGASTANTE, BASTA VOCÊ TER O CONHECIMENTO ADEQUADO" />

      <IconListSection title="Para quem é este treinamento?" items={targetAudience} responsive />

      <TextHighLightSection text="O conteúdo é todo baseado em Neurociência e Psicologia aplicadas à aprendizagem e possui linguagem simples para que seja possível entendê-lo mesmo sem conhecimentos prévios nessas áreas" />

      <ProfileSection
        title="Professor"
        name="Matheus Pedroso"
        description="Estudioso do cérebro e do comportamento humano, fundou o INSTITUTO BRASILEIRO DE COGNIÇÃO, ENSINO E APRENDIZAGEM (IBCEA) com o principal propósito de criar uma ponte entre o conhecimento científico e as necessidades reais das pessoas. Já ajudou mais de 5 mil profissionais por meio de seus cursos, treinamentos e palestras."
        items={professorCurriculum}
        imageUrl="/images/site/matheuspedroso.png"
      />

      <TextHighLightSection text="Curso 100% prático e aplicável" />

      { /* <FaqSection title="Perguntas frequentes" items={faq} /> */ }

      {/* TODO: Incluir novamente após confirmar uso */}
      {/* <TestimonialSection title="Alguns depoimentos e feedbacks" imagesUrl={testemonials} /> */}

      <CtaWithItemsAndPriceSection
        highlight={ctaHighligh}
        price={"397"}
        salesPrice={"197"}
        installments={10}
        buttonLabel="Quero me inscrever"
        checkoutLink={"/"}
        ctaItems={[
          'Acesso por 1 ano à plataforma',
          'Certificado de conclusão',
          'Conteúdo 100% prático e aplicável',
        ]}
      />
      {/*
      <CompanyInfoSection
        companyName="IBCEA"
        companyEmail="contato@ibcea.com.br"
        companyCNPJ="27.137.924/0001-90"
      />
      */}
    </>
  );
};

export default PageAprendaAprender;
