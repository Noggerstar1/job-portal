package com.lukas.JobPortal.mapper;

import com.lukas.JobPortal.dto.JobOfferDto;
import com.lukas.JobPortal.entity.JobOffer;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface JobOfferMapper {
    JobOffer map(JobOfferDto dto);

}
