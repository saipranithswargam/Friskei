import React from "react";
import styles from "./ProviderProfile.module.css";
import Header from "../../components/Header/Header";
import Rating from "./Rating";
import { useState, useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";
import { useParams, useNavigate } from "react-router-dom";
import InitialLoader from "../../components/PageLoader/InitialLoader";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from "@mui/material";
import styled from "styled-components";
const StyledTableContainer = styled(TableContainer)`
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    height: fit-content;
    background-color: #f4f5f6 !important;
`;

const StyledTable = styled(Table)`
    && {
        border-collapse: collapse;
        width: 100%;
    }
`;

const StyledTableHeadCell = styled(TableCell)`
    && {
        font-weight: bold;
    }
`;

const StyledTableCell = styled(TableCell)`
    && {
        padding: 8px;
        border-bottom: 1px solid #ddd;
    }
`;
const ProviderProfile = () => {
    const { id } = useParams();
    const [providerDetails, setProviderDetails] = useState(null);
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();
    const fetchData = async () => {
        try {
            const response = await axiosInstance.get("/users/details");
            setProviderDetails(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
            navigate(-1);
        }
    };
    useEffect(() => {
        // fetchData();
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
                                height="240px"
                                width="240px"
                            />
                        </div>
                        <div className={styles.infoDiv}>
                            <h1>Name</h1>
                            <p>place,city</p>
                            <div style={{ marginTop: "0.5rem" }}>
                                <Rating Rating={5} />
                                <span>(5)</span>
                            </div>
                            <p>Mobile number</p>
                            <div className={styles.buttonDiv}>
                                <button>Contact Name</button>
                                <button>Rate Experience</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.lowerMain}>
                        <StyledTableContainer component={Paper}>
                            <Typography variant="h4" gutterBottom>
                                Services
                            </Typography>
                            <StyledTable>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableHeadCell>
                                            Service
                                        </StyledTableHeadCell>
                                        <StyledTableHeadCell>
                                            Price
                                        </StyledTableHeadCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <StyledTableCell>
                                            Boarding
                                        </StyledTableCell>
                                        <StyledTableCell>$50</StyledTableCell>
                                    </TableRow>
                                    {/* Add more rows for other services as needed */}
                                </TableBody>
                            </StyledTable>
                        </StyledTableContainer>
                        <div className={styles.ratingDiv}>
                            <h1>Reviews</h1>
                            <div className={styles.ratingCard}>
                                <div className={styles.name_imageDiv}>
                                    <img
                                        src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/94af8113-410f-4d88-9f7e-9cc981ff415e._CR0,0,826,826_SX48_.jpg"
                                        alt="r1"
                                    />
                                    <p>saipranith</p>
                                </div>
                                <div className={styles.rating}>
                                    <Rating Rating={4} />
                                </div>
                                <div className={styles.ratingDescription}>
                                    <p>VeryGood service</p>
                                </div>
                            </div>
                            <div className={styles.ratingCard}>
                                <div className={styles.name_imageDiv}>
                                    <img
                                        src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/94af8113-410f-4d88-9f7e-9cc981ff415e._CR0,0,826,826_SX48_.jpg"
                                        alt="r1"
                                    />
                                    <p>saipranith</p>
                                </div>
                                <div className={styles.rating}>
                                    <Rating Rating={3} />
                                </div>
                                <div className={styles.ratingDescription}>
                                    <p>VeryGood service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProviderProfile;
