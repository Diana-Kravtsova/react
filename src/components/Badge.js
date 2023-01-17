import styled from 'styled-components';

const BadgeContainer = styled.div`
    padding: 0 7px 0 7px;
    border-radius: 0.15em;
    border: 0.1em solid var(--main-color);
    background: var(--main-color);
    color: var(--secondary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 2em;
`;

const Badge = ({ children }) => (
    <BadgeContainer>
        <span>{children}</span>
    </BadgeContainer>
);

export default Badge;
