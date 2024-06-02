import React from 'react'
import styled, { css } from 'styled-components'

const ButtonBar = styled.div`
    display: flex;
    justify-content: center;
    background-color: #2727f5;
    
    span{
    color: #dfdfdf;
    font-size: 2rem;
    
    }
`;

const ProjectButton = styled.div`
    display: flex;
    background-color: #31d187;
    margin: 0 0.6rem;

    button{
    background: none;
    width: 5.5rem;
    padding: 0;
    }
    img{
        width: 100%;
        height: auto;
    }
    `;

export const FeaturedButtons = () => {
    return (
        <ButtonBar>
            <span>______________________________</span>
            <ProjectButton>
                <button>
                    <img src="https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png" alt="" />
                </button>
            </ProjectButton>
            <ProjectButton>
                <button>
                    <img src="https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png" alt="" />
                </button>
            </ProjectButton>
            <ProjectButton>
                <button>
                    <img src="https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png" alt="" />
                </button>
            </ProjectButton>
            <span>______________________________</span>
        </ButtonBar>
    )
}
