import styled from 'styled-components';

const ProfileTable = styled.table`
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

const ProfileTableTd = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`;

const ProfileTableTh = ProfileTableTd.extend`
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
`;

const ProfileTableTr = styled.tr`
    &:nth-child(even) {
        background-color: #f2f2f2;
    }
    
    &:hover {
      background-color: #ddd;
    }
`;

export {
    ProfileTable,
    ProfileTableTd,
    ProfileTableTh,
    ProfileTableTr
};
