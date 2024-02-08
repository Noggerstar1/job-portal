import {CreateJobOfferResponse, JobOffer, JobOfferRequest} from "./model.ts";
import {APP_URL} from "../utils/Constants.ts";

export async function getJobOffers(): Promise<JobOffer[]> {
    const response = await fetch(APP_URL + "/jobOffers", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    });

    const parsedResponse: JobOffer[] = await response.json();
    if (response.status > 299 || !response.ok) {
        throw Error("Server sent an error message - when creating job offer");
    }

    return parsedResponse;
}

export async function postJobOffer(options: JobOfferRequest): Promise<CreateJobOfferResponse> {
    const response = await fetch(APP_URL + "/jobOffer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            offerName: options.offerName,
            offerDescription: options.offerDescription,
            email: options.email,
            technologies: options.technologies
        })
    });

    const parsedResponse: CreateJobOfferResponse = await response.json();
    if (response.status > 299 || !response.ok) {
        throw Error("Server sent an error message - when creating job offer");
    }

    return parsedResponse;
}