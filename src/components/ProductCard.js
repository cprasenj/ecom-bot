import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Card, Button, Header, Grid } from 'semantic-ui-react';
import config from '../config/config';
import CircularImage from './CircularImage';
import Popup from "reactjs-popup";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import ReactPolling from 'react-polling';
import axios from 'axios';

const options = [
  "Price drop", "Coupon", "all"
]

const defaultOption = options[0]

class ProductCard extends Component {
notify = (message) => {if(message) {toast(message)} else {toast(this.type)}};
type = "Price drop"
hasPriceDropped = false

  constructor(props) {
          super(props);
          this.state = {showMessage: false};
      }
  render() {
    const categories = this.props.categories.map(category => category.name);
    const changeState = (value) => {this.state.showMessage = value}
    const getState = () => {return this.state.showMessage}


    return (
      <Card centered>
        <Card.Content>
          <Grid>
            <Grid.Column width={5}>
              <Link to={'/product/' + this.props.id}>
                <CircularImage src={this.props.src} />
              </Link>
            </Grid.Column>
            <Grid.Column width={11}>
              <Card.Header className="break-words">{this.props.name}</Card.Header>
              <Card.Meta>{categories.join(', ')}</Card.Meta>
              {this.props.price ?
                (
                  <Header as="h3" color="blue">
                    <div dangerouslySetInnerHTML={{ __html: config.CURRENCY + this.props.price }} />
                  </Header>
                )
                : null}
            </Grid.Column>
          </Grid>
        </Card.Content>
        <Card.Content extra>

          <ReactPolling
            url={'http://localhost:10001/isSubscribed'}
            interval= {5000} // in milliseconds(ms)
            retryCount={3} // this is optional
            onSuccess={(d) => {if(d && this.hasPriceDropped){this.notify("price has dropped")};changeState(true);this.hasPriceDropped=false;return true}}
            onFailure={() => console.log('handle failure')} // this is optional
            method={'GET'}
            render={({ startPolling, stopPolling, isPolling }) => {
              if(isPolling) {
                return (
                  <div></div>
                );
              } else {
                return (
                  <div> Hello I stopped polling</div>
                );
              }
            }}
          />


          <ReactPolling
                      url={'http://localhost:10001/price/get'}
                      interval= {5000} // in milliseconds(ms)
                      retryCount={3} // this is optional
                      onSuccess={(d) => {if(d != 12 ){this.hasPriceDropped = true};return true}}
                      onFailure={() => console.log('handle failure')} // this is optional
                      method={'GET'}
                      render={({ startPolling, stopPolling, isPolling }) => {
                        if(isPolling) {
                          return (
                          <div></div>
                          );
                        } else {
                          return (
                            <div> Hello I stopped polling</div>
                          );
                        }
                      }}
                    />


                    <ReactPolling
                                          url={'http://localhost:10001/coupon/get'}
                                          interval= {5000} // in milliseconds(ms)
                                          retryCount={3} // this is optional
                                          onSuccess={(d) => {if(d){this.notify("Coupon is available for this product")};return true}}
                                          onFailure={() => console.log('handle failure')} // this is optional
                                          method={'GET'}
                                          render={({ startPolling, stopPolling, isPolling }) => {
                                            if(isPolling) {
                                              return (
                                              <div></div>
                                              );
                                            } else {
                                              return (
                                                <div> Hello I stopped polling</div>
                                              );
                                            }
                                          }}
                                        />

          <Popup trigger={<Button color="blue" compact> Set Notification &gt;</Button>} modal>
              {close => (
                  <div className="modal">
                      <a className="close" onClick={close}>
                          &times;
                  </a>
                  <div className="header"> Set alerts </div>
                  <div className="content">
                      <Dropdown options={options} onChange={(x) => {this.type = x.value}} value={defaultOption} placeholder="Select an option" />
                  </div>
                  <div className="actions">
                    <button
                      className="button"
                      onClick={() =>{
                          axios.post("http://localhost:10001/subscribe")
                          close()
                        }
                      }
                    >
                      Set Alert
                    </button>
                  </div>
              </div>
              )}
          </Popup>
                              <ToastContainer autoClose={false} />

        </Card.Content>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProductCard;
