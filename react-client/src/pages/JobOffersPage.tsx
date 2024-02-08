import {Offer} from "../components/Offer.tsx";
import {useEffect, useState} from "react";
import {getJobOffers} from "../api/api.ts";
import {JobOffer} from "../api/model.ts";
import {CircularProgress} from "@mui/material";
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

export const JobOffersPage = () => {
    const navigate = useNavigate();

    const [jobOffers, setJobOffers] = useState<JobOffer[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(()=> {
        setIsLoading(true);
        getJobOffers()
            .then((res)=> {
                setJobOffers(res);
            })
            .catch((error)=> {
                console.log(error);
                toast.error("Spojení se serverem se nezdařilo.");
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])

    return (
        <div>
            <h2 className="fw-bold mb-3">Nabídky práce</h2>
            <h5>Nejnovější nabídky</h5>

            <div className="container my-5">
                {isLoading && (<div><CircularProgress size="16px" /></div>)}

                <div className="row justify-content-center">

                    {jobOffers
                        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                        .map((jo) => {
                        return (
                            <Offer
                                key={jo.id}
                                id={jo.id}
                                offerName={jo.offerName}
                                offerDescription={jo.offerDescription}
                                email={jo.email}
                                technologies={jo.technologies}
                                createdAt={jo.createdAt}
                            />
                        )
                    })}
                    {(!jobOffers || jobOffers.length == 0) && !isLoading && (
                        <div>Nenašli jsme žádnou nabídku práce.
                            <div onClick={() => navigate("/pridat-nabidku")} className="text-primary link">Vytvořte ji</div>
                        </div>)}


                </div>
            </div>
        </div>
    )
}