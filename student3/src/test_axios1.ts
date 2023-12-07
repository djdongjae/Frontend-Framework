import axios from 'axios';

type Student = {
    id: number,
    studentNo: string,
    name: string,
    phone: string,
    email: string,
    sex: string,
    departmentId: number
}

axios.defaults.baseURL = 'http://localhost:3001';

export function test1() {
    let students: Student[] = [];
    axios.get('/students')
    .then(response => {
        students = response.data;
        console.log('test1', students);
    })
}

export function test2() {
    let students: Student[] = [];
    let student: Student;
    axios.get('/students')
    .then(response => {
        students = response.data;
        return students[0].id;
    })
    .then(id => {
        axios.get(`/students/${id}`)
        .then(response => {
            student = response.data;
            console.log('test2', student);
        })
    })
}

export function test3(id: number) {
    let student: Student;
    axios.get('/students/'  + id)
    .then(response => {
        student = response.data;
        console.log('test3', student);
    })
    .catch(error => {
        console.log('test3', error);
    })
}