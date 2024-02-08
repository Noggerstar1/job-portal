package com.lukas.JobPortal.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class JobOfferDto {

    @NotBlank(message = "Offer name is required")
    @Size(min = 5, max = 50, message = "Offer name must be between 5 and 50 characters")
    private String offerName;

    @NotBlank(message = "Offer description is required")
    @Size(min = 10, max = 200, message = "Offer description must be between 10 and 200 characters")
    private String offerDescription;

    @NotBlank(message = "Email is required")
    @Email(message = "Email should be valid")
    private String email;

    @Size(max = 100, message = "Technologies must be no more than 100 characters")
    private String technologies;
}
