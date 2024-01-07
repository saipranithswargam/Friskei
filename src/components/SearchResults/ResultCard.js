import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./ResultCard.module.css";
import PublicIcon from '@mui/icons-material/Public';
import PlaceIcon from '@mui/icons-material/Place';

const ResultCard = ({ name, country, state, city, alsoOffers, price, currentService, priceTicker, providerId }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/search/provider/${providerId}`);
    };

    return (
        <div className={styles.main}>
            <div className={styles.details}>
                <div className={styles.imageDiv}>
                    <img
                        src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg"
                        alt="dog"
                        height={200}
                        width={200}
                    />
                </div>
                <div className={styles.content}>
                    <h1>{name}</h1>
                    <p><PublicIcon sx={{ fontSize: '24px' }} /> {country}</p>
                    <p><PlaceIcon sx={{ fontSize: '26px' }} /> {state}, {city}</p>
                    {alsoOffers?.length !== 0 && <p>
                        <span className={styles.more}>AlsoOffers :-</span>
                        {alsoOffers?.map((item, index) =>
                            item !== currentService && <span className={styles.more} key={index}>{item}</span>
                        )}</p>}
                    <button onClick={handleClick}>View Profile</button>
                </div>
            </div>
            <div className={styles.price}>
                <p>From</p>
                <p>{priceTicker}{price}</p>
            </div>
        </div>
    );
};

export default ResultCard;
