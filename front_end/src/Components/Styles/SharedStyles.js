import styled from 'styled-components';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0D7377, #14FFEC);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 40px;
  border-radius: 30px;
  margin: 30px 0px;
  text-align: center;
  transition: all 0.3s ease;
  max-width: 1500px;
  width: 90%;
  margin: 40px auto;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #212121;
  @media (max-width: 768px) { font-size: 2rem; }
  @media (max-width: 480px) { font-size: 1.5rem; }
`;

export const SectionText = styled.div`
  p {
    font-size: 1.2rem;
    color: #323232;
    @media (max-width: 768px) { font-size: 1.1rem; }
    @media (max-width: 480px) { font-size: 1rem; }
  }
`;
