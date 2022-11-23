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

export const nextCallToActionItems = [
  {
    id: 'mentoria',
    title: 'O que é mentoria?',
    text: 'Mentoria é uma forma de capacitar pessoas por meio do aprendizado com alguém mais experiente na área. O mentor é, geralmente, um profissional com perfil sênior na função ou em algum tema específico, enquanto o mentorado é um iniciante. \n\n O mentor atua como um professor, não apenas para ensinar habilidades técnicas, mas também para ensinar habilidades comportamentais e ajudar no desenvolvimento da carreira do profissional. ',
    image: '/images/illustrations/undraw_social_friends_re_7uaa.svg',
    textButton: 'SIM! QUERO PARTICIPAR DA MENTORIA',
    url: '#mentoria',
    width: 388,
    height: 408,
    directionMd: 'row-reverse'
  },
  {
    id: 'app',
    title: 'Mentoria e coaching: diferença',
    text: 'O mentor é alguém experiente em determinado campo de atuação. Ele faz um aconselhamento profissional para o mentorado, ensina questões técnicas sobre a realização do trabalho, dá dicas de carreira e busca a capacitação do profissional. \n\n O coach, por sua vez, trabalha os aspectos motivacionais das pessoas. Ele busca incentivar o indivíduo a dar o melhor naquilo que faz, mas não possui, necessariamente, experiência no campo de atuação do cliente. Portanto, não cabe a ele oferecer treinamento técnico ou capacitação profissional.',
    image: '/images/illustrations/undraw_youtube_tutorial_re_69qc.svg',
    textButton: 'SIM! QUERO PARTICIPAR DA MENTORIA',
    url: '#investimento',
    width: 388,
    height: 408,
    directionMd: 'row-reverse'
  },
  {
    id: 'site',
    title: 'Benefícios da mentoria',
    text: '- Diminui a curva de aprendizagem\n\n- Permite aprender com os erros dos mais experientes\n\n- Ajuda no desenvolvimento pessoal\n\n- Agrega conhecimento de quem realmente sabe\n\n- Ajuda na capacitação a longo prazo \n\n- Gera um processo de aprendizagem adaptativa.',
    textButton: 'SIM! QUERO PARTICIPAR DA MENTORIA',
    url: '#investimento',
    width: 595,
    height: 528,
    image: '/images/illustrations/undraw_personal_file_re_5joy.svg'
  },
  {
    id: 'marketing',
    title: 'Quem será meu mentor?',
    text: '"Você sabe o que eu amo na minha vida? Eu sei qual é o meu PORQUÊ.\nTento levantar todos os dias para fazer algo que possa devolver às pessoas o seu bem mais precioso, o TEMPO. Acredito que pensando diferente podemos usar melhor esse recurso finito.\nO mais interessante é que temos diferentes formas de poder devolver o tempo às pessoas e uma delas é usar a tecnologia.\nPor isso sou Bacharel em Ciência da Computação pela Universidade Federal de Ouro Preto - UFOP. Fui presidente da empresa júnior Voluta Soluções Digitais - UFOP. Presidente do Centro Acadêmico do Curso de Ciência da Computação - UFOP 2013/14. Professor pelo programa PRONATEC e pela Let’s Code, escola de programação. Especialista em AMP Cognizant/Google e atualmente desenvolvedor FrontEnd. Tenho muita sorte de ter trabalhado em lugares que me ajudaram e me ajudam no meu porquê." - Pedro Duarte CEO NeXTIME',
    image: '/images/illustrations/eu2.jpeg',
    url: '#investimento',
    width: 431,
    height: 650,
    textButton: 'SIM! QUERO PARTICIPAR DA MENTORIA',
    directionMd: 'row-reverse'
  }
] as unknown as Array<NextCallToActionProps>

export const hasNextCallToActionWithAnnotation = false

export const items: LandingPageItems = {
  layout,
  hasNextCallToActionWithAnnotation,
  nextCallToActionItems
}
