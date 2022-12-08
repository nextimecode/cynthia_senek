import { NextCallToActionProps } from '../components/organisms/NextCallToAction'
import { LandingPageItems } from '../types/LandingPageItems'

export const layout = {
  title: 'Cynthia Senek | Home',
  url: 'https://bolao.nextime.com.br/',
  description:
    'O NeXTBolao é um game produzido pela empresa NeXTIME no qual você pode criar bolões para jogar com seus amigos. Você pode acompanhar a COPA de maneira divertida competindo com os seus amigos e outros.',
  keywords: ['bolão', 'bolão grátis', 'bolão copa do mundo', 'criar um bolão'],
  siteName: 'Cynthia Senek',
  socialTitle:
    'Você pode criar bolões para jogar com seus amigos. Você pode acompanhar a COPA de maneira divertida competindo com os seus amigos e outros.',
  socialImageUrl: 'https:/bolao.nextime.com.br/images/image_page.png',
  socialNetwork:
    'https://api.whatsapp.com/send?phone=5511972436305&text=Ol%C3%A1,%20Pedro!%0ATenho%20dúvidas%20sobre%20o%20NeXTBolao.',
  logoSrc: '/images/logos/cy_logo.png',
  logoHeight: 62,
  logoSubtitleColor: 'next-primary'
}

export const nextHeroItem = {
  image: '/images/tv-removebg-preview.png',
  title: 'ARTISTAS SÃO ANTENAS, DEUS É A FREQUÊNCIA',
  text: 'Quer sintonizar seu artista em 2023? Processo seletivo aberto JAN/FEV/MAR 2023. Mentoria em grupo e individual.',
  textButton: 'REALIZAR INSCRIÇÃO',
  url: 'https://api.whatsapp.com/send?phone=5511972436305&text=Ol%C3%A1,%20Pedro!%0ATenho%20dúvidas%20sobre%20o%20NeXTBolao.'
}

export const nextCallToActionItems = [
  {
    id: 'mentoria',
    title: 'O que é mentoria?',
    text: 'Mentoria é uma forma de capacitar pessoas por meio do aprendizado com alguém mais experiente na área. O mentor é, geralmente, um profissional com perfil sênior na função ou em algum tema específico, enquanto o mentorado é um iniciante. \n\n O mentor atua como um professor, não apenas para ensinar habilidades técnicas, mas também para ensinar habilidades comportamentais e ajudar no desenvolvimento da carreira do profissional. ',
    image: '/images/cy1.jpg',
    textButton: 'REALIZAR INSCRIÇÃO',
    url: '#mentoria',
    width: 800,
    height: 1240,
    directionMd: 'row-reverse'
  },
  {
    id: 'app',
    title: 'Mentoria e coaching: diferença',
    text: 'O mentor é alguém experiente em determinado campo de atuação. Ele faz um aconselhamento profissional para o mentorado, ensina questões técnicas sobre a realização do trabalho, dá dicas de carreira e busca a capacitação do profissional. \n\n O coach, por sua vez, trabalha os aspectos motivacionais das pessoas. Ele busca incentivar o indivíduo a dar o melhor naquilo que faz, mas não possui, necessariamente, experiência no campo de atuação do cliente. Portanto, não cabe a ele oferecer treinamento técnico ou capacitação profissional.',
    image: '/images/cy2.jpg',
    textButton: 'REALIZAR INSCRIÇÃO',
    url: '#investimento',
    width: 800,
    height: 1200,
    directionMd: 'row-reverse'
  },
  {
    id: 'site',
    title: 'Benefícios da mentoria',
    text: '- Diminui a curva de aprendizagem\n\n- Permite aprender com os erros dos mais experientes\n\n- Ajuda no desenvolvimento pessoal\n\n- Agrega conhecimento de quem realmente sabe\n\n- Ajuda na capacitação a longo prazo \n\n- Gera um processo de aprendizagem adaptativa.',
    textButton: 'REALIZAR INSCRIÇÃO',
    url: '#investimento',
    width: 800,
    height: 1200,
    image: '/images/cy3.jpg'
  },
  {
    id: 'marketing',
    title: 'Quem é Cynthia Senek?',
    text: '"Ao longo dos seus 20 anos de carreira, após ter feito inúmeros cursos e técnicas de atuação, workshops, novelas, filmes e séries, percebeu que o processo de criatividade está diretamente conectado ao processo emocional. A mentoria artística de autoconhecimento que Cynthia desenvolve vem na contra-mão da grande parte do mercado artístico que incentiva artistas à buscarem técnica. Aumentar a capacidade de ouvir sua intuição artística na frequência da sua sabedoria interior é o objetivo principal do seu trabalho como mentora.\n\nCynthia Senek atriz e mentora artística, nascida em cima dos palcos na cidade do teatro: Curitiba, Paraná. Fez sua estreia na televisão ainda criança em 2002. Integrou o elenco de novelas na Rede Globo como Sete vidas, MALHAÇÃO e a Dona do pedaço. Atuou na primeira série brasileira produzida pela NETFLIX no Brasil "3%" e logo depois em "Temporada de Verão", ambas no elenco principal. No cinema, seu trabalho mais recente é o longa-metragem "Deserto Particular", de Aly Muritiba que foi o representante do Brasil no Oscar em 2022. Seu futuro em 2023 promete bons lançamentos com a série “Ta tudo certo” a ser lançada pela Disney e a série “Musa Música” a ser lançada na Globoplay. Ambas também atuando no elenco principal.',
    image: '/images/quem_cy.jpg',
    url: '#investimento',
    width: 800,
    height: 800,
    textButton: 'REALIZAR INSCRIÇÃO',
    directionMd: 'row-reverse'
  }
] as unknown as Array<NextCallToActionProps>

export const hasNextCallToActionWithAnnotation = false

export const items: LandingPageItems = {
  layout,
  hasNextCallToActionWithAnnotation,
  nextCallToActionItems,
  nextHeroItem
}
