import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
   position: relative;
   width: 400px;
   margin: 50px;
`;

const CardImage = styled.div`
    height: 400px;
    width: 100%;
    border-radius: 8px;
`;

const CardImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`;

const CardContent = styled.div`
    position: absolute;
    width: calc(100% - 36px);
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    background-color: #fff;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
`;

const CardTop = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

const CardUser = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;

`;

const UserAvatar = styled.img`
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 100rem;
    flex-shrink: 0;
`;

const UserName = styled.span`
    font-weight: 300;
    font-size: 16px;
    color:orange;
`;

const CardFooter = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`;

const CardTitle = styled.h3`
    font-size: 18px;
    font-weight: 500;
    color: blue;
`;

const CardAmount = styled.span`
    font-size: 18px;
    font-weight: bold;
`;



const Card = () => {
    return (
        <StyledCard>
            <CardImage>
                <CardImg src="https://cdn.dribbble.com/users/2400293/screenshots/17040958/media/4962f801be5fbfd65d807df3f7eff4ae.png?compress=1&resize=1000x750&vertical=top" alt="" />
            </CardImage>

            <CardContent>
                <CardTop>
                    <CardUser>
                        <UserAvatar src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <UserName>@robert2703</UserName>
                    </CardUser>
                    <div>256</div>
                </CardTop>

                <CardFooter>
                    <CardTitle>Huysanti</CardTitle>
                    <CardAmount>10000 PSL</CardAmount>
                </CardFooter>
            </CardContent>

        </StyledCard>
    );
};

export default Card;