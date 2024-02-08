import {useLocation} from "react-router-dom";
import {JobOffer} from "../api/model.ts";
import {timeAgo} from "../utils/Functions.ts";


const JobOfferDetails = () => {
    const location = useLocation();
    const jobOffer: JobOffer = location.state;

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title mb-3">{jobOffer.offerName}</h2>
                            <h6 className="text-muted">Zveřejněno: {timeAgo(jobOffer.createdAt)}</h6>
                            <p className="mt-4"><strong>Popis nabídky:</strong> {jobOffer.offerDescription}</p>
                            <p><strong>Technologie:</strong> {jobOffer.technologies ? jobOffer.technologies : "neuvedeno"}</p>
                            <p><strong>Kontaktní email:</strong> <a href={`mailto:${jobOffer.email}`} className="text-decoration-none">{jobOffer.email}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobOfferDetails;