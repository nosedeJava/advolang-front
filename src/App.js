import React from "react";
import './components/cards/Cards.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {CardList} from './components/cards/CardList';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import styles from './mystyle.module.css';

/*function PostActions() {
  return (
    <div className="p-t-sm">
      <Button color="link" className="m-r text-muted">
        <FA name="thumbs-up" /> Like
      </Button>
      <Button color="link" className="text-muted">
        <FA name="comment" /> Comment
      </Button>
      <Button color="link" className="pull-right text-muted">
        <FA name="ellipsis-h" />
      </Button>
    </div>
  );
}*/


const elementos=[
  {
    tipo: 'textCard',
		titulo: 'Word of the Day',
		autor: 'William Shakespeare',
    fecha: 'Agosoto 27, 2020',
    feature: 'adjective',
    mensaje: 'be•nev•o•lent',
    footer: 'Well meaning and kindly...a benevolent smile.'
  },

  {
    tipo: 'imageCard',
    titulo: 'Day',
    autor: 'Homero de Grecia',
    fecha: 'Agosoto 27, 2020',
    descripcion: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    image_url: require("./resources/img/risa.png")
  },

  {
    tipo: 'videoCard',
    titulo: 'Ode to the mets-The Strokes',
    autor: 'Antonio Vivaldi',
    fecha: 'Agosoto 27, 2020',
    descripcion: 'The New Abnormal album',
    video_url: "https://www.youtube.com/embed/BjC0KUxiMhc"
  },

  {
    tipo: 'audioCard',
    titulo: 'Futurama',
    autor: 'Matt Groening',
    fecha: 'Agosoto 27, 2020',
    descripcion: 'Prueba audio',
    portada_url: require("./resources/img/bender.png"),
    audio_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  }


];



const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>Recomendaciones</div>,
    main: () => <Container>  <h1>Recomendaciones</h1> <CardList cardList={elementos} /></Container>
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

/*const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'green',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
});*/

class App extends React.Component{
  constructor(){
      super();
      this.state={show:false};
  }


  render(){
    return (
      <Router>
        <Button onClick={()=>{this.setState({show:!this.state.show})}}
          variant="outlined" color="secondary" size="medium"
        >
          { this.state.show? 'Hide' : 'Show'}
          Div
        </Button>
        <div className={styles.container} style={{ display: "flex" }}>
          {
            this.state.show?

              <div className={styles.bigblue}>
                <p><a href="#main_nav" id="access_nav" class="access_aid">Skip</a></p>
                  <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/bubblegum">Bubblegum</Link>
                    </li>
                    <li>
                      <Link to="/shoelaces">Shoelaces</Link>
                    </li>
                  </ul>

                <Switch>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      children={<route.sidebar />}
                    />
                  ))}
                </Switch>
              </div>
            :null
          }

          <div style={{ flex: 1, padding: "10px" }}>
            <Switch>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </Router>

    );
  }
}


export default App;


/*export default function App() {
  return (
    <Container>
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <Card>
            <CardBody>
              <textarea name="status" id="status" className="form-control" placeholder="Write your message..." />
            </CardBody>
            <CardFooter>
              <Button color="secondary">
                <FA name="paperclip" /> Attach File
              </Button>
              <Button color="primary" className="pull-right">
                Share
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader class="mycard">
              <div className="mydiv">
                <div className="avatar avatar-base bg-blue">

                  <div className="user-initials">

                    GC <h5 className="inline m-b-none m-t-none">George Costanza</h5>

                  </div>

                </div>
              </div>
            </CardHeader>
            <CardBody>
              <div>
                <iframe
                  src="https://player.vimeo.com/video/315269363?color=f15f5f&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0"
                  className="w-full"
                  title="video"
                  width="100%"
                  height="360"App
                  frameBorder="0"
                  webkitallowfullscreen=""
                  mozallowfullscreen=""
                  allowFullScreen=""
                />
              </div>
              <div>
                <Avatar initials="DP" color="success" size="small" />
                <Avatar initials="NM" color="gold" size="small" className="m-l-n-sm" />
                <small className="m-l-sm text-muted">David Putty, Newman and 12 others.</small>
              </div>
              <PostActions />
            </CardBody>
            <CardFooter>
              <div className="display-flex">
                <Avatar initials="JS" color="orange" />
                <input type="text" className="form-control m-l" />
              </div>
            </CardFooter>
          </Card>

          <CardList cardList={items} />


          <Card>
            <CardHeader>
              <div className="m-r-sm inline-block">
                <Avatar initials="EB" color="blue" />
              </div>
              <h5 className="inline m-b-none m-t-none">Elaine Benis</h5>
            </CardHeader>
            <CardBody>
              <div>
                <h3>Does anyone here like muffin tops?</h3>
              </div>
              <PostActions />
            </CardBody>
            <CardFooter>
              <div className="display-flex">
                <Avatar initials="JS" color="orange" />
                <input type="text" className="form-control m-l" />
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="m-r-sm inline-block">
                <Avatar initials="CK" color="blue" />
              </div>
              <h5 className="inline m-b-none m-t-none">Cosmo Kramer</h5>
            </CardHeader>
            <CardBody>
              <div>
                <h3>Lookin' forward to Little Jerry's fight tonight. Who's coming?</h3>
              </div>
              <PostActions />
            </CardBody>
            <CardFooter>
              <div className="display-flex">
                <Avatar initials="JS" color="orange" />
                <input type="text" className="form-control m-l" />
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="m-r-sm inline-block">
                <div className="avatar avatar-base bg-orange">
                  <div className="user-initials">JS</div>
                </div>
              </div>
              <h5 className="inline m-b-none m-t-none">Jerry Seinfeld</h5>
            </CardHeader>
            <CardBody>
              <div>
                <p>
                  Whats the deal with dashboard designs? Is there anyone out there that can help me figure this out??
                </p>
              </div>
              <PostActions />
            </CardBody>
            <CardFooter>
              <div className="display-flex">
                <Avatar initials="JS" color="orange" />
                <input type="text" className="form-control m-l" />
              </div>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}*/
