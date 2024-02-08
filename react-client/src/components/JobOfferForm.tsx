import {useState} from "react";
import {Box, Button, CircularProgress, TextField} from "@mui/material";
import {JobOffer, JobOfferRequest} from "../api/model.ts";
import {postJobOffer} from "../api/api.ts";
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {validateEmail} from "../utils/Functions.ts";

type FormErrors = {
    [K in keyof JobOffer]?: string;
};

export const JobOfferForm: React.FC = () => {
    const navigate = useNavigate();

    const [formState, setFormState] = useState<JobOfferRequest>({
        offerName: '',
        offerDescription: '',
        email: '',
        technologies: '',
    });
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const validateForm = () => {
        const errors: FormErrors = {};
        if (formState.offerName.length < 5 || formState.offerName.length > 50) {
            errors.offerName = 'Název musí být dlouhý 5 až 50 znaků';
        }
        if (formState.offerDescription.length < 10 || formState.offerDescription.length > 200) {
            errors.offerDescription = 'Popis musí být dlouhý 10 až 200 znaků';
        }
        if (!validateEmail(formState.email)) {
            errors.email = 'Email není validní';
        }
        if (formState.technologies && formState.technologies.length > 100) {
            errors.technologies = 'Technologie nesmí zabrat více než 100 znaků';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            postJobOffer(formState)
                .then(() => {
                    toast.success("Nabídka byla vytvořena");
                    navigate("/nabidky");
                })
                .catch((err) => {
                    toast.error("Spojení se serverem se nezdařilo")
                    console.error("chyba na straně serveru: " + err);
                })
                .finally(() => {
                    setIsSubmitting(false);
                })
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} className="container mt-4">
            <TextField
                label="Název nabídky (např. Frontend developer)"
                name="offerName"
                value={formState.offerName}
                onChange={handleChange}
                error={!!formErrors.offerName}
                helperText={formErrors.offerName}
                margin="normal"
                fullWidth
                required
            />
            <TextField
                label="Popis nabídky"
                name="offerDescription"
                value={formState.offerDescription}
                onChange={handleChange}
                error={!!formErrors.offerDescription}
                helperText={formErrors.offerDescription}
                margin="normal"
                fullWidth
                multiline
                rows={4}
            />
            <TextField
                label="Email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                error={!!formErrors.email}
                helperText={formErrors.email}
                margin="normal"
                fullWidth
            />
            <TextField
                label="Technologie"
                name="technologies"
                value={formState.technologies}
                onChange={handleChange}
                error={!!formErrors.technologies}
                helperText={formErrors.technologies}
                margin="normal"
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary" className="mt-3">
                {isSubmitting ? <CircularProgress color="inherit" size={24} /> : 'Vytvořit nabídku'}
            </Button>


        </Box>
    );
};