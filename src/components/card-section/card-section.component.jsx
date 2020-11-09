import React from 'react';
import './card-section.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCardsSectionSelector } from '../../redux/cards-section/cards-section.selector';

const CardSection = ({ cardsSection }) => {
    return (
        <div className="cards-container">
            <div className="cards">
                {
                    cardsSection.map((singleCard) => {
                        return (
                            <div className="card content" key={singleCard.id}>
                                <div className="card-content">
                                    <div className="card-img">
                                        <img src={`${singleCard.imageUrl}`} alt={singleCard.title} />
                                    </div>
                                    <div className="card-label">{singleCard.label}</div>
                                    <div className="card-title">
                                        {singleCard.title}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                <div className="card form">
                    <Link to="/signin">
                        <div className="form-title">Have an account?</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cardsSection: selectCardsSectionSelector
});

export default connect(mapStateToProps)(CardSection);
