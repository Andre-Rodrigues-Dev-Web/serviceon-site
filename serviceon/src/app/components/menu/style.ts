import styled from 'styled-components';

const ContainerMenu = styled.div`
  background-color: #155b93;
  width: 100%;
  .container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 7px 10px;
    .logo{
      h1{
        a{
          color: #fff;
          font-size: 20px;
          font-weight: bold;
          @media(min-width: 768px){
            font-size: 20px;
          }
        }
      }
    }
    .links{
      display: none;
      li{
        a{
          color: #fff;
          font-weight: bold;
        }
      }
      @media(min-width: 768px){
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 20px;
        li{
          a{
            font-size: 14px;
          }
        }
      }
    }
  }
`;
export{
  ContainerMenu
}
