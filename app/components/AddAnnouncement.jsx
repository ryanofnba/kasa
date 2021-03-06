import React, { Component } from 'react';
const { connect } = require('react-redux');
const actions = require('actions');

class AddAnnouncement extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();

    const { dispatch } = this.props;
    const announceText = this.refs.announceText.value;
    const announcement = {
      text: announceText
    };

    if (announceText.length > 0) {
      this.refs.announceText.value = '';
      dispatch(actions.startAddAnnouncement(announcement));
    }
    else {
      this.refs.announceText.focus();
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="announceText" placeholder="Announcement" />
          <button className="button">Add Announcement</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddAnnouncement);
