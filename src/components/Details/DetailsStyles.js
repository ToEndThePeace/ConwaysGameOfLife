import styled from "styled-components";

const DetailsStyles = styled.div`
    color: #f9f9f9;
    font-family: "Roboto", sans-serif;
    flex-grow: 1;
    div {
        max-width: 70vw;
        margin: 5vh auto;
        @media screen and (max-width: 400px) {
            max-width: 85vw;
        }
        h2 {
            font-size: 1.5rem;
            border-bottom: 1px solid #281;
            padding-bottom: 1vh;
            margin: 0 10vw;
            text-align: center;
            @media screen and (max-width: 600px) {
                margin: 0;
            }
            @media screen and (max-width: 400px) {
                font-size: 1.2rem;
            }
        }
        h3 {
            font-size: 1.25rem;
            text-align: center;
            border-bottom: 1px solid #281;
            padding-bottom: 1vh;
            display: inline-block;
            @media screen and (max-width: 400px) {
                font-size: .9rem;
                margin: 0 10vw;
                display: block;
            }
        }
        p,
        ul {
            font-size: 1rem;
            font-weight: 300;
            margin-top: 2.5vh;
            line-height: 1.5rem;
            @media screen and (max-width: 400px) {
                font-size: .8rem;
            }
            a {
                color: #281;
                text-decoration: none;
            }
            em {
                font-style: italic;
            }
        }
        ul {
            list-style-type: disc;
            padding: 0 5vw 0 2.5vw;
            li {
                ul {
                    margin-bottom: 2.5vh;
                    li {
                        list-style-type: circle;
                    }
                }
            }
        }
    }
`;

export default DetailsStyles;
