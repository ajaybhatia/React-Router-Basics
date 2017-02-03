import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export class Two extends Component {
  toHome(event) {
    event.preventDefault();

    const name = this.refs.name.value;
    const food = this.refs.food.value;

    browserHistory.push('/hello/' + name + "?food=" + food);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <form role="form" onSubmit={this.toHome.bind(this)}>
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  ref="name"
                  className="form-control"
                  placeholder="Your Name Here"
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Favorite Food</label>
                <input
                  type="text"
                  ref="food"
                  className="form-control"
                  placeholder="Your Favorite Food"
                />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
