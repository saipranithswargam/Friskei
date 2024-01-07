import React from "react";
import styles from "./ProviderProfile.module.css";
import Header from "../../components/Header/Header";
import Rating from "./Rating";
import { useState, useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";
import { useParams, useNavigate } from "react-router-dom";
import InitialLoader from "../../components/PageLoader/InitialLoader";
import PublicIcon from '@mui/icons-material/Public';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
const ProviderProfile = () => {
    const { id } = useParams();
    const [providerDetails, setProviderDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleContact = () => {
        const data = { email: providerDetails?.email, name: providerDetails?.name };
        navigate(`/contact/provider/${id}`, { state: providerDetails });
    }
    const handleRate = () => {

    }
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get(`/search/provider/${id}`);
            setProviderDetails(response.data);
            console.log(response.data);
            console.log(response.data?.location?.coordinates[0])
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
            navigate(-1);
        }
    };
    useEffect(() => {
        fetchData();
    }, [id]);
    return (
        <>
            <Header />
            {loading ? (
                <InitialLoader />
            ) : (
                <div className={styles.upperContainer}>
                    <div className={styles.upperIntro}>
                        <div className={styles.imageDiv}>
                            <img
                                src="https://www.rover.com/cf-image-cdn/remote/images/people/NEZep0og/ouzfcxhlyx/original?width=450&height=450&quality=70&fit=cover"
                                alt="userImage"
                                height="250"
                                width="250"
                            />
                        </div>
                        <div className={styles.infoDiv}>
                            <h1>{providerDetails?.name}</h1>
                            <p><PublicIcon /> {providerDetails?.country}</p>
                            <p><PlaceIcon sx={{ fontSize: '26px' }} /> {providerDetails?.state}, {providerDetails?.city}</p>
                            <p><PhoneInTalkIcon /> {providerDetails?.mobileNum}</p>
                            <p>
                                <ThumbsUpDownIcon sx={{ marginRight: '5px', fontSize: '28px' }} /> <Rating Rating={5} />
                            </p>
                        </div>
                        <div className={styles.buttonDiv}>
                            <button onClick={handleContact} >Contact</button>
                            <button>Rate Experience</button>
                        </div>
                    </div>
                    <div className={styles.serviceDetails}>
                        <h1>Services</h1>
                        <div className={styles.servicesTable}>
                            {providerDetails?.services.map((item, index) =>
                                <div key={item?._id} className={styles.service}>
                                    <p className={styles.first}>{item?.serviceType}</p>
                                    <p className={styles.second}>{item?.petType}</p>
                                    <p className={styles.third}>{item?.priceTicker}{item?.price}</p>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className={styles.mapouter}>
                        <h1>Location</h1>
                        <div className={styles.gmap_canvas}>
                            <iframe
                                title="map"
                                className={styles.gmap_iframe}
                                width="100%"
                                frameborder="0"
                                marginheight="0"
                                marginwidth="0"
                                src={`https://maps.google.com/maps?q=${providerDetails?.location?.coordinates[1]},${providerDetails?.location?.coordinates[0]}&hl=en&z=14&output=embed`}
                            ></iframe>
                        </div>
                    </div>
                    <div className={styles.reviews}>
                        <div className={styles.review}>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProviderProfile;
