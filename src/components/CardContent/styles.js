import styled from 'styled-components';

export const CardContentStyle = styled.div`
    margin-bottom: 15px;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background-color: var(--color-background-1);
    width: 100%;
    .header {
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--border-color);
        a {
            font-size: 12px;
        }
    }
    .seeall {
        color: var(--color-primary);
    }
    .listitem {
        padding: 20px 20px 10px 20px;
        border-bottom: 1px solid var(--border-color);
    }
`