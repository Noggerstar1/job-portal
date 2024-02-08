package com.lukas.JobPortal.controller;

import com.lukas.JobPortal.dto.JobOfferDto;
import com.lukas.JobPortal.entity.JobOffer;
import com.lukas.JobPortal.service.JobOfferService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
@RestController
@Slf4j
public class JobOfferController {

    public final JobOfferService jobOfferService;

    @GetMapping("/jobOffers")
    public ResponseEntity<List<JobOffer>> getJobOffers() {
        var jobOffers = jobOfferService.findAll();
        return ResponseEntity.ok(jobOffers);
    }

    @PostMapping("/jobOffer")
    public ResponseEntity<Long> createJobOffer(@Valid @RequestBody JobOfferDto jobOfferDto) {
        var jobOfferId = jobOfferService.create(jobOfferDto);
        return ResponseEntity.ok(jobOfferId);
    }


}
