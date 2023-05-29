import { useParams } from "react-router-dom";
import PetWalker from "./ServiceProviderForms/PetWalker";
import PetGroomer from "./ServiceProviderForms/PetGroomer";
import PetTrainer from "./ServiceProviderForms/PetTrainer";
import Vet from "./ServiceProviderForms/Vet";
import DayCarer from "./ServiceProviderForms/DayCarer";
import PetBreeder from "./ServiceProviderForms/PetBreeder";
import PetAdoption from "./ServiceProviderForms/PetAdoption";
const JoinUsRegister = () => {
    const params = useParams();
    console.log(params);
    return (
        <>
            {params.joinAs === "petwalker" ? <PetWalker /> : <></>}
            {params.joinAs === "petgroomer" ? <PetGroomer /> : <></>}
            {params.joinAs === "pettrainer" ? <PetTrainer /> : <></>}
            {params.joinAs === "vet" ? <Vet /> : <></>}
            {params.joinAs === "daycarer" ? <DayCarer /> : <></>}
            {params.joinAs === "petbreeder" ? <PetBreeder /> : <></>}
            {params.joinAs === "petadoption" ? <PetAdoption /> : <></>}
        </>
    );
};

export default JoinUsRegister;
