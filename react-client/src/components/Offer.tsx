import "./styles.css"
import {JobOffer} from "../api/model.ts";
import {useNavigate} from "react-router-dom";
import {timeAgo} from "../utils/Functions.ts";
export const Offer = (jobOffer: JobOffer) => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/detail-nabidky', {state: jobOffer});

    return <div className="card p-1 mb-3 col-lg-8 shadow-sm job-offer-hover" onClick={handleClick}>
        <div className="card-body d-flex justify-content-between align-items-center">
            <h5 className="card-title">{jobOffer.offerName}</h5>
            <p className="card-text">
                <small className="text-muted">
                    {timeAgo(jobOffer.createdAt)}
                </small>
            </p>
        </div>
    </div>
}