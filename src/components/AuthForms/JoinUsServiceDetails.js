import styles from "./JoinUsServiceDetails.module.css";
import { useParams } from "react-router-dom";
import PetWalker from "./ServiceProviderForms/PetWalker";
import PetGroomer from "./ServiceProviderForms/PetGroomer";
const JoinUsRegister = () => {
    const params = useParams();
    console.log(params);
    return (
        <>
            {params.joinAs === "petwalker" ? <PetWalker /> : <></>}
            {params.joinAs === "petgroomer" ? <PetGroomer /> : <></>}
        </>
    );
};

export default JoinUsRegister;
