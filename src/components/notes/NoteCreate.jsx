import React from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class NoteCreate extends React.Component {
  constructor(props) {
    super(props);
    this.submitNote = props.submitNote;

    this.state = {
      title: null,
      body: null,
      errorTitle: null,
      errorBody: null,
      titleCharLeft: 50,
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onTitleChange(event) {
    const title = event.target.value;
    this.setState({
      titleCharLeft: 50,
    });

    if (!title) {
      this.setState({
        errorTitle: "Title is invalid",
      });
      return;
    }

    this.setState({
      titleCharLeft: 50 - title.length,
    });

    if (title.length > 50) {
      this.setState({
        errorTitle: "Title should be less than 50 character",
      });
      return;
    }

    this.setState({
      title,
    });
  }

  onBodyChange(event) {
    const body = event.target.value;

    if (!body) {
      this.setState({
        errorBody: "Body is invalid",
      });

      return;
    }

    this.setState({
      body,
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.setState({
      errorTitle: null,
      errorBody: null,
    });

    const { title, body } = this.state;

    if (!title || !body) {
      if (!title)
        this.setState({
          errorTitle: "Title is invalid",
        });
      if (!body)
        this.setState({
          errorBody: "Body is invalid",
        });

      return;
    }

    this.submitNote({
      title: this.state.title,
      body: this.state.body,
    });
  }
  render() {
    return (
      <>
        <form onSubmit={this.onFormSubmit}>
          <h3 className="form__title">Today's Story</h3>

          <div className="form__group form__limit__char">
            <input
              onChange={this.onTitleChange}
              type="text"
              placeholder="Give it a Title"
              className="form__input"
            />
            <span className="form__limit__char__content">
              {this.state.titleCharLeft > 0
                ? this.state.titleCharLeft
                : "Overflow !"}
            </span>
            {this.state.errorTitle && (
              <span className="form__invalid__feedback">
                *( {this.state.errorTitle}
              </span>
            )}
          </div>

          <div className="form__group">
            <textarea
              onChange={this.onBodyChange}
              className="form__input"
              placeholder="Today i ...."
            ></textarea>
            {this.state.errorBody && (
              <span className="form__invalid__feedback">
                *( {this.state.errorBody}
              </span>
            )}
          </div>

          <div className="form__action flex__end">
            <Link to="/" className="btn btn__cancel mr-1">
              Kembali
            </Link>
            <button type="submit" className="btn btn__submit">
              Simpan
            </button>
          </div>
        </form>
      </>
    );
  }
}

NoteCreate.propTypes = {
  submitNote: PropTypes.func.isRequired
};

export default NoteCreate;
