package com.lukas.JobPortal.service;

import com.lukas.JobPortal.dto.JobOfferDto;
import com.lukas.JobPortal.entity.JobOffer;
import com.lukas.JobPortal.mapper.JobOfferMapper;
import com.lukas.JobPortal.repository.JobOfferRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class JobOfferService {

    private final JobOfferRepository jobOfferRepository;
    private final JobOfferMapper jobOfferMapper;

    public List<JobOffer> findAll() {
        return jobOfferRepository.findAll();
    }


    public Long create(JobOfferDto jobOfferDto) {
        JobOffer jobOffer = jobOfferMapper.map(jobOfferDto);
        var savedEntity = jobOfferRepository.save(jobOffer);
        log.info("JobOffer created {}", savedEntity);


        return savedEntity.getId();
    }


}
