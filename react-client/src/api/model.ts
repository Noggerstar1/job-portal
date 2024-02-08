export interface JobOffer {
    id: string
    offerName: string;
    offerDescription: string;
    email: string;
    createdAt: Date;
    technologies?: string;
}

export interface JobOfferRequest {
    offerName: string;
    offerDescription: string;
    email: string;
    technologies?: string;
}

export interface CreateJobOfferResponse {
    id: number;
}