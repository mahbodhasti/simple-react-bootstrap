import logo from './logo.svg';
import './App.css';
import { Container,Col,Row,Button,Alert,Breadcrumb,Card ,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Container>
      <header className="App-header">
       
      
        <Form>
        <Row>
          <Col md >
          <Form.Group controlId='email' >
            <Form.Label>
              Email Address
            </Form.Label>
            <Form.Control type="email" placeholder='Example@email.com' ></Form.Control>
            <Form.Text className='text muted' >we'll never share your email address</Form.Text>
          </Form.Group >
          </Col>
          <Col md >
          <Form.Group controlId='password' >
            <Form.Label>
              password
            </Form.Label>
            <Form.Control type="password" placeholder='Example@email.com' ></Form.Control>
            
          </Form.Group>
          </Col>
       </Row>
       </Form>
        <Card style={{color:"#000"}} >
          <Card.Img className='mb-3' src='https://picsum.photos/200/300' />
          <Card.Body>
            <Card.Title  >
              Card Example
            </Card.Title>
            <Card.Text>
            this is an example of react bootstrap card 
            </Card.Text>
          </Card.Body>
          <Button size="lg" >Click here</Button>
        </Card>
      <Breadcrumb>
      <Breadcrumb.Item active >Home</Breadcrumb.Item>
      <Breadcrumb.Item >Library</Breadcrumb.Item>
      <Breadcrumb.Item >Data</Breadcrumb.Item>
    </Breadcrumb>
        <Alert variant='primary' >this is a button</Alert>
        <Button size="lg">test Button</Button>
         
      </header>
      </Container>
    </div>
  );
}

export default App;
