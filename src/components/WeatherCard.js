
import { useEffect, useState } from "react";
import { Card, Button, Container, Table, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function WeatherCard(){

    const [day, setDay] = useState([]);
    const [details, setDetails] = useState([]);

    const weather = () => {

       fetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/4217?apikey=%09tGIQyAMtn0R2GgQK8PADvKtbrjC5IQtj")
        .then(res => res.json())
        .then(data => {
            setDay(data.DailyForecasts.map((day, index) => {
                console.log(data.DailyForecasts)
                if(index <= 2){
                    return(
                        <Card key={day.Date} style={{ width: '18rem' }} className="d-inline-block text-center m-2 cards">
                            <Card.Body>
                            <Card.Title>{day.Date}</Card.Title>
                              <Card.Text>
                        
                              </Card.Text>
                              <Button onClick={() => dayNight(index)} variant="info">View</Button>
                            </Card.Body>
                        </Card>
                    )
                }
            }))
            
        })
    }

    useEffect(() => {
        weather();
    }, [])

    const dayNight = (hourlyIndex) => {
        fetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/4217?apikey=%09tGIQyAMtn0R2GgQK8PADvKtbrjC5IQtj")
        .then(res => res.json())
        .then(data => {
            setDetails(data.DailyForecasts.map((day, index) => {
                if(index == hourlyIndex){


                    return(
                        <>
                            <Container key={index} className="text-center mt-5">
                                <Container>
        
                                </Container>
                                <h1>Weather for </h1>
                                <p>{day.Date}</p>
                                <Table striped bordered hover variant="dark" className="mt-5">
                                    <thead>
                                        <tr>
                                            <th colSpan={4}>Temperature</th>
                                        </tr>
                                        <tr>
                                          <th>Maximum</th>
                                          <th>Minimum</th>
                                          <th>Day</th>
                                          <th>Night</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>{day.Day.IconPhrase}</td>
                                        <td>{day.Night.IconPhrase}</td>
                                        <td>{day.Temperature.Maximum.Value}&deg;</td>
                                        <td>{day.Temperature.Minimum.Value}&deg;</td>
                                      </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th colSpan={4}>Source: <Nav.Link className="text-primary source" href="https://developer.accuweather.com/" target="_blank">{day.Sources[0]}</Nav.Link></th>
                                        </tr>
                                    </tfoot>
                                </Table>
                            </Container>
                        </>
                        
                    )
                }
            })
            )
        })
    }

    return(
        <>
            <Container className="text-center">
                <Container>
                    
                </Container>
                <Container fluid className="mt-5">
                {day}
                </Container>
                {details}
            </Container>
        </>
    )
}