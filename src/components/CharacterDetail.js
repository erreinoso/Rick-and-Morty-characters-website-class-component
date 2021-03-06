import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Characterdetail.scss';
import PropTypes from 'prop-types';

class CharacterDetail extends React.Component {
  constructor(props) {
    super(props);
    this.iconFunction = this.iconFunction.bind(this);
  }
  handleModalContentClick = (ev) => {
    ev.preventDefault();
  };

  iconFunction() {
    const status = this.props.status;
    let icon;
    if (this.props.status === 'Dead') {
      return (icon = 'far fa-dizzy');
    } else if (status === 'Alive') {
      return (icon = 'far fa-smile-beam');
    } else {
      return (icon = 'fas fa-question');
    }
  }

  render() {
    return (
      <div className="container">
        <Link style={{ textDecoration: 'none' }} to="/">
          <div className="detailCard" onClick={this.handleModalContentClick}>
            <Link style={{ textDecoration: 'none' }} to="/">
              <span className="detailCard__back">
                <i class="fas fa-backward"></i> Volver{' '}
              </span>
            </Link>
            <div className="detailCard__img">
              <img
                src={this.props.image}
                alt={`Imagen de ${this.props.name}`}
              />
            </div>
            <div className="detailCard__text">
              <h2>{this.props.name}</h2>
              <ul className="detailsList">
                <li>
                  Status: <span className="listData">{this.props.status} </span>{' '}
                  <i class={this.iconFunction()}></i>
                </li>
                <li>
                  Species:{' '}
                  <span className="listData">{this.props.species} </span>
                  {this.props.status === 'Alien' ? (
                    <i class="fab fa-reddit-alien"></i>
                  ) : (
                    <i class="far fa-user"></i>
                  )}
                </li>
                <li>
                  Origin:{' '}
                  <span className="listData">{this.props.origin.name}</span>
                </li>
                <li>
                  Episodes:{' '}
                  <span className="listData">{this.props.episodes}</span>
                </li>
              </ul>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
CharacterDetail.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  origin: PropTypes.string,
  episodes: PropTypes.number,
  id: PropTypes.number,
  handleModalContentClick: PropTypes.func,
};

export default CharacterDetail;
