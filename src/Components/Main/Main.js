import React, { useState } from 'react';
import Card from '../Card/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import fakeData from '../../fakeData';
import './Main.css';
import Cart from '../Cart/Cart';

const Main = () => {

    console.log(fakeData);
    const [courses, setCourses] = useState(fakeData);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }

    console.log(cart.length);

    return (

        <div>
            <Container>

                <h1>OUR COURSES</h1>

                <Row>{

                    courses.map(course => <Card
                        course={course} 
                        handleAddCourse={handleAddCourse}>
                    </Card>)
                }
                </Row>

                <hr style={{width: "70%"}}/>

                <Row>
                    <Cart cart={cart}></Cart>
                </Row>

            </Container>



        </div>

    );
};

export default Main;