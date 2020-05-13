import React, { Component } from 'react';
import {Container,Row,Col, Button} from 'react-bootstrap';
import "./TaxCalculator.css"

class UserInputForm extends Component {
    render() {
        return(
            
                <div className={"taxcalculator"}>
                    <form>
                        <Container id={"incomes"}>
                            <Col>
                                <h4>Income & Deductions</h4>
                                <Row >
                                    <div>
                                        <label>Employment income</label>
                                        <input type="text" placeholder={"$"}/>
                                    </div>
                                    <div>
                                        <label>Self-employment income</label>
                                        <input type="text" placeholder={"$"}/>
                                    </div>
                                    <div>
                                        <label>Other income</label>
                                        <input type="text" placeholder={"$"}/>
                                    </div>
                                </Row>
                                <Row>
                                    <div>
                                        <label>Capital gains</label>
                                        <input type="text" placeholder={"$"}/>
                                    </div>
                                    <div>
                                        <label>Eligible dividends</label>
                                        <input type="text" placeholder={"$"}/>
                                    </div>
                                    <div>
                                        <label>Ineligible dividends</label>
                                        <input type="text" placeholder={"$"}/>
                                    </div>
                                </Row>
                                <Row>
                                    <div>
                                        <label>RRSP deduction</label>
                                        <input type="text" placeholder={"$"}/>
                                    </div>
                                    <div>
                                        <label>Income taxes paid</label>
                                        <input type="text" placeholder={"$"}/>
                                    </div>
                                </Row>
                            </Col>
                        </Container>
                        <Button type="submit">Calculate my taxes</Button>
                    </form>
                </div>

        )
    };

}
export default UserInputForm