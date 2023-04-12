import styled from 'styled-components';

const ContentLeft = styled.div`
    background-color: #fff;
    border: 1px solid #3333332b;
    padding: 10px;
    @media(min-width: 768px){
        width: 380px;
    }
`;
const Content = styled.div`
    background-color: #fff;
    border: 1px solid #3333332b;
    padding: 10px;
    @media(min-width: 768px){
        width: 874px;
    }
`;
const Sidebar = styled.div`
    background-color: #fff;
    border: 1px solid #3333332b;
    padding: 10px;
    h2{
        margin-top: 10px;
    }
    .categorias_links{
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 10px;
        li{
            a{
                color: #333;
            }
        }
    }
    @media(min-width: 768px){
        width: 300px;
    }
`;
const Theme = styled.div`
    background-color: #eee;
`;
const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 30px 10px;
`;
export{
    ContentLeft,
    Content,
    Sidebar,
    Theme,
    Wrap
}