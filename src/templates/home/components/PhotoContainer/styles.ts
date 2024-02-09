import styled from 'styled-components';

interface ConeBaseProps {
  direction: string;
}

export const ConeContainer = styled.div`
  position: relative;
  top: 25vh;
  right: 25vw;
`;

export const ConeBase = styled.div<ConeBaseProps>`
  position: absolute;

  top: ${(props) => {
    switch (props.direction) {
      case 'p1':
        return '50%';
      case 'p2':
        return '59%';
      case 'p3':
        return '68%';
      case 'p4':
        return '77%';
      case 'p5':
        return '85%';
      case 'p6':
        return '92%';
      case 'p7':
        return '98%';
      case 'p8':
        return '102%';
      case 'p9':
        return '105%';
      case 'p10':
        return '105%';
      case 'p11':
        return '105%';
      case 'p12':
        return '103%';
      case 'p13':
        return '98%';
      case 'p14':
        return '92%';
      case 'p15':
        return '85%';
      case 'p16':
        return '77%';
      case 'p17':
        return '68%';
      case 'p18':
        return '59%';
      case 'p19':
        return '50%';
      case 'p20':
        return '40%';
      case 'p21':
        return '31%';
      case 'p22':
        return '22%';
      case 'p23':
        return '13%';
      case 'p24':
        return '7%';
      case 'p25':
        return '1%';
      case 'p26':
        return '-4%';
      case 'p27':
        return '-6%';
      case 'p28':
        return '-6%';
      case 'p29':
        return '-6%';
      case 'p30':
        return '-3%';
      case 'p31':
        return '1%';
      case 'p32':
        return '6%';
      case 'p33':
        return '14%';
      case 'p34':
        return '21%';
      case 'p35':
        return '30%';
      case 'p36':
        return '50%';
      default:
        return '50%';
    }
  }};

  left: ${(props) => {
    switch (props.direction) {
      case 'p1':
        return '106%';
      case 'p2':
        return '105%';
      case 'p3':
        return '102%';
      case 'p4':
        return '98%';
      case 'p5':
        return '93%';
      case 'p6':
        return '86%';
      case 'p7':
        return '78%';
      case 'p8':
        return '69%';
      case 'p9':
        return '60%';
      case 'p10':
        return '50%';
      case 'p11':
        return '40%';
      case 'p12':
        return '30%';
      case 'p13':
        return '22%';
      case 'p14':
        return '14%';
      case 'p15':
        return '7%';
      case 'p16':
        return '1%';
      case 'p17':
        return '3%';
      case 'p18':
        return '-6%';
      case 'p19':
        return '-6%';
      case 'p20':
        return '5%';
      case 'p21':
        return '6%';
      case 'p22':
        return '1%';
      case 'p23':
        return '6%';
      case 'p24':
        return '13%';
      case 'p25':
        return '21%';
      case 'p26':
        return '30%';
      case 'p27':
        return '40%';
      case 'p28':
        return '50%';
      case 'p29':
        return '60%';
      case 'p30':
        return '69%';
      case 'p31':
        return '78%';
      case 'p32':
        return '87%';
      case 'p33':
        return '93%';
      case 'p34':
        return '100%';
      case 'p35':
        return '103%';
      case 'p36':
        return '-20%';
      default:
        return '106%';
    }
  }};

  transform: translate(-50%, -50%)
    ${(props) => {
      switch (props.direction) {
        case 'p1':
          return 'rotate(0deg)';
        case 'p2':
          return 'rotate(10deg)';
        case 'p3':
          return 'rotate(20deg)';
        case 'p4':
          return 'rotate(30deg)';
        case 'p5':
          return 'rotate(40deg)';
        case 'p6':
          return 'rotate(50deg)';
        case 'p7':
          return 'rotate(60deg)';
        case 'p8':
          return 'rotate(70deg)';
        case 'p9':
          return 'rotate(80deg)';
        case 'p10':
          return 'rotate(90deg)';
        case 'p11':
          return 'rotate(100deg)';
        case 'p12':
          return 'rotate(110deg)';
        case 'p13':
          return 'rotate(120deg)';
        case 'p14':
          return 'rotate(130deg)';
        case 'p15':
          return 'rotate(140deg)';
        case 'p16':
          return 'rotate(150deg)';
        case 'p17':
          return 'rotate(160deg)';
        case 'p18':
          return 'rotate(170deg)';
        case 'p19':
          return 'rotate(180deg)';
        case 'p20':
          return 'rotate(190deg)';
        case 'p21':
          return 'rotate(200deg)';
        case 'p22':
          return 'rotate(210deg)';
        case 'p23':
          return 'rotate(220deg)';
        case 'p24':
          return 'rotate(230deg)';
        case 'p25':
          return 'rotate(240deg)';
        case 'p26':
          return 'rotate(250deg)';
        case 'p27':
          return 'rotate(260deg)';
        case 'p28':
          return 'rotate(270deg)';
        case 'p29':
          return 'rotate(280deg)';
        case 'p30':
          return 'rotate(290deg)';
        case 'p31':
          return 'rotate(300deg)';
        case 'p32':
          return 'rotate(310deg)';
        case 'p33':
          return 'rotate(320deg)';
        case 'p34':
          return 'rotate(330deg)';
        case 'p35':
          return 'rotate(340deg)';
        case 'p36':
          return 'rotate(350deg)';
        default:
          return 'rotate(0deg)';
      }
    }};

  height: 22rem;
  border-top: 10.5rem solid transparent;
  border-bottom: 10.5rem solid transparent;
  border-left: 22rem solid rgba(1, 1, 1, 0.1);

  z-index: -1;
  border-radius: 100%;
`;

export const Image = styled.img`
  border-radius: 100%;
  width: 20rem;
  height: 20rem;
  z-index: 2;
  box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.3);
`;
