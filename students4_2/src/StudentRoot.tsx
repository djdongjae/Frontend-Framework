import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components';
import StudentEdit from './StudentEdit';
import StudentList from './StudentList';

const Div = styled.div`
    border: 1px solid gray;
    width: 800px;
    margin: 10px auto;
    box-shadow: 5px 5px 5px #DDD;
    padding: 30px;
    & .error {
        margin-top: 20px;
        color: red;
        border: 1px solid #faa;
        padding: 10px 20px;
        border-radius: 10px;
        background-color: #fee;
    }
`;

function StudentRoot() {
    return (
        <Div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<StudentList />}></Route>
                    <Route path='/edit/:id' element={<StudentEdit />}></Route>
                    <Route path='/create/' element={<StudentEdit />}></Route>
                </Routes>
            </BrowserRouter>
        </Div>
    )
}

export default StudentRoot;