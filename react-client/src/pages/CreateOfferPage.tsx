import {JobOfferForm} from "../components/JobOfferForm.tsx";
export const CreateOfferPage = () => {
    return <div>
        <h2 className="fw-bold">Přidat nabídku</h2>
        <div className="row-cols-md-2 row-cols-lg-4 justify-content-center">
            <JobOfferForm />
        </div>
    </div>
}